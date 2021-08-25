/* eslint-disable array-callback-return */
import React, { Component } from "react";
import s from "../Contacts/Contacts.module.css";

import FindContact from "../FindContact/FindContact";

class Contacts extends Component {
  state = {
    filter: "",
  };
  filterContact = (filterContact) => this.setState({ filter: filterContact });

  render() {
    return (
      <>
        <FindContact onChange={this.filterContact} />
        <ul>
          {this.props.contact.map((el) => {
            if (this.state.filter) {
              if (el.name.toLowerCase().includes(this.state.filter)) {
                return (
                  <li key={el.id} className={s.li}>
                    {el.name} {el.number}
                    <button
                      className={s.button}
                      onClick={() => this.props.onDelete(el.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              }
            } else {
              return (
                <li key={el.id} className={s.li}>
                  {el.name} {el.number}
                  <button
                    className={s.button}
                    onClick={() => this.props.onDelete(el.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </>
    );
  }
}

export default Contacts;
