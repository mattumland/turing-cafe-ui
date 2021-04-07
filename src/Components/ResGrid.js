import React from 'react';
import Res from "./Res";

const ResGrid = ({ resLog }) => {

  const resies = resLog.map(res => {
    return(
      <Res
      key={res.id}
      id={res.id}
      name={res.name}
      date={res.date}
      time={res.time}
      num={res.number}
      />
    )
  })

  return(
    <>
    {resies}
    </>
  )

}

export default ResGrid;
