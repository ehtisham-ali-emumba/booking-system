import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { CardWrapper, TourCard } from "../../components/Card";
import { Container } from "../../styles";
import styled from "styled-components";
import { useTourQuery } from "../../hooks/queries";
import Loader from "../../components/Loader";
import ErrorContainer from "../../components/ErrorContainer";
import { useAtom } from "jotai";
import { bookingAtom } from "../../atoms/bookingAtom";
import { useMemo } from "react";
import { useDeleteBooking } from "../../hooks/atoms/useDeleteBooking";
import { BlankSlate } from "../../components";

const Wrapper = styled(Container)`
  justify-content: flex-start;
  margin-bottom: 80px;
`;

const Box = styled.div`
  margin-top: 110px;
  width: 100%;
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
      <Box>
        <Title style={{ textAlign: "center", marginBottom: "40px" }}>
          Top Destinations
        </Title>
        <CardWrapper>
          {tours?.map((tour) => {
            const hasBooking = bookingMap.has(tour.id);
            return (
              <TourCard
                key={tour.id}
                imageSrc={tour.imageSrc}
                title={tour.name}
                description={tour.description}
                price={tour.price}
                duration={tour.duration}
                hasBooking={hasBooking}
                onUpdateBooking={() => navigate(`/book/tour/${tour.id}`)}
                onDeleteBooking={() => deleteBooking(tour.id)}
                onClick={() => navigate(`/tour/${tour.id}`)}
              />
            );
          })}
          {tours?.length === 0 && <BlankSlate />}
        </CardWrapper>
      </Box>
    </Wrapper>
  );
}
