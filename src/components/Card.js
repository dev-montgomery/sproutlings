import React from 'react';

const Card = (props) => {
  return (
    <div className='card-container'>
      <h2>{props.name}</h2>
      <p>{props.description}<span>{props.price}</span></p>
      <p>{props.status}</p>
    </div>
  )
};

export default Card;