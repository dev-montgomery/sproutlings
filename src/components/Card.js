import React, { useState } from 'react';

const Card = ({ item }) => {

  const [currentSection, setCurrentSection] = useState(null);

  const toggleSection = (section) => {
    setCurrentSection(currentSection === section ? null : section);
  };

  return (
    <div className='card-container'>
      <h2>{item.name} <i class="fa-solid fa-sm fa-dollar-sign"></i>{item.price}</h2>
      <ul className='info-container'>
        <li>{item.status}</li>
        <li onClick={() => toggleSection(1)}>description</li>
        <li onClick={() => toggleSection(2)}>diet</li>
        <li onClick={() => toggleSection(3)}>benefits</li>
      </ul>
      <section>
        {currentSection === 1 && <p>{item.description}</p>}
        {currentSection === 2 && <p>Content of Section 2</p>}
        {currentSection === 3 && <p>Content of Section 3</p>}
      </section>
    </div>

    
  )
};

export default Card;