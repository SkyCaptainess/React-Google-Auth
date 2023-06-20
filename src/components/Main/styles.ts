import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Description = styled.span`
  text-align: center;
  font-weight: 400;
  opacity: 0.5;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #d96446;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  margin: 24px 0;

  transition: background-color .2s ease-in;

  svg {
    font-size: 24px;
    margin-right: 8px;
  }

  &:hover {
    background: #b23f21;
  }
`;
