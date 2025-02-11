import { Icon } from '@/components/shared/Icon';
import { StyledSeat } from './styles';

interface SeatProps {
  'data-index': number;
  'data-status': string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Seat = ({ 'data-index': index, 'data-status': status, onClick }: SeatProps) => {
  return (
    <StyledSeat 
      onClick={onClick} 
      data-index={index} 
      data-status={status}
    >
      <Icon href={status} size="16" />
    </StyledSeat>
  );
}; 