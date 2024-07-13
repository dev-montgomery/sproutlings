import React from 'react';

const Card = ({ updateCurrContent, name, description, diet, benefits, price, availability }) => {

  const parseCamelCase = camelCaseString => {
    const words = camelCaseString.match(/^[a-z]+|[A-Z][a-z]*/g);
    const formattedString = words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  
    return formattedString;
  };

  const dietSection = Object.keys(diet).map(key => {
    const meal = parseCamelCase(key);
    const info = diet[key];
    return (
      <section>
        <h2>{meal}</h2>
        <p>{info}</p>
      </section>
    )
  });

  const benefitsSection = Object.keys(benefits).map(key => {
    const topic = parseCamelCase(key);
    const info = benefits[key];
    return (
      <section>
        <h2>{topic}</h2>
        <p>{info}</p>
      </section>
    )
  });

  return (
    <div className='card-container'>
      <h2>{name} <i class="fa-solid fa-sm fa-dollar-sign"></i>{price} <span>{availability}</span></h2>
      <ul className='info-container'>
        <li onClick={() => updateCurrContent(description)}>description</li>
        <li onClick={() => updateCurrContent(dietSection)}>diet</li>
        <li onClick={() => updateCurrContent(benefitsSection)}>benefits</li>
      </ul>
    </div>    
  )
};

export default Card;