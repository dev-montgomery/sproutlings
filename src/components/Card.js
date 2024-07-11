import React, { useState } from 'react';

const Card = ({ name, description, diet, benefits, price, availability }) => {

  const [currentSection, setCurrentSection] = useState(null);
  
  const toggleSection = (section) => {
    setCurrentSection(currentSection === section ? null : section);
  };

  const parseCamelCase = camelCaseString => {
    const words = camelCaseString.match(/^[a-z]+|[A-Z][a-z]*/g);
    const formattedString = words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  
    return formattedString;
  };

  const dietSection = Object.keys(diet).map(key => {
    const meal = parseCamelCase(key);
    return meal;
  });

  return (
    <div className='card-container'>
      <h2>{name} <i class="fa-solid fa-sm fa-dollar-sign"></i>{price} <span>{availability}</span></h2>
      <ul className='info-container'>
        <li onClick={() => toggleSection(1)}>description</li>
        <li onClick={() => toggleSection(2)}>diet</li>
        <li onClick={() => toggleSection(3)}>benefits</li>
      </ul>
      <section>
        {currentSection === 1 && <p>{description}</p>}
        {currentSection === 2 && <p>{dietSection}</p>}
        {currentSection === 3 && <p>Content of Section 3</p>}
      </section>
    </div>    
  )
};

export default Card;