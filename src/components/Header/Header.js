import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import config from "../../common/config";
import Button from "../Button/button";

const Header = () => {
  const buttonHandler = (e) => {
    e.preventDefault();
    console.log("New Task");
  };
  return (
    <header>
      <div className='header'>
        <div className='container'>
          <div className='header__container'>
            <Link to='/' className='logo'>
              <img src={`${config.IMG_BASE}/logo.png`} alt='kanban board' />
              <span>kanban board</span>
            </Link>
            <Button text='New Task' onClickHandler={buttonHandler} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
