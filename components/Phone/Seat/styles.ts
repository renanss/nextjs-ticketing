import styled from 'styled-components';

interface StyledSeatProps {
  'data-status'?: string;
}

export const StyledSeat = styled.button<StyledSeatProps>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: none;
  border: none;
  cursor: ${props => props['data-status'] === 'reserved' ? 'not-allowed' : 'pointer'};

  svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    pointer-events: none;
  }
`; 