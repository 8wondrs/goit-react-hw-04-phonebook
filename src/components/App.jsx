import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Container, Title, Heading } from './App.styled';

const initialContacts = [
  { id: 'id-1', name: 'Harry Potter', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Greinger', number: '443-89-12' },
  { id: 'id-3', name: 'Ron Wizli', number: '645-17-79' },
  { id: 'id-4', name: 'Albus Dambldor', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }

    setContacts([newContact, ...contacts]);
    return true;
  };

  const filterChanger = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />

      <Heading>Contacts</Heading>
      <Filter value={filter} filterChanger={filterChanger} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </Container>
  );
};
