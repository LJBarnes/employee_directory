import React, { Component } from "react";
import "./style.css";


// Need to map through employee/info to generate table--look back at friend cards example--app.js is where we'll map to generate table
const Table = (props) => {
    return (
      <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
          <li>
            <strong>email:</strong> {props.email}
          </li>
        </ul>
      </div>
      
    </div>
    );
  }
  
  export default Table;

  
// include before /tbody once you get the function set up properly in app?
//   <span onClick={() => props.sortFriends(props.name)} className="sort">
//   ^
// </span>

