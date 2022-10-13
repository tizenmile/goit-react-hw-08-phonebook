import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"
import { Filter } from './Filter/Filter'
import { useDispatch } from "react-redux";
import { addContact, deleteContact } from "redux/contactsSlice";
import { setFilter } from "redux/filterSlice";
export const App = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: event.target.name.value,
      number: event.target.number.value,
    }
    dispatch(addContact(contact.name, contact.number))
  }

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value))
  }

  const handleDelete = (event) => {
    dispatch(deleteContact(event.target.getAttribute("data-id")));
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2> Contacts </h2>
      <Filter handleDelete={handleDelete} handleChange={handleChange} />
      <ContactList handleDelete={handleDelete} />
    </div>
  )
}