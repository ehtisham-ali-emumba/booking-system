import { useNavigate } from "react-router-dom";
import { TourCard } from "../../components";
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
import { filterTours } from "./utils";
import { CardWrapper } from "../../components/TourCard/elements";

export const MyTours = () => {
  const navigate = useNavigate();
  const { data: tours, isLoading, error } = useTourQuery();
  const [bookings] = useAtom(bookingAtom);
  const { deleteBooking } = useDeleteBooking();

  const filterMyTours = useMemo(
    () => filterTours(tours, bookings),
    [tours, bookings]
  );

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
