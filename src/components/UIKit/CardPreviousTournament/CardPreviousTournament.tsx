import React from 'react';
import Logotype from '../PFP/Icon/Logotype';
import './CardPreviousTournament.sass';

const CardPreviousTournament= ({title = '', date = '', price = '', }) => {
  return (
    <>
      <div className="card-Previoustournaments__container">
        {title === '' ? (
          <div className='Empty-card__container'>
            <Logotype/>
          </div>
            ) : (
          <div className="card-tournaments">
            <div className="card-tournaments__top-container">
              <div className="card-tournaments__top-title-container">
                <div className="card-tournaments__title">
                  <p>{title}</p>
                </div>
                <div className="card-tournaments__date">
                  <p>{date}</p>
                </div>
              </div>
            </div>
            <div className="card-tournaments__bottom-container">
              <div className="card-tournaments__bottom-price">
                <p>{price}</p>
              </div>
              <div className="card-tournaments__bottom">
                <div className="more__container">
                  <p>Подробнее</p>
                  <i className='icon-ArrowRight'></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </>
  );
};
export default CardPreviousTournament;