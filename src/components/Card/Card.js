import React from "react";

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card__container'>
        <div className='card__row'>
          <span className={`priority ${props.priority}`}>{props.priority}</span>
        </div>
        <div className='card__row'>
          <span className='card__summary'>
            [Design] [SuperOver] - Static pages
          </span>
        </div>
        <div className='card__row'>
          <span className='card__story badge'>5</span>
          <span className='card__dueDate'>Dec 20</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
