import { useNavigate, useLocation } from "react-router-dom";
import { TourCard } from "../../components";
import { useTourQuery } from "../../hooks/queries";
import { Loader } from "../../components";
import ErrorContainer from "../../components/ErrorContainer";
import { useAtom } from "jotai";
import { bookingAtom } from "../../atoms/bookingAtom";
import { useMemo } from "react";
import { useDeleteBooking } from "../../hooks/atoms/useDeleteBooking";
import { BlankSlate } from "../../components";
import { uiStrings } from "../../constants";
import { Box, Container, ContentTitle } from "./elements";
import { CardWrapper } from "../../components/TourCard/elements";

export const Tours = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");
  const price = queryParams.get("price");
  const start_date = queryParams.get("start_date");
  const end_date = queryParams.get("end_date");

  const { data: tours, isLoading, error } = useTourQuery();
  const [bookings] = useAtom(bookingAtom);
  const { deleteBooking } = useDeleteBooking();

  const bookingMap = useMemo(
    () => new Map(bookings.map((booking) => [booking.tourId, booking])),
    [bookings]
  );

  // Parse price range
  const [startPrice, endPrice] = useMemo(() => {
    if (!price) return [null, null];
    const [start, end] = price.split("-").map((p) => parseFloat(p));
    return [start, end];
  }, [price]);

  // Filter tours based on city name, price range, and date range
  const filteredTours = useMemo(() => {
    let filtered = tours ?? [];

    // Filter by city
    if (city) {
      filtered = filtered.filter(
        (tour) => tour.city.toLowerCase() === city.toLowerCase()
      );
    }

    // Filter by price range
    if (startPrice !== null && endPrice !== null) {
      filtered = filtered.filter((tour) => {
        const tourPrice = parseFloat(tour.price);
        return tourPrice >= startPrice && tourPrice <= endPrice;
      });
    }

    // Filter by date range
    if (start_date && end_date) {
      const filterStartDate = new Date(start_date);
      const filterEndDate = new Date(end_date);
      filtered = filtered.filter((tour) => {
        const tourStartDate = new Date(tour.startDate);
        const tourEndDate = new Date(tour.endDate);

        return tourStartDate <= filterEndDate && tourEndDate >= filterStartDate;
      });
    }

    return filtered;
  }, [city, tours, startPrice, endPrice, start_date, end_date]);

  return (
    <Container>
      <Box>
        <ContentTitle>
          {`${uiStrings.topDestinations}${city ? ` at "${city}"` : ""}`}
        </ContentTitle>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorContainer message={`Error: ${error.message}`} />
        ) : (
          <CardWrapper>
            {filteredTours.length ? (
              filteredTours.map((tour) => {
                const hasBooking = bookingMap.has(tour._id);
                return (
                  <TourCard
                    key={tour._id}
                    id={tour._id}
                    imageSrc={tour.imageSrc}
                    title={tour.name}
                    description={tour.description}
                    price={tour.price}
                    duration={tour.duration}
                    hasBooking={hasBooking}
                    onUpdateBooking={() => navigate(`/book/tour/${tour._id}`)}
                    onDeleteBooking={() => deleteBooking(tour._id)}
                  />
                );
              })
            ) : (
              <BlankSlate />
            )}
          </CardWrapper>
        )}
      </Box>
    </Container>
  );
};
