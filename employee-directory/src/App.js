import React, { Component } from "react";
import Header from "./components/Header";
import './App.css';
import employees from "./employees.json";
import Searchbar from "./components/Searchbar";
import Tbl from "./components/Tbl";


class App extends Component {

  // setting initial state
  state = {
    employees,
    search: ""
  };

 findEmployee = emp => {
   console.log(emp);
  //  -1 with .indexof means whatever you're looking for is not there--so by saying !== whatever you're returning whatever you're searching for if it IS in the directory
   if ((emp.name).indexOf(this.state.search) !== -1) {
    return emp;
    // to do: toLowerCase both emp.name and this.search.state so that it won't snag if someone doesn't type it in just right thing
   } 

 }

  // When the form is submitted, search the employees.json for `this.state.search`
  handleFormSubmit = event => {

    event.preventDefault();
    const filterEmp = employees.filter(this.findEmployee);
    console.log("search"+ this.state.search);
    this.setState({ employees: filterEmp });
    }
  

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({ search: event.target.value })
  };

 


  // function for sorting employees in alphabetical order


  // we want to map over employees and render a row for each employee
   render () {
    return (
      <div className="container">
        <Header>
          <h1>Employee Directory</h1>
        </Header>

        <Searchbar 
        search={this.state.search}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        />

        <table>

                <tr>
                    <th>ID</th>
                    <th>Pic</th>
                    <th>Name <button type="button" className="btn btn-primary">sort</button></th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </table>
        {this.state.employees.map(employee => (
        <Tbl
          id ={employee.id}
          key={employee.id}
          name={employee.name}
          image={employee.image}
          phone={employee.phone}
          email={employee.email}
        />
        ))}
      </div>

    );
  }
}


export default App;