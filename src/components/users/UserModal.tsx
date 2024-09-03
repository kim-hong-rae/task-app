import React from "react";
import { User } from "../../type/type";
import styled from "styled-components";

interface UserModalProps {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="image-container">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
        </div>
        <h2>
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <InfoItem>
          <span className="label">Gender:</span> {user.gender}
        </InfoItem>
        <InfoItem>
          <span className="label">Email:</span> {user.email}
        </InfoItem>
        <InfoItem>
          <span className="label">Location:</span> {user.location.city},{" "}
          {user.location.state}, {user.location.country}
        </InfoItem>
        <InfoItem>
          <span className="label">Username:</span> {user.login.username}
        </InfoItem>
        <InfoItem>
          <span className="label">Phone:</span> {user.phone}
        </InfoItem>
      </ModalContent>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .image-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 10px;
    color: #333;
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

export default UserModal;
