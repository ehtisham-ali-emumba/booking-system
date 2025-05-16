import { useNavigate } from "react-router-dom";
import { TourCard, CardWrapper } from "../../components/Card";
import { useTourQuery } from "../../hooks/queries";
import { Loader } from "../../components";
import ErrorContainer from "../../components/ErrorContainer";
import { useAtom } from "jotai";
import { bookingAtom } from "../../atoms/bookingAtom";
import { useMemo } from "react";
import { useDeleteBooking } from "../../hooks/atoms/useDeleteBooking";
import { BlankSlate } from "../../components/BlankSlate";
import { uiStrings } from "../../constants/uiStrings";
import { Box, Heading, MyTourContainer } from "./elements";

export const MyTours = () => {
  const navigate = useNavigate();
  const { data: tours, isLoading, error } = useTourQuery();
  const [bookings] = useAtom(bookingAtom);
  const { deleteBooking } = useDeleteBooking();

  const filterMyTours = useMemo(() => {
    if (!tours || !bookings) return [];
    const bookingSet = new Set(bookings.map((booking) => booking.tourId));
    return tours.filter((tour) => bookingSet.has(tour._id));
  }, [tours, bookings]);

  return (
    <MyTourContainer>
      <Box>
        <Heading>{uiStrings.myTours}</Heading>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorContainer message={`Error: ${error.message}`} />
        ) : (
          <CardWrapper>
            {filterMyTours.length ? (
              filterMyTours.map((tour) => {
                return (
                  <TourCard
                    key={tour._id}
                    imageSrc={tour.imageSrc}
                    title={tour.name}
                    description={tour.description}
                    price={tour.price}
                    duration={tour.duration}
                    hasBooking
                    onUpdateBooking={() => navigate(`/book/tour/${tour._id}`)}
                    onDeleteBooking={() => deleteBooking(tour._id)}
                    onClick={() => navigate(`/tour/${tour._id}`)}
                  />
                );
              })
            ) : (
              <BlankSlate />
            )}
          </CardWrapper>
        )}
      </Box>
    </MyTourContainer>
  );
};
