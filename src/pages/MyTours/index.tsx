import { useNavigate } from "react-router-dom";
import { TourCard, CardWrapper } from "../../components/Card";
import { Container } from "../../styles";
import styled from "styled-components";
import { useTourQuery } from "../../hooks/queries";
import Loader from "../../components/Loader";
import ErrorContainer from "../../components/ErrorContainer";
import { useAtom } from "jotai";
import { bookingAtom } from "../../atoms/bookingAtom";
import { useMemo } from "react";
import { useDeleteBooking } from "../../hooks/atoms/useDeleteBooking";
import { BlankSlate } from "../../components/BlankSlate";
import { uiStrings } from "../../constants/uiStrings";
import { Box, Heading } from "./elements";

const Wrapper = styled(Container)`
  justify-content: flex-start;
`;

export const MyTours = () => {
  const navigate = useNavigate();
  const { data: tours, isLoading, error } = useTourQuery();
  const [bookings] = useAtom(bookingAtom); // Access bookings from the atom
  const { deleteBooking } = useDeleteBooking();

  const filterMyTours = useMemo(() => {
    if (!tours || !bookings) return [];
    const bookingSet = new Set(bookings.map((booking) => booking.tourId));
    return tours.filter((tour) => bookingSet.has(tour.id));
  }, [tours, bookings]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorContainer message={`Error: ${error?.message}`} />;

  return (
    <Wrapper>
      <Box>
        <Heading>{uiStrings.header.myTours}</Heading>
        <CardWrapper>
          {filterMyTours?.map((tour) => {
            return (
              <TourCard
                key={tour.id}
                imageSrc={tour.imageSrc}
                title={tour.name}
                description={tour.description}
                price={tour.price}
                duration={tour.duration}
                hasBooking
                onUpdateBooking={() => navigate(`/book/tour/${tour.id}`)}
                onDeleteBooking={() => deleteBooking(tour.id)}
                onClick={() => navigate(`/tour/${tour.id}`)}
              />
            );
          })}
          {filterMyTours.length === 0 && <BlankSlate />}
        </CardWrapper>
      </Box>
    </Wrapper>
  );
};
