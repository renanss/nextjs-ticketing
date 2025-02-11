import SVGIcons from "@/components/shared/Icon/SVGIcons";
import IconSelected from "@/components/shared/Icon/IconSelected";
import IconReserved from "@/components/shared/Icon/IconReserved";
import IconAvailable from "@/components/shared/Icon/IconAvailable";
import type { SeatStatus } from '@/hooks/useSeats';
import { Container, Item, ItemName } from './styles';
import { useMemo } from 'react';

interface LegendProps {
  seats: SeatStatus[];
}

export const Legend = ({ seats }: LegendProps) => {
  const availableSeats = useMemo(() => seats.filter((seat) => seat.status === "available"), [seats]);
  const selectedSeats = useMemo(() => seats.filter((seat) => seat.status === "selected"), [seats]);
  
  return (
    <>
      <div style={{ display: "none" }}>
        <SVGIcons />
      </div>
      <Container>
        <Item>
          <IconAvailable size={16} number={availableSeats.length} />
          <ItemName>Available</ItemName>
        </Item>
        <Item>
          <IconReserved size={16} />
          <ItemName>Reserved</ItemName>
        </Item>
        <Item>
          <IconSelected size={16} number={selectedSeats.length} />
          <ItemName>Selected</ItemName>
        </Item>
      </Container>
    </>
  );
}; 