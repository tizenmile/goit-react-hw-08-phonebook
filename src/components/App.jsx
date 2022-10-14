import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"
import { Filter } from './Filter/Filter'
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { fetchContacts, addContact, deleteContact } from "redux/operations";
import { useEffect } from "react";
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const contacts = useSelector(state => state.contacts.items);
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const contact = {
      name: event.target.name.value,
      number: event.target.number.value,
    }
    if (contacts.find(element => element.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`)
      return
    }
    await dispatch(addContact(contact))
    event.target.reset()
    dispatch(fetchContacts())
  }

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value))
  }

  const handleDelete = async (event) => {
    await dispatch(deleteContact(event.target.getAttribute("data-id")));
    dispatch(fetchContacts())
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2> Contacts </h2>
      <Filter handleDelete={handleDelete} handleChange={handleChange} />
      {isLoading && <div><b>Request in progress...</b></div>}
      {<ContactList handleDelete={handleDelete} />}

    </div>
  )
}