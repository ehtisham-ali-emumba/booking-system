import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// Define the types of props that can be passed
interface ButtonProps {
  kind?: "nav" | "cta" | "submit";
  isActive?: boolean;
}

// Your style definitions remain the same
const navStyles = css<{ isActive?: boolean }>`
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  height: 23px;
  text-align: center;
  background: transparent;
  border: none;
  padding: 0;

  &:hover,
  &.active {
    color: #4db8ff;
    text-decoration: none;
    border-bottom: 1px solid #4db8ff;
  }

  &.active {
    text-decoration: none;
  }
`;

const ctaStyles = css`
  padding: 12px 30px;
  color: rgb(255, 255, 255);
  background: var(--theme-color);
  border-radius: 4px;
  line-height: normal;
  border: none;
  cursor: pointer;
  background-color: #00c2ff;
  max-width: max-content;
`;

const submitStyles = css`
  background-color: #3498db;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;
// Export the Button that can be used both as a button and with React Router
export const Button = styled.button.attrs<ButtonProps>((props) => ({
  // This allows the component to accept React Router props
  // @ts-ignore
  as: props.to ? Link : undefined,
}))<ButtonProps & { to?: string }>`
  display: inline-block;
  text-decoration: none;

  ${({ kind = "cta" }) => {
    switch (kind) {
      case "nav":
        return navStyles;
      case "submit":
        return submitStyles;
      case "cta":
      default:
        return ctaStyles;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
