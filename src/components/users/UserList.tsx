// src/components/users/UserList.tsx
import { useEffect, useState } from "react";
import { fetchRandomUser } from "../../api/api";
import { SortType, User } from "../../type/type";
import UserItem from "./UserItem";
import Pagination from "../common/Pagination";
import styled from "styled-components";

interface UserListProps {
  searchValue: string;
  sortOrder: SortType;
}

const UserList = ({ searchValue, sortOrder }: UserListProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      try {
        const response = await fetchRandomUser();
        const allUsers = response.results;
        setUsers(allUsers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
    const nameB = `${b.name.first} ${b.name.last}`.toLowerCase();
    return sortOrder === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <UserListStyle>
      {loading ? (
        <div>
          <p className="content-result">로딩 중입니다...</p>
        </div>
      ) : currentUsers.length === 0 ? (
        <div>
          <p className="content-result">항목에 맞는 검색 결과가 없습니다.</p>
        </div>
      ) : (
        <>
          <div className="user-items">
            {currentUsers.map((user, index) => (
              <UserItem key={index} user={user} />
            ))}
          </div>
          <div className="pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      )}
    </UserListStyle>
  );
};

const UserListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  .content-result {
    margin-top: 48px;
    font-size: 36px;
  }

  .user-items {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .pagination {
    margin-top: -20px;
    padding-bottom: 10px;
  }
`;

export default UserList;
