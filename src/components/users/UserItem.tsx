import styled from "styled-components";
import { useState } from "react";
import { User } from "../../type/type";
import UserModal from "./UserModal";

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

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
  margin: 10px;
  overflow: hidden;
  width: 300px;
  height: 400px;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
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
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: #333;
    font-size: 1.3rem;
    margin-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    height: auto;
    h2 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .image-container {
      width: 96px;
      height: 96px;
    }
    h2 {
      font-size: 1.1rem;
    }
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

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default UserItem;
