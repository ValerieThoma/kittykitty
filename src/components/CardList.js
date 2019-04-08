import React from "react";
import Card from "./Card";

const CardList = ({ kitty }) => {
  return (
    <div>
      {kitty.map((user, i) => {
        return (
          <Card
            key={i}
            id={kitty[i].id}
            name={kitty[i].name}
            email={kitty[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
