import React, { useState } from "react";
import { User } from "../../type/type";
import styled from "styled-components";
import UserModal from "./UserModal"; // 모달 컴포넌트 임포트

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열기
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <UserItemStyle onClick={handleOpenModal}>
        <div className="container">
          <div className="image-wrapper">
            <div className="image-container">
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                loading="lazy"
              />
            </div>
          </div>
          <div className="content-container">
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <InfoItem>
              <span className="label">Email:</span> {user.email}
            </InfoItem>
            <InfoItem>
              <span className="label">Phone:</span> {user.phone}
            </InfoItem>
          </div>
        </div>
      </UserItemStyle>
      {isModalOpen && <UserModal user={user} onClose={handleCloseModal} />}
    </>
  );
};

const UserItemStyle = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .image-wrapper {
    background-color: whitesmoke;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-container {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #ffffff;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content-container {
    padding: 20px;
  }
  h2 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
  }
`;

const InfoItem = styled.p`
  margin: 10px 0;
  color: #666;
  font-size: 0.9rem;
  .label {
    font-weight: bold;
    color: #444;
    margin-right: 5px;
  }
`;

export default UserItem;
