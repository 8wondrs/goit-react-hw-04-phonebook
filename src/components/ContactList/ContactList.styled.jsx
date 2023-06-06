import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  width: 355px;
  flex-direction: column;
  margin: 0 auto;
`;

export const ListItem = styled.li`
  display: flex;
  margin: 5px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  transition: background-color 0.3s;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    border: 1px solid #1976d2;
    scale: 1.05;
    background-color: rgba(25, 118, 210, 0.05);
  }
`;

export const Span = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #212121;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  background-color: #2196f3;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background-color: #1976d2;
  }
`;
