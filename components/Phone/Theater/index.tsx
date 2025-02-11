import type { SeatStatus } from '@/hooks/useSeats';
import { Seat } from '../Seat';
import { Container, Screen, Seats, FillerSeat } from './styles';
import { useMemo } from 'react';

interface TheaterProps {
  seats: SeatStatus[];
  onSeatClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Theater = ({
  seats = [],
  onSeatClick,
}: TheaterProps) => {
  const FillerSeats = useMemo(() => 
    Array(4).fill("").map((item, i) => <FillerSeat key={i} />), 
  []);

  const SeatElements = useMemo(() => 
    seats.map((seat, i) => (
      <Seat 
        key={i}
        data-index={i} 
        data-status={seat.status} 
        onClick={onSeatClick}
      />
    )),
  [seats, onSeatClick]);

  return (
    <Container>
      <Screen>Screen</Screen>
      <Seats>
        {FillerSeats}
        {SeatElements}
      </Seats>
    </Container>
  );
}; 