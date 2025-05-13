import styled from "styled-components";
import { Typography, Divider } from "antd";

const { Text, Title } = Typography;

// Container for the entire information section
const InfoContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

// Row container for label and value
const InfoRow = styled.div`
  display: flex;
  align-items: baseline;
  margin: 20px 0;
`;

// Label styling
const Label = styled(Text)`
  font-size: 16px;
  padding: 0 30px;
  min-width: 350px;
  font-weight: 600;
  color: #262626;
  flex: 0 0 200px;
`;

// Value styling
const Value = styled(Text)`
  font-size: 16px;
  color: #262626;
  flex: 1;
`;

// Custom divider with specific styling
const StyledDivider = styled(Divider)`
  margin: 10px 0;
  background-color: #f0f0f0;
`;

const WhatsIncluded = () => {
  return (
    <>
      <Title>What's Included</Title>
      <InfoContainer>
        <InfoRow>
          <Label>Destination</Label>
          <Value>Miami</Value>
        </InfoRow>

        <StyledDivider />

        <InfoRow>
          <Label>Departure Location</Label>
          <Value>2000 Brush St, Detroit, MI 48226, United States</Value>
        </InfoRow>

        <InfoRow>
          <Label>Return</Label>
          <Value>7:00 PM on Day 3</Value>
        </InfoRow>

        <InfoRow>
          <Label>Return</Label>
          <Value>
            Basic first aid kit Basic first aid kit Basic first aid kit Basic
            first aid kit
          </Value>
        </InfoRow>

        <StyledDivider />
      </InfoContainer>
    </>
  );
};

export default WhatsIncluded;
