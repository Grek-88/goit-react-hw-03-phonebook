import React, { Component } from "react";
import s from "../FindContact/FindContact.module.css";

class FindContact extends Component {
  findInputChange = (ev) => {
    this.props.onChange(ev.target.value.toLowerCase());
  };

  render() {
    return (
      <label className={s.label}>
        Find contacts by name
        <input className={s.input} onChange={this.findInputChange} />
      </label>
    );
  }
}

export default FindContact;
