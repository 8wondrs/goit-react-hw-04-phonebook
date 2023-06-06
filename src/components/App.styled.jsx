import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 30px auto;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #000;
`;

export const Heading = styled.h2`
  margin: 50px 0 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;
