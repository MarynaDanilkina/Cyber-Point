import React from 'react';
import { Link } from 'react-router-dom';
import Logotype from '../PFP/Icon/Logotype';
import SeeAll from '../SeeAll/SeeAll';
import './CardUpcomingTournaments.sass';

const CardUpcomingTournaments= ({title = '', date = '', price = '', }) => {
  return (
    <>
      <div className="card-Upcomingtournaments__container">
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
              <div className="card-tournaments__top-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.939 3.12012C13.3323 3.12012 10.1888 3.12012 4.58203 3.12012V20.8801L11.7846 17.5724L18.939 20.8801V3.12012Z" stroke="#F7FDFC" strokeWidth="1.44" strokeLinecap="square"/>
                  <path d="M8.37891 9.33643H15.1406" stroke="#F7FDFC" strokeWidth="1.44" strokeLinecap="square"/>
                </svg>
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
export default CardUpcomingTournaments;