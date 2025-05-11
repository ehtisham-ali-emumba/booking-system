import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  height: 50vh;
  color: red;
  font-size: 20px;
  text-align: center;
  padding-top: 110px;
  padding-left: 55px;
`;

type ErrorContainerProps = {
  message: string;
};

export default function ErrorContainer({ message }: ErrorContainerProps) {
  return <ErrorWrapper>{message}</ErrorWrapper>;
}
