import React, { useState } from "react";
import { User } from "../../type/type";
import styled from "styled-components";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <UserItemStyle>
      <div className="container" onClick={handleModal}>
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
            {user.name.title} {user.name.first} {user.name.last}
          </h2>

          <InfoItem>
            <span className="label">Email:</span> {user.email}
          </InfoItem>

          <InfoItem>
            <span className="label">Phone:</span> {user.phone}
          </InfoItem>
        </div>
      </div>
      {modal && <Modal user={user} onClose={handleModal} />}
    </UserItemStyle>
  );
};

const Modal: React.FC<{ user: User; onClose: () => void }> = ({
  user,
  onClose,
}) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <CloseButton onClick={onClose}></CloseButton>
        </ModalHeader>
        <ModalBody>
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <InfoItem>
            <span className="label">Email:</span> {user.email}
          </InfoItem>
          <InfoItem>
            <span className="label">Phone:</span> {user.phone}
          </InfoItem>
          <InfoItem>
            <span className="label">Cell:</span> {user.cell}
          </InfoItem>
          <InfoItem>
            <span className="label">Date of Birth:</span>{" "}
            {new Date(user.dob.date).toLocaleDateString()}
          </InfoItem>
          <InfoItem>
            <span className="label">Age:</span> {user.dob.age}
          </InfoItem>
          <InfoItem>
            <span className="label">Nationality:</span> {user.nat}
          </InfoItem>
          <InfoItem>
            <span className="label">Location:</span>
            <br />
            {user.location.street.number} {user.location.street.name},<br />
            {user.location.city}, {user.location.state},<br />
            {user.location.country}, {user.location.postcode}
          </InfoItem>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
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

  &:hover {
    transform: translateY(-5px);
  }

  .container {
    display: flex;
    flex-direction: column;
    cursor: pointer;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
`;

export default UserItem;
