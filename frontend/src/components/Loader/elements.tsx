import styled from "styled-components";

export const CenteredWrapper = styled.div<{
  marginTop?: string;
  paddingTop?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-top: ${(props) => props.paddingTop || "30px"};
  margin-top: ${(props) => props.marginTop || "0px"};
`;
