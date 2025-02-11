'use client';

import { useTheme } from '@/hooks/useTheme';
import { StyledThemeToggle } from './styles';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <StyledThemeToggle onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌙' : '☀️'}
    </StyledThemeToggle>
  );
}; 