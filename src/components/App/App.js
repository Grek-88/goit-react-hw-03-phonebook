import React, { Component } from "react";

import "./App.css";

import Section from "../Section/Section";
import InputContact from "../InputContact/InputContact";
import Contacts from "../Contacts/Contacts";

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("contacts"))) {
      this.setState({ contacts: JSON.parse(localStorage.getItem("contacts")) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = (dataForm) => {
    if (this.state.contacts.find((el) => el.name === dataForm.name)) {
      alert(`${dataForm.name} is already in contacts.`);
    } else {
      return this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, dataForm],
        };
      });
    }
  };

  deleteContactList = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== contactId),
    }));
  };

  render() {
    return (
      <div className="App">
        <Section title="Phonebook">
          <InputContact onSubmit={this.formSubmitHandler} />
        </Section>
        {this.state.contacts.length > 0 && (
          <Section title="Contacts">
            <Contacts
              contact={this.state.contacts}
              onDelete={this.deleteContactList}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
