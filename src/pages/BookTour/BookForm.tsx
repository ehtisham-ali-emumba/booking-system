import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, Row, Col } from "antd";
import { Button, Spacer } from "../../components";
import { FormInput } from "../../components/Form";
import { bookFormValidationSchema } from "./utils";
import FormSelect from "../../components/Form/FormSelect";
import { FormWrapper } from "./elements";
import { FormPhoneInput } from "../../components/Form/FormPhoneInput";

const { Title } = Typography;

const BookForm = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(bookFormValidationSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <FormWrapper>
      <Title level={2} style={{ color: "#1e1e3f" }}>
        Confirm Your Booking
      </Title>

      <form>
        <FormInput
          name="name"
          control={control}
          inputProps={{
            placeholder: "Enter your name",
          }}
        />

        <FormInput
          name="email"
          control={control}
          inputProps={{
            placeholder: "Enter your email",
          }}
        />

        <FormPhoneInput name="phone" control={control} label="Phone Number" />

        <Row gutter={16}>
          <Col span={12}>
            <FormInput
              name="adults"
              label="No. of Adults"
              control={control}
              inputProps={{
                placeholder: "0",
                type: "number",
              }}
            />
          </Col>
          <Col span={12}>
            <FormInput
              name="children"
              label="No. of Children"
              control={control}
              inputProps={{
                placeholder: "0",
                type: "number",
              }}
            />
          </Col>
        </Row>

        <FormSelect
          name="paymentMethod"
          label="Payment Method"
          control={control}
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
        <Button fullWidth onClick={handleSubmit(onSubmit)}>
          Confirm
        </Button>
      </form>
    </FormWrapper>
  );
};

export default BookForm;
