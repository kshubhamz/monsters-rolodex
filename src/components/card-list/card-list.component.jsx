import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monosters.map((monoster) => {
        return <Card key={monoster.id} monoster={monoster}></Card>;
      })}
    </div>
  );
};
