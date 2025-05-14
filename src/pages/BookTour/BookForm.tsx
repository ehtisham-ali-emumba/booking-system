import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, Row, Col } from "antd";
import { Button, Spacer } from "../../components";
import { FormInput } from "../../components/Form";
import {
  bookFormValidationSchema,
  getBookingByTourId,
  isBookingExists,
  removeBookingByTourId,
} from "./utils";
import FormSelect from "../../components/Form/FormSelect";
import { FormWrapper } from "./elements";
import { FormPhoneInput } from "../../components/Form/FormPhoneInput";
import { bookingAtom } from "../../atoms/bookingAtom";
import { useEffect } from "react";
import { notifee } from "../../services";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

type BookFormDataType = {
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  paymentMethod: string;
  countryCode: string;
};
const BookForm = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [bookings, setBookings] = useAtom(bookingAtom);

  const formMethods = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      adults: 0,
      children: 0,
      paymentMethod: "",
      countryCode: "+1",
    },
    resolver: yupResolver(bookFormValidationSchema),
  });
  const { control, handleSubmit, reset } = formMethods;

  // Prefill form if a booking with tourId exists
  useEffect(() => {
    if (!tourId) return;
    if (isBookingExists(bookings, tourId)) {
      const existingBooking = getBookingByTourId(bookings, tourId);
      reset(existingBooking);
    }
  }, [tourId, bookings, reset]);

  const onSubmit = (bookFormData: BookFormDataType) => {
    const filterBookings = removeBookingByTourId(bookings, tourId!);
    setBookings([
      ...filterBookings,
      { ...bookFormData, tourId: tourId!, phone: "123123" },
    ]);
    notifee.showSuccessNotification("Success", "Booking confirmed!");
    navigate("/my-tours");
  };

  return (
    <FormProvider {...formMethods}>
      <FormWrapper>
        <Title level={2} style={{ color: "#1e1e3f" }}>
          Confirm Your Booking
        </Title>

        <form>
          <FormInput<BookFormDataType>
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
    </FormProvider>
  );
};

export default BookForm;
