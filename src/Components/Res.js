import React from 'react';
import './Res.css';

const Res = ({key, id, name, date, time, num}) => {

  return (
    <section className='resCard'>
      <h3>{name}</h3>
      <h5>{date}</h5>
      <h5>{time}pm</h5>
      <h5>Number of guests: {num}</h5>
      <button>Cancel</button>
    </section>
  )
}


export default Res;
