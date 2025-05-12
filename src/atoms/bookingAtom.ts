import { atomWithStorage } from "jotai/utils";

// Define a type for the booking data
export type Booking = {
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  paymentMethod: string;
  tourId: string;
};

// Create a Jotai atom with local storage persistence
export const bookingAtom = atomWithStorage<Booking[]>("bookings", []);
