import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0.25rem;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 0.2rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 90%);
    border-radius: 5px;
  }
`;

export const Heading = styled.h4`
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem 0;
`;

export const Button = styled.button`
  flex-shrink: 0;
  background: none;
  font-family: inherit;
  font-size: 0.7rem;
  color: hsl(0, 0%, 70%);
  border: 1px solid currentColor;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  svg {
    width: 12px;
    height: 12px;
    margin-left: 0.35rem;
    pointer-events: none;
  }
`; 