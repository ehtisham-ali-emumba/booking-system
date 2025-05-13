import styled, { css } from "styled-components";
import { Typography, Divider } from "antd";
import { sizeMobile } from "../../utils";
import { strings } from "../../constants/strings";

const { Text, Title } = Typography;

// Container for the entire information section
const InfoContainer = styled.div`
  padding: 16px;
  margin: 0 auto;
`;

// Row container for label and value
const InfoRow = styled.div`
  display: flex;
  align-items: baseline;
  margin: 20px 0;
  ${sizeMobile(css`
    flex-direction: column;
  `)}
`;

// Label styling
const Label = styled(Text)`
  font-size: 16px;
  padding: 0 30px;
  min-width: 350px;
  font-weight: 600;
  color: #262626;
  max-width: 200px;
  flex: 1;
  ${sizeMobile(css`
    padding: 0;
    margin: 0;
    flex: 1;
  `)}
`;

// Value styling
const Value = styled(Text)`
  font-size: 16px;
  color: #262626;
  flex: 1;
  ${sizeMobile(css`
    display: block;
  `)}
`;

// Custom divider with specific styling
const StyledDivider = styled(Divider)`
  margin: 10px 0;
  background-color: #f0f0f0;
`;

const WhatsIncluded = () => {
  return (
    <>
      <Title>{strings.whatsIncluded.title}</Title>
      <InfoContainer>
        <InfoRow>
          <Label>{strings.whatsIncluded.destination}</Label>
          <Value>{strings.whatsIncluded.destinationValue}</Value>
        </InfoRow>

        <StyledDivider />

        <InfoRow>
          <Label>{strings.whatsIncluded.departure}</Label>
          <Value>{strings.whatsIncluded.departureValue}</Value>
        </InfoRow>

        <InfoRow>
          <Label>{strings.whatsIncluded.return}</Label>
          <Value>{strings.whatsIncluded.returnValue}</Value>
        </InfoRow>

        <InfoRow>
          <Label>{strings.whatsIncluded.return}</Label>
          <Value>{strings.whatsIncluded.additionalInfo}</Value>
        </InfoRow>

        <StyledDivider />
      </InfoContainer>
    </>
  );
};

export default WhatsIncluded;
