import React, { Component } from "react";
import "./style.css";


function Searchbar(props) {
  return (
    <form>
    <div className="form-group">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="employee"
        type="text"
        className="form-control"
        placeholder="Search for an employee by name"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
        Search
      </button>
    </div>
  </form>
  )
}


export default Searchbar;