import { useEffect, useState } from "react";
import { fetchRandomUser } from "../../api/api";
import { User } from "../../type/type";
import UserItem from "./UserItem";
import styled from "styled-components";

interface UserListProps {
  searchValue: string;
}

const UserList: React.FC<UserListProps> = ({ searchValue }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const promises = Array.from({ length: 12 }, () => fetchRandomUser());
        const responses = await Promise.all(promises);

        const allUsers = responses.flatMap((response) => response.results);
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

  return (
    <UserListStyle>
      {filteredUsers.length === 0 ? (
        <p>No results found.</p>
      ) : (
        filteredUsers.map((user, index) => <UserItem key={index} user={user} />)
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
