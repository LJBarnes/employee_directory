import React, { Component } from "react";
import "./style.css";

class Searchbar extends Component {
  // Setting the component's initial state
  state = {
    employeeName: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
   this.setState({
      employeeName: "",
      
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        
        <form className="form">
          <input
            value={this.state.employeeName}
            name="employeeName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Employee Name"
          />
          
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Searchbar;