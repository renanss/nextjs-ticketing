import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const Screen = styled.div<{ theme: DefaultTheme }>`
  --color: ${({ theme }) => (theme.mode === "light" ? "#2c2f62" : "#eee")};
  --background: ${({ theme }) => (theme.mode === "light" ? "#fff" : "#2c2f62")};
  --accent: ${({ theme }) => (theme.mode === "light" ? "#fd6d8e" : "#fcb43c")};
  border-radius: 30px;
  width: 300px;
  min-height: 500px;
  color: var(--color, #2c2f62);
  background: var(--background, #ffffff);
  padding: 2rem 2rem 1.25rem;
  box-shadow: 0 2px 10px -8px hsla(0, 0%, 0%, 0.4);
  margin: 1rem;
`; 