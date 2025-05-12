import React, { useState } from "react";
import { Modal, Typography } from "antd";
import styled from "styled-components";
import { Button } from "./Button";

const { Text, Title } = Typography;

interface DeleteConfirmationModalProps {
  children: (onOpen: () => void) => React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  message?: string;
  hideConfirmButton?: boolean;
  heading?: string;
}

const ErrorHeading = styled(Title)`
  color: red !important;
  font-size: 18px !important;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  children,
  onCancel = () => {},
  onConfirm = () => {},
  hideConfirmButton = false,
  heading = "Delete Confirmation",
  message = "Are you sure you want to delete this?",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleClose();
    onCancel();
  };

  const handleConfirm = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleClose();
    onConfirm();
  };

  return (
    <>
      {/* Render the custom comp */}
      {children(handleOpen)}

      <Modal
        open={isVisible}
        onCancel={handleCancel}
        footer={null} // Custom footer with buttons
        centered
        closable={false}
      >
        <ErrorHeading>{heading}</ErrorHeading>
        <Text>{message}</Text>
        <ButtonContainer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          {!hideConfirmButton && (
            <Button variant="primary" onClick={handleConfirm}>
              Confirm
            </Button>
          )}
        </ButtonContainer>
      </Modal>
    </>
  );
};

export default DeleteConfirmationModal;
