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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true); // API 요청 시작 시 로딩 상태 true로 설정
      try {
        const response = await fetchRandomUser();
        const allUsers = response.results;
        setUsers(allUsers);
        setLoading(false); // API 요청이 완료되면 로딩 상태 false로 설정
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  // 검색 값에 따른 사용자 필터링
  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  // 정렬된 사용자 목록
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
    const nameB = `${b.name.first} ${b.name.last}`.toLowerCase();
    return sortOrder === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  return (
    <UserListStyle>
      {loading ? (
        <div>
          <p className="content-result">로딩 중입니다...</p>{" "}
          {/* 로딩 중 메시지 표시 */}
        </div>
      ) : sortedUsers.length === 0 ? (
        <div>
          <p className="content-result">항목에 맞는 검색 결과가 없습니다.</p>
        </div>
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

  .content-result {
    margin-top: 48px;
    font-size: 36px;
  }
`;
export default UserList;
