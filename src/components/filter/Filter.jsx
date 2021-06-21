import React from "react";
import styled from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ filter, handleChange }) => {
  return (
    <label className={styled.title}>
      Find contacts by name
      <input
        className={styled.input}
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.defaultProps = {
  filter: "",
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
