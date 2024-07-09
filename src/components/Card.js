import React from 'react';

const Card = ({ item }) => {
  return (
    <div className='card-container'>
      <h2>{item.name}</h2>
      {/* <p>{props.description}<span>{props.price}</span></p>
      <p>{props.status}</p> */}
    </div>
  )
};

export default Card;