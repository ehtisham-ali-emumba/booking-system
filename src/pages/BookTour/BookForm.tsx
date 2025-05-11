import styled from "styled-components";
import { Typography, Row, Col } from "antd";
import { Button, Input, Select } from "../../components";
import { Spacer } from "../../components/Spacer";

const { Title, Text } = Typography;

// Styled Wrapper
const FormWrapper = styled.div`
  margin: 0 auto;
  padding: 0px 20px;
`;

// Styled Label
const Label = styled(Text)`
  display: block;
  font-size: 16px;
  color: #a1a1b5;
  margin-bottom: 6px;
  margin-top: 24px;
`;

const BookForm = () => {
  return (
    <FormWrapper>
      <Title level={2} style={{ color: "#1e1e3f" }}>
        Confirm Your Booking
      </Title>

      <Label>Name</Label>
      <Input
        inputProps={{
          placeholder: "Enter your name",
        }}
      />

      <Label>Email</Label>
      <Input
        inputProps={{
          placeholder: "Enter your email",
        }}
      />

      <Label>Phone</Label>
      <Row gutter={16}>
        <Col span={6}>
          <Select
            selectProps={{
              style: { width: "100%" },
              placeholder: "Select",
              defaultValue: "+1",
              size: "large",
              options: [
                { value: "+1", label: "+1" },
                { value: "+44", label: "+44" },
                { value: "+91", label: "+91" },
              ],
            }}
          />
        </Col>
        <Col span={18}>
          <Input
            inputProps={{
              placeholder: "Phone number",
            }}
          />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Label>Numbers of Adults</Label>
          <Input
            inputProps={{
              placeholder: "0",
            }}
          />
        </Col>
        <Col span={12}>
          <Label>Numbers of Childrens</Label>
          <Input
            inputProps={{
              placeholder: "0",
            }}
          />
        </Col>
      </Row>

      <Label>Payment Method</Label>
      <Select
        selectProps={{
          style: { width: "100%" },
          placeholder: "Select",
          size: "large",
          options: [
            { value: "credit_card", label: "Credit Card" },
            { value: "paypal", label: "PayPal" },
            { value: "bank_transfer", label: "Bank Transfer" },
          ],
        }}
      />

      <Spacer marginTop="30px" />
      <Button fullWidth>Confirm</Button>
    </FormWrapper>
  );
};

export default BookForm;
