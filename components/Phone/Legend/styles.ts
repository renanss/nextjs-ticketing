import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 1.25rem 0;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.35rem;

  svg {
    margin-right: 0.2rem;
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }
`;

export const ItemName = styled.span`
  text-transform: capitalize;
  color: hsl(0, 0%, 75%);
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 0.6rem;
`; 