import { useEffect, useState } from "react";
import { fetchRandomUser } from "../../api/api"; // API 함수 임포트
import { User } from "../../type/type";
import UserItem from "./UserItem"; // UserItem 컴포넌트 임포트
import styled from "styled-components";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const promises = Array.from({ length: 12 }, () => fetchRandomUser());
        const responses = await Promise.all(promises);

        const allUsers = responses.flatMap((response) => response.results);
        setUsers(allUsers); // 사용자 데이터 설정
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  return (
    <UserListStyle>
      {users.length === 0 ? (
        <p>Loading...</p> // 데이터 로딩 중일 때 표시할 내용 -> 추후 spinner로 변경 예정
      ) : (
        users.map((user, index) => <UserItem key={index} user={user} />)
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
