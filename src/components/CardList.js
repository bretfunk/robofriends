import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("Noooo");
  }
  return (
    <div>
      {robots.map(({ id, name, email }, i) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default CardList;
