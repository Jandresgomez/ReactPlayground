import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person.js';
import './App.css';
import './Person/Person.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { name: 'Laura', age: 23 },+
        { name: 'Max', age: 31 },
        { name: 'Steven', age: 27 }
      ]
    };
  }

  switchNameHandler = (newName) => { 
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Max', age: 31 },
        { name: 'Steven', age: 27 }  
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Laura', age: 23 },
        { name: event.target.value, age: 31 },
        { name: 'Steven', age: 27 }
      ]
    });
  }

  render() {
    const persons = this.state.persons;

    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>I am a React Playground!</h1>
        <Person 
        name={persons[0].name} 
        age={persons[0].age} 
        click={this.switchNameHandler.bind(this, "WithBind")}
        />
        <Person 
        name={persons[1].name} 
        age={persons[1].age} 
        changed={this.nameChangedHandler}
        />
        <Person 
        name={persons[2].name} 
        age={persons[2].age} 
        />
        <button 
        style={buttonStyle}
        onClick={() => this.switchNameHandler("WithCallback")}
        >
        Switch Name
        </button>
      </div>
    );
  }
}

export default App;