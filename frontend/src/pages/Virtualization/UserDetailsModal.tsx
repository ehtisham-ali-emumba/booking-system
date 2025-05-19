import React from "react";
import { Modal } from "antd";
import { type RandomUser } from "../../hooks/useRandomUsers";
import styled from "styled-components";

type Props = {
  user: RandomUser | null;
  onClose: () => void;
};

const UserImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 16px;
`;
export const UserDetailsModal: React.FC<Props> = ({ user, onClose }) => {
  if (!user) return null;
  return (
    <Modal open={!!user} onCancel={onClose} footer={null}>
      <div style={{ padding: 24, minWidth: 320, textAlign: "center" }}>
        <UserImage
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Phone:</b> {user.phone}
        </p>
        <p>
          <b>Age:</b> {user.dob.age} years old
        </p>
        <p>
          <b>Street:</b>
          {user.location.street
            ? `${user.location.street.number} ${user.location.street.name}`
            : "N/A"}
        </p>
        <p>
          <b>City:</b> {user.location.city}
        </p>
        <p>
          <b>Country:</b> {user.location.country}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};
