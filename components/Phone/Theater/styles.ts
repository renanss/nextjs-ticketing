import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.75rem 0;
`;

export const Screen = styled.p`
  text-align: center;
  text-transform: uppercase;
  padding: 0.3rem 1rem;
  color: hsl(0, 0%, 80%);
  border-radius: 20px;
  border: 1px solid currentColor;
  font-size: 0.5rem;
  letter-spacing: 0.1rem;
  background: inherit;
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: "";
    top: 50%;
    transform: translate(0%, -50%);
    width: 70px;
    height: 1px;
    background: currentColor;
  }
  &:before {
    right: 100%;
  }
  &:after {
    left: 100%;
  }
`;

export const Seats = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(10, 18px);
  grid-template-rows: repeat(10, 18px);
  grid-gap: 0.75rem 0.3rem;
  grid-auto-flow: dense;
`;

export const FillerSeat = styled.div`
  visibility: hidden;
  opacity: 0;
  &:nth-child(2) {
    grid-column: 10/11;
    grid-row: 1/2;
  }
  &:nth-child(3) {
    grid-row: 6/11;
    grid-column: 1/2;
  }
  &:nth-child(4) {
    grid-column: 10/11;
    grid-row: 6/11;
  }
`;
