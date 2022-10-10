import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"
import { Filter } from './Filter/Filter'
import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid'

const getStorageData = (localContacts, defaultValue) => {
  const savedItem = localStorage.getItem(localContacts);
  const parsedItem = JSON.parse(savedItem);
  return parsedItem || defaultValue;
}

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return getStorageData('localContacts', []);
  });
  const [filter, setfilter] = useState('')

  useEffect(() => {
    localStorage.setItem('localContacts', JSON.stringify(contacts))
  }, [contacts]);

  console.log(contacts);
  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: event.target.name.value,
      number: event.target.number.value,
      id: nanoid()
    }
    if (contacts.find(element => element.name === event.target.name.value)) return alert(`${event.target.name.value} is already in contacts.`)
    setContacts([...contacts, contact])

  }

  const handleChange = (event) => {
    setfilter(event.target.value)
  }

  const handleDelete = (event) => {
    setContacts(contacts.filter(data => data.id !== event.target.getAttribute("data-id")))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2> Contacts </h2>
      <Filter contacts={contacts} filter={filter} handleDelete={handleDelete} handleChange={handleChange} />
      <ContactList contacts={contacts} filter={filter} handleDelete={handleDelete} />
    </div>
  )
}
