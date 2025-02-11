import { useState } from 'react';
import { INITIAL_SEAT_MAP } from '@/components/constants';

export type SeatStatus = {
  status: 'available' | 'reserved' | 'selected';
  selectionType?: 'manual' | 'auto';
};

export const useSeats = () => {
  const [seats, setSeats] = useState<SeatStatus[]>(
    INITIAL_SEAT_MAP.map(status => ({ 
      status: status as "reserved" | "available" | "selected", 
      selectionType: undefined 
    }))
  );

  const handleSeatClick = (seatIndex: number, ignoreSelectionMode: boolean = false) => {
    const newSeats = [...seats];
    const currentSeat = newSeats[seatIndex];

    if (ignoreSelectionMode && currentSeat.status === 'selected') {
      newSeats[seatIndex] = { status: 'available', selectionType: undefined };
      setSeats(newSeats);
      return;
    }

    const isManuallySelected = currentSeat.status === 'selected' && currentSeat.selectionType === 'manual';

    if (currentSeat.status === 'available' || isManuallySelected) {
      newSeats[seatIndex] = currentSeat.status === 'available'
        ? { status: 'selected', selectionType: 'manual' }
        : { status: 'available', selectionType: undefined };
      
      setSeats(newSeats);
    }
  };

  const handleAutoSelect = (index: number, action: 'select' | 'deselect') => {
    const newSeats = [...seats];
    newSeats[index] = action === 'select' 
      ? { status: 'selected', selectionType: 'auto' }
      : { status: 'available', selectionType: undefined };
    setSeats(newSeats);
  };

  return {
    seats,
    handleSeatClick,
    handleAutoSelect
  };
}; 