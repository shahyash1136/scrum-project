import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClickHandler}
      className={`btn ${props.buttonClass || "default"}`}>
      {props.text}
    </button>
  );
};

export default Button;
