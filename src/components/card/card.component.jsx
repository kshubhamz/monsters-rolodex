import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monoster.id}/?set=set2&size=180x180`}
        alt="monoster"
      />
      <h4>{props.monoster.name}</h4>
      <p>Email: {props.monoster.email}</p>
    </div>
  );
};
