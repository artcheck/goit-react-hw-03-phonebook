import React from "react";
import PropTypes from "prop-types";
import styled from "./ContactList.module.css";

const ContactList = ({ contacts=[], handleDelete }) => {
  return (
    <ul className={styled.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}:{number}
          </p>
          <button
            className={styled.delete_contact}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.prototypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),

  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
