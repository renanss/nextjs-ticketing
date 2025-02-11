import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 1.75rem;
  width: 100%;
  background: var(--accent, #fd6d8e);
  box-shadow: 0 2px 5px -4px currentColor;
  padding: 0.75rem 1rem;
  border-radius: 15px;
  font-family: inherit;
  color: var(--background, #ffffff);
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Total = styled.strong`
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
`;

export const Action = styled.span`
  font-size: 0.9rem;
`; 