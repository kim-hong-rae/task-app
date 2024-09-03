import { useEffect, useState } from "react";
import { fetchRandomUser } from "../../api/api";
import { SortType, User } from "../../type/type";
import UserItem from "./UserItem";
import styled from "styled-components";

interface UserListProps {
  searchValue: string;
  sortOrder: SortType;
}

const UserList = ({ searchValue, sortOrder }: UserListProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetchRandomUser();
        const allUsers = response.results;
        setUsers(allUsers);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  // Filter users based on searchValue
  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
    const nameB = `${b.name.first} ${b.name.last}`.toLowerCase();
    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  return (
    <UserListStyle>
      {sortedUsers.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        sortedUsers.map((user, index) => <UserItem key={index} user={user} />)
      )}
    </UserListStyle>
  );
};

const UserListStyle = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export default UserList;
