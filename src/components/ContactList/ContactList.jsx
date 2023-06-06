import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Span, Button } from './ContactList.styled.jsx';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Span>
            {contact.name}: <Span>{contact.number}</Span>
          </Span>
          <Button onClick={() => deleteContact(contact.id)}>delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
