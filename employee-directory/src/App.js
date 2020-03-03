import React, { Component } from 'react';
import Header from "./components/Header";
import './App.css';
// import employees from "./employees.json";
import Searchbar from "./components/Searchbar";

class App extends Component {
  // state = {
  //   employees
  // };

// filteremployee....by name

render() {
  return (
<div className="container">
<Header>
  <h1>Employee Directory</h1>
</Header>


</div>
  
)
  }

}

export default App;