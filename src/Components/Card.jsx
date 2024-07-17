import React from 'react';
import './Card.css';
const Card = ({ Details }) => {
  return (
    <div className="Card">
        <h4>React Price Card Task</h4>
        <h3>{Details.tag}</h3>
        <h2>{Details.title}</h2>
        <ul>
        {Details.features.map((feature,ind) => (
            <li key={ind}className={!feature.isIncluded && 'line-through'}>
            {feature.isIncluded && <i class="fa-solid fa-check"></i>}
            {!feature.isIncluded && <i class="fa-solid fa-xmark"></i>}
            {feature.text}
            </li>
        ))}
        </ul>
       <button type="button">BUTTON</button>
    </div>
  );
};

export default Card;