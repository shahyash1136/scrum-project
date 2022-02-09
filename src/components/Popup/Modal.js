import React from "react";
import Button from "../Button/button";

const Modal = (props) => {
  const createTaskHandler = () => {
    console.log("Test");
  };
  return (
    <div className='popup fade in'>
      <div className='popup__container'>
        <div className='popup__head'>
          <div className='popup__close' onClick={props.onPopupHandler}>
            <span></span>
            <span></span>
          </div>
          <div className='popup__title'>
            <span>New Task</span>
          </div>
        </div>
        <div className='popup__body'>
          <form className='form'>
            <div className='form__control'>
              <div className='label'>
                <label>Summary</label>
              </div>
              <div className='input'>
                <input type='text' className='' placeholder='' value='' />
              </div>
            </div>
            <div className='form__control'>
              <div className='label'>
                <label>Priority</label>
              </div>
              <div className='input'></div>
            </div>
            <div className='form__control'>
              <div className='label'>
                <label>Story</label>
              </div>
              <div className='input'>
                <input
                  type='number'
                  className=''
                  placeholder=''
                  value=''
                  min='0'
                />
              </div>
            </div>
            <div className='form__control'>
              <div className='label'>
                <label>Due Date</label>
              </div>
              <div className='input'>
                <input type='date' className='' placeholder='' value='' />
              </div>
            </div>
          </form>
          <Button text='New Task' onClickHandler={createTaskHandler} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
