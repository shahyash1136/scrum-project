import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import config from "../../common/config";
import Button from "../Button/button";
import Popup from "../Popup";

const Header = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  const popupHandler = (e) => {
    e.preventDefault();
    setTogglePopup(!togglePopup);
    document.querySelector("body").classList.toggle("bodyNoScroll");
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
            <Button text='New Task' onClickHandler={popupHandler} />
          </div>
        </div>
      </div>
      {togglePopup && <Popup onPopupHandler={popupHandler} />}
    </header>
  );
};

export default Header;
