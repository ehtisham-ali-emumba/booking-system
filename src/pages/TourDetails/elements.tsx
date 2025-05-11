import { Flex, Typography } from "antd";
import styled from "styled-components";

const { Title: TitleAntd, Text } = Typography;

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

export const Wrapper = styled.div`
  margin-top: 100px;
`;

export const Padder = styled.div`
  padding: 20px;
`;
export const MuseumContainer = styled.div``;

export const MuseumTitle = styled(TitleAntd)`
  color: #1c223b;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.2;
  margin-bottom: 24px !important;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  margin-bottom: 16px;
`;

export const InfoIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6e7490;
  background-color: rgb(245, 245, 247);
  border-radius: 50%;
  padding: 4px;
  font-size: 18px;
`;

export const InfoText = styled(Text)`
  color: #6e7490;
  font-size: 16px;
  margin-left: 4px;
`;

export const PriceText = styled(Text)`
  color: #6e7490;
  font-size: 16px;
`;

export const DescriptionText = styled.p`
  text-align: center;
  margin: 0 20px;
  font-size: 16px;
  line-height: 1.5;
`;

export const WrapperImages = styled(Flex)`
  height: 420px;
  margin: 10px;
  padding: 20px;
`;

export const ImageUI = styled.img`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  border-radius: 24px;
`;

export const SmallImage = styled.img`
  flex: 1;
  height: 175px;
  width: 100% !important;
  padding: 0px 10px;
  object-fit: cover;
  border-radius: 24px;
`;
