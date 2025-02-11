import type { SeatStatus } from '@/hooks/useSeats';
import { Icon } from '@/components/shared/Icon';
import { Container, Title, Button } from './styles';
import { useCallback, useMemo } from 'react';

interface HeaderProps {
  seats: SeatStatus[];
  onAutoSelect: (index: number, action: 'select' | 'deselect') => void;
}

export const Header = ({ seats, onAutoSelect }: HeaderProps) => {
  const handleButtonClick = useCallback((button: string) => {
    if (button === "plus") {
      const availableIndexes = seats.reduce<number[]>((acc, seat, index) => {
        if (seat.status === "available") acc.push(index);
        return acc;
      }, []);

      if (availableIndexes.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableIndexes.length);
        onAutoSelect(availableIndexes[randomIndex], 'select');
      }
    } else {
      const autoSelectedIndexes = seats.reduce<number[]>((acc, seat, index) => {
        if (seat.status === "selected" && seat.selectionType === "auto") acc.push(index);
        return acc;
      }, []);

      if (autoSelectedIndexes.length > 0) {
        const randomIndex = Math.floor(Math.random() * autoSelectedIndexes.length);
        onAutoSelect(autoSelectedIndexes[randomIndex], 'deselect');
      }
    }
  }, [seats, onAutoSelect]);

  const buttons = useMemo(() => ["plus", "minus"], []);

  return (
    <Container>
      <Title>Choose Seats</Title>
      {buttons.map((button) => (
        <Button key={button} onClick={() => handleButtonClick(button)}>
          <Icon href={button} size="28" />
        </Button>
      ))}
    </Container>
  );
}; 