import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Input } from './Filter.styled.jsx';

export const Filter = ({ value, filterChanger }) => {
  return (
    <Container>
      <Title>
        Find contacts by name
        <Input type="text" value={value} onChange={filterChanger} />
      </Title>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  filterChanger: PropTypes.func,
};
