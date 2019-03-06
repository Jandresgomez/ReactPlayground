import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person.js';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Laura', age: 23 },
      { name: 'Max', age: 31 },
      { name: 'Steven', age: 27 }
    ]
  };

  render() {
    let personList = [];
    const persons = this.state.persons;
    for(let i = 0; i < persons.length; i++) {
      personList.push(<Person name={persons[i].name} age={persons[i].age}/>);
    }

    return (
      <div className="App">
        <h1>I am a React Playground!</h1>
        {personList}
        <button>Switch Name</button>
      </div>
    );
  }
}

export default App;