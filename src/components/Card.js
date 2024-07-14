import React from "react";

const Card = ({ updateCurrContent, name, description, diet, benefits, price, availability }) => {

  const parseCamelCase = camelCaseString => {
    const words = camelCaseString.match(/^[a-z]+|[A-Z][a-z]*/g);
    const formattedString = words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  
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
    <div className="card">
      <h2 className="primary">{name}</h2>
      <p className={availability ? "green-available availability" : "brown-unavailable availability"}>{availability ? "AVAILABLE" : "UNAVAILABLE"}</p>
      <div className="card-info">
        <button className="card-btn" onClick={() => updateCurrContent(description)}>description</button>
        <p>|</p>
        <button className="card-btn" onClick={() => updateCurrContent(dietSection)}>diet</button>
        <p>|</p>
        <button className="card-btn" onClick={() => updateCurrContent(benefitsSection)}>benefits</button>
      </div>
    </div>    
  )
};

export default Card;