import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"
import { Filter } from './Filter/Filter'
import React, { Component } from "react";
import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: event.target.name.value,
      number: event.target.number.value,
      id: nanoid()
    }

    if (this.state.contacts.find(element => element.name === event.target.name.value)) return alert(`${event.target.name.value} is already in contacts.`)
    this.setState({ contacts: [...this.state.contacts, contact] })
  }

  handleChange = (event) => {
    this.setState({ filter: event.target.value })
  }
  handleDelete = (event) => {
    this.setState({ contacts: this.state.contacts.filter(data => data.id !== event.target.getAttribute("data-id")) })
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2> Contacts </h2>
        <Filter contacts={this.state.contacts} filter={this.state.filter} handleDelete={this.handleDelete} handleChange={this.handleChange} />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export { App }
