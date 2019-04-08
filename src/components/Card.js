import React from 'react';
import './Card.css';


const Card = (name, email, id) => {
  // const { name, id, email } = props;
  return <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
    <img className="card" src={`https://robohash.org/${id}?set=set4`} alt="kitty" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>;
}

export default Card;