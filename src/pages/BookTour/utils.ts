import * as Yup from "yup";
import type { Booking } from "../../atoms/bookingAtom";

export const bookFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string(),
  adults: Yup.number()
    .required("Number of adults is required")
    .min(1, "At least 1 adult is required"),
  children: Yup.number()
    .required("Number of children is required")
    .min(0, "Cannot be negative"),
  paymentMethod: Yup.string().required("Payment method is required"),
  countryCode: Yup.string(),
});

export const isBookingExists = (bookings: Booking[], tourId: string) => {
  return !!bookings.find((booking) => booking.tourId === tourId);
};

export const getBookingByTourId = (bookings: Booking[], tourId: string) => {
  return bookings.find((booking) => booking.tourId === tourId);
};

export const removeBookingByTourId = (bookings: Booking[], tourId: string) => {
  return bookings.filter((booking) => booking.tourId !== tourId);
};
