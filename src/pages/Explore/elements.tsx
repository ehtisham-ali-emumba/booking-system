import styled, { css } from "styled-components";
import { images_png } from "../../assets";
import { Card } from "antd";
import { Button } from "../../components";
import { sizeMobile } from "../../utils";

export const SignInContainer = styled.div`
  max-width: 420px;
  margin: 20px auto;
  padding: 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
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

export const ImageBannerBackgroundWrapper = styled.div`
  background: url(${images_png.exploreBanner});
  background-size: cover;
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  ${sizeMobile(css`
    height: 450px;
  `)}
`;

export const CardUI = styled(Card)`
  border-radius: 20px;
  padding: 0px 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  margin-bottom: -63px;
  ${sizeMobile(css`
    margin-bottom: -153px;
  `)};
`;

export const IconCircle = styled.div`
  background-color: #f0f0f0;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  margin-top: 4px;
`;

export const HeaderText = styled.div`
  font-weight: bold;
  color: #1e1e2f;
  font-size: 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 280px;
`;

export const Divider = styled.div`
  width: 1px;
  background-color: #e0e0e0;
  height: 60px;
  margin: 0 52px 0 16px;
  ${sizeMobile(css`
    height: 1px;
    width: 270px;
    margin: 20px 0px;
  `)};
`;

export const SearchButton = styled((props) => (
  <Button variant="primary" {...props} />
))`
  border-radius: 16px;
  padding: 20px 12px;
  height: 90px;

  ${sizeMobile(css`
    height: 50px;
    margin-top: 20px;
  `)};
`;
