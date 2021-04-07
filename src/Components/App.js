import React, { Component } from 'react';
import './App.css';
import ResGrid from './ResGrid';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      resLog: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(resies => this.setState({ resLog: resies}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ResGrid
            resLog={this.state.resLog}
          />
        </div>
      </div>
    )
  }
}

export default App;
