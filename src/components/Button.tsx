import { Button as AntdButton, type ButtonProps } from "antd";
import styled, { css } from "styled-components";
import { colors as appColors } from "../constants";

// Define the button variants
type ButtonVariant = "primary" | "outlined" | "secondary";

// Define the props interface
type StyledButtonProps = Omit<ButtonProps, "variant"> & {
  variant?: ButtonVariant;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
};

// Define colors object since it was referenced in the original code
const colors = {
  secondary: "#333333",
  white: "#ffffff",
  outline: "#f7774a",
  hover: {
    primary: "#e56e50",
    secondary: "#666666",
    outlined: "#fff8f6",
  },
};

// Apply size styles using function for better readability
const getSizeStyles = (size = "medium") => {
  switch (size) {
    case "small":
      return css`
        height: 32px;
        padding: 0 16px;
        font-size: 14px;
      `;
    case "large":
      return css`
        height: 56px;
        padding: 0 32px;
        font-size: 18px;
      `;
    case "medium":
    default:
      return css`
        height: 48px;
        padding: 0 24px;
        font-size: 16px;
      `;
  }
};

// Define primary button styles
const primaryStyles = css`
  background-color: ${appColors.accentOrange};
  color: ${colors.white};
  border: none;
  &:hover,
  &:focus {
    background-color: #e56e50 !important;
    border-color: #e56e50 !important;
    color: white !important;
  }
`;

// Define secondary (text) button styles
const secondaryStyles = css`
  background-color: transparent;
  color: ${colors.secondary};
  border: none;
  box-shadow: none;

  &:hover,
  &:focus {
    background-color: transparent !important;
    color: ${colors.hover.secondary} !important;
    border-color: transparent !important;
  }
`;

// Define outlined button styles
const outlinedStyles = css`
  background-color: transparent;
  color: ${colors.outline};
  border: 1px solid ${colors.outline};
  font-weight: 600;
  &:hover,
  &:focus {
    background-color: ${colors.hover.outlined} !important;
    color: ${colors.outline} !important;
    border-color: ${colors.outline} !important;
  }
`;

// Create the styled component
export const Button = styled(AntdButton)<StyledButtonProps>`
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  // Apply size styles
  ${({ size = "medium" }) => getSizeStyles(size)}

  // Apply variant styles
  ${({ variant = "primary" }) => {
    switch (variant) {
      case "secondary":
        return secondaryStyles;
      case "outlined":
        return outlinedStyles;
      case "primary":
      default:
        return primaryStyles;
    }
  }}

   // Apply fullWidth styles
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
