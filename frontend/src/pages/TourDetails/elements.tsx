import { Col, Flex, Typography } from "antd";
import styled, { css } from "styled-components";
import { sizeMobile, sizeLg, sizeTablet } from "../../utils";

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
  ${sizeMobile(css`
    padding: 8px;
  `)}
`;
export const Container2 = styled.div``;

export const TourTitle = styled(TitleAntd)`
  color: #1c223b;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.2;
  margin-bottom: 24px !important;

   ${sizeMobile(css`
     font-size: 32px !important;
     text-align: center;
   `)}
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  margin-bottom: 16px;
`;
export const InfoBox = styled(Flex)`
  ${sizeMobile(css`
    flex-direction: column;
  `)}
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
  margin: 16px 20px;
  font-size: 16px;
  line-height: 1.5;
`;

export const WrapperImages = styled(Flex)`
  height: 420px;
  margin: 10px;
  padding: 20px;

  ${sizeLg(css`
    flex-direction: column;
    height: auto;
  `)}
  ${sizeMobile(css`
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    height: auto;
  `)}
`;

export const GroupImageCol = styled(Col)`
  flex: 1;
  ${sizeTablet(css`
    margin-top: 30px;
  `)}
  ${sizeMobile(css`
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: 0px;
  `)}
`;
export const ImageUI = styled.img`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  border-radius: 24px;
  margin-right: 12px;
  ${sizeMobile(css`
    margin-right: 0px;
  `)}
  ${sizeLg(css`
    height: 400px !important;
  `)}
`;

export const SmallImage = styled.img`
  flex: 1;
  height: 190px;
  min-width: 300px !important;
  width: 100% !important;
  padding: 8px;
  object-fit: cover;
  border-radius: 24px;
  ${sizeLg(css`
    height: 320px !important;
  `)}
`;
