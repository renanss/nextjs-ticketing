import { SEAT_PRICE } from '@/components/constants';
import type { SeatStatus } from '@/hooks/useSeats';
import { Container, Total, Action } from './styles';

interface CheckoutProps {
  seats: SeatStatus[];
}

export const Checkout = ({ seats }: CheckoutProps) => {
  const total = seats.reduce((sum, seat) => {
    return seat.status === 'selected' ? sum + SEAT_PRICE : sum;
  }, 0);

  return (
    <Container>
      <Total>${total}</Total>
      <Action>Checkout</Action>
    </Container>
  );
}; 