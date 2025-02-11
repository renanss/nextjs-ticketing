'use client';

import { useState, useEffect } from 'react';
import { ThemeContext } from '@/hooks/useTheme';
import type { Theme } from '@/hooks/useTheme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [isLoading, setIsLoading] = useState(true);

  const setTheme = async (newTheme: Theme) => {
    setThemeState(newTheme);
    
    try {
      const response = await fetch('/api/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme: newTheme }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update theme');
      }
    } catch (error) {
      console.error('Failed to sync theme with server:', error);
    }
  };

	useEffect(() => {
    fetch('/api/theme')
      .then(res => res.json())
      .then(data => {
        if (data.theme === 'light' || data.theme === 'dark') {
          setThemeState(data.theme);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} 