import React from 'react';
import './card.sass';
export interface ICard {
  title: string;
  info: string;
}
const Card = ({title, info}: ICard) => {
  return (
    <>
      <div className='Card__container'>
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
      
    </>
  );
};
export default Card;