import React from 'react';
import Card from './Card';


const CardList = ({ kitty }) => {
  const cardArray = kitty.map((user, i) => {
    return (
      <Card 
        key={i} 
        id={kitty[i].id} 
        name={kitty[i].name} 
        email={kitty[i].email}
      />
    );
  })
  return (
    <div>
      {cardArray}
    </div>
  )

}

export default CardList;