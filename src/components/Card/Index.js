import React from "react";
import Card from "./Card";
import "./card.css";

const Index = (props) => {
  return (
    <div className='cards'>
      <div className='cards__heading'>
        <span>{props.heading}</span>
      </div>
      <Card priority={"high"} />
      <Card priority={"medium"} />
      <Card priority={"low"} />
    </div>
  );
};

export default Index;
