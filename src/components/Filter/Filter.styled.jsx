import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 300px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  outline: none;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  :focus {
    border: 1px solid #2196f3;
  }
`;

export const Title = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  color: #616161;
`;
