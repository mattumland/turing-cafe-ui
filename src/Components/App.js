import React, { Component } from 'react';
import './App.css';
import ResGrid from './ResGrid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      resLog: [{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }]
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
