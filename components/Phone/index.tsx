'use client';
import { useTheme } from '@/hooks/useTheme';
import { useSeats } from '@/hooks/useSeats';
import { ThemeToggle } from "../shared/ThemeToggle";
import { Details } from './Details';
import { Checkout } from './Checkout';
import { Legend } from './Legend';
import { Theater } from './Theater';
import { Header } from './Header';
import { Screen } from './styles';

export const Phone = () => {
  const { theme } = useTheme();
  const { seats, handleSeatClick, handleAutoSelect } = useSeats();

  return (
    <>
      <ThemeToggle />
      <Screen theme={{ mode: theme }}>
        <Header seats={seats} onAutoSelect={handleAutoSelect} />
        <Legend seats={seats} />
        <Theater 
          seats={seats} 
          onSeatClick={(event) => {
            const index = parseInt(event.currentTarget.dataset.index || '0');
            handleSeatClick(index);
          }} 
        />
        <Details 
          seats={seats} 
          onSeatClick={(index) => handleSeatClick(index, true)} 
        />
        <Checkout seats={seats} />
      </Screen>
    </>
  );
}; 