import React from "react";

const Card = ({ captainPlanet, name, description, diet, benefits, availability }) => {

  const parseCamelCase = camelCaseString => {
    const words = camelCaseString.match(/^[a-z]+|[A-Z][a-z]*/g);
    const formattedString = words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  
    return formattedString;
  };

  const dietSection = Object.keys(diet).map((key, index) => {
    const meal = parseCamelCase(key);
    const info = diet[key];
    return (
      <section key={index}>
        <h2>{meal}</h2>
        <p>{info}</p>
      </section>
    )
  });

  const benefitsSection = Object.keys(benefits).map((key, index) => {
    const topic = parseCamelCase(key);
    const info = benefits[key];
    return (
      <section key={index}>
        <h2>{topic}</h2>
        <p>{info}</p>
      </section>
    )
  });

  return (
    <div className="card">
      <h2 className="primary">{name}</h2>
      <p className={availability ? "green availability" : "brown availability"}>{availability ? "AVAILABLE" : "UNAVAILABLE"}</p>
      <div className="card-info">
        <button className="card-btn" onClick={() => captainPlanet(description, 'description-styles')}>DESCRIPTION</button>
        <button className="card-btn" onClick={() => captainPlanet(dietSection, 'diet-styles')}>DIET</button>
        <button className="card-btn" onClick={() => captainPlanet(benefitsSection, 'benefits-styles')}>BENEFITS</button>
      </div>
    </div>    
  )
};

export default Card;