import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

const portal = document.getElementById("modal");

const index = (props) => {
  return ReactDOM.createPortal(
    <Modal onPopupHandler={props.onPopupHandler} />,
    portal
  );
};

export default index;
