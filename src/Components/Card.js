import React from "react";
import CounterButton from "./CounterButton";



const Card = ({ name, email, id }) => {


  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <CounterButton />
      </div>
    </div>
  )
}

export default Card