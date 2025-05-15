import { Flex, Image } from "antd";
import styled, { css } from "styled-components";
import { sizeTablet } from "../../utils";

export const Box = styled.div`
  margin-top: 100px;
`;

export const ImageWrapper = styled(Flex)`
  flex: 1;
  ${sizeTablet(css`
    display: none;
  `)}
`;
export const ImageUI = styled(Image)`
  height: 100% !important;
  width: 100% !important;
  object-fit: cover;
`;
export const FormWrapper = styled.div`
  margin: 0 auto;
  padding: 0px 20px;
`;
export const Container = styled.div`
  margin-top: 150px;
  width: 100%;
  margin-right: 32px;
  padding-bottom: 82px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.1);
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.875rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;
