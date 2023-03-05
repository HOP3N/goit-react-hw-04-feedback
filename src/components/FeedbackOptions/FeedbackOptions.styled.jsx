import styled from 'styled-components';

export const Button = styled.button`
  padding: 20px;
  font-size: 12px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  font-weight: 600;
  :hover {
    scale: 1.05;
    background-color: #aaa;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
