import { SEAT_PRICE } from '@/components/constants';
import { Icon } from '@/components/shared/Icon';
import { Container, Heading, Button } from './styles';
import type { SeatStatus } from '@/hooks/useSeats';

interface DetailsProps {
  seats: SeatStatus[];
  onSeatClick: (index: number) => void;
}

export const Details = ({ seats, onSeatClick }: DetailsProps) => {
  const selectedSeats = seats.reduce<{ seat: number; price: number }[]>((acc, seat, index) => {
    if (seat.status === 'selected') {
      acc.push({ seat: index + 1, price: SEAT_PRICE });
    }
    return acc;
  }, []);

  return (
    <Container>
      <Heading>Details</Heading>
      {selectedSeats.map((selectedSeat) => {
        const entries = Object.entries(selectedSeat);
        return (
          <Button 
            key={entries[0][1]} 
            data-index={entries[0][1]} 
            onClick={() => onSeatClick(selectedSeat.seat - 1)}
          >
            {entries
              .map(([property, value]) => `${property}: ${value}`)
              .join(" ")
              .trim()}
            <Icon href="close" size="12" />
          </Button>
        );
      })}
    </Container>
  );
}; 