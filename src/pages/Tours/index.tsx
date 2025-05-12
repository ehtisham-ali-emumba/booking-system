import { Typography } from "antd";
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

const Wrapper = styled(Container)`
  justify-content: flex-start;
`;

const { Title } = Typography;

export default function Tours() {
  const navigate = useNavigate();
  const { data: tours, isLoading, error } = useTourQuery();
  const [bookings] = useAtom(bookingAtom); // Access bookings from the atom
  const { deleteBooking } = useDeleteBooking();

  // map lookup for bookings
  const bookingMap = useMemo(
    () => new Map(bookings.map((booking) => [booking.tourId, booking])),
    [bookings]
  );

  if (isLoading) return <Loader />;
  if (error) return <ErrorContainer message={`Error: ${error?.message}`} />;

  return (
    <Wrapper>
      <div
        style={{
          marginTop: "150px",
          width: "100%",
          marginRight: "32px",
          paddingBottom: "82px",
        }}
      >
        <Title style={{ textAlign: "center", marginBottom: "40px" }}>
          Top Destinations At “Miami”
        </Title>
        <CardWrapper>
          {tours?.map((tour) => {
            const hasBooking = bookingMap.has(tour.id); // O(1) lookup
            return (
              <TourCard
                key={tour.id}
                imageSrc={tour.imageSrc}
                title={tour.name}
                description={tour.description}
                price={tour.price}
                duration={tour.duration}
                hasBooking={hasBooking}
                onUpdateBooking={() => navigate(`/book/tour/${tour.id}`)} // Navigate to view booking
                onDeleteBooking={() => deleteBooking(tour.id)} // Use deleteBooking hook
                onClick={() => navigate(`/tour/${tour.id}`)}
              />
            );
          })}
        </CardWrapper>
      </div>
    </Wrapper>
  );
}
