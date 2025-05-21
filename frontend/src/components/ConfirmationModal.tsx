import React, { useState } from "react";
import { Modal, Typography } from "antd";
import styled from "styled-components";
import { Button } from "./Button";
import { uiStrings } from "../constants";

const { Text, Title } = Typography;

interface ConfirmationModalProps {
  children?: (onOpen: () => void) => React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  message?: string;
  hideConfirmButton?: boolean;
  heading?: string;
  open?: boolean;
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

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  children,
  onCancel = () => {},
  onConfirm = () => {},
  hideConfirmButton = false,
  heading = uiStrings.deleteConfirmation,
  message = uiStrings.deleteConfirmationMessage,
  open,
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
    onConfirm();
  };

  const modalVisible = typeof children === "function" ? isVisible : !!open;

  return (
    <>
      {/* Render the custom comp if children is provided */}
      {typeof children === "function" && children(handleOpen)}

      <Modal
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        closable={false}
      >
        <ErrorHeading>{heading}</ErrorHeading>
        <Text>{message}</Text>
        <ButtonContainer>
          <Button variant="secondary" onClick={handleCancel}>
            {uiStrings.cancel}
          </Button>
          {!hideConfirmButton && (
            <Button variant="primary" onClick={handleConfirm}>
              {uiStrings.confirm}
            </Button>
          )}
        </ButtonContainer>
      </Modal>
    </>
  );
};
