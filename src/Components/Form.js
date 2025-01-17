import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      date:'',
      time:'',
      number:''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitRes = event => {
    event.preventDefault();
    const newRes = {
      id: Date.now(),
      name:this.state.name,
      date:this.state.date,
      time:this.state.time,
      number:parseInt(this.state.number)
    }
    this.props.addRes(newRes);
    this.clearInputs();
  }

    clearInputs = () => {
      this.setState({ name:'', date:'', time:'', number:'' })
    }


  render() {
    return(
      <form className='res-form'>
        <input className='input-box' data-cy='name-input'
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input className='input-box'
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input className='input-box'
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />


        <input className='input-box'
          type='text'
          placeholder='Number of guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />

        <button className="input-button" onClick={event => this.submitRes(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
