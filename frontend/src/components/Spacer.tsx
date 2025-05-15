import styled from "styled-components";

export const Spacer = styled.div<{
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}>`
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
`;

export const InlineSpacer = styled.span<{
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}>`
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
`;
