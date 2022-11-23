import React from 'react';
import { Link } from 'react-router-dom';
import './dropDownNavlink.sass';

const DropDownNavlink = () => {
  return (
    <>
      <div className="dropDownNavlink__container">
        <Link to="/NextTournaments"><p className='dropDownNavlink__p'>Предстоящие</p></Link>
        <Link to="/PreviousTournaments"><p className='dropDownNavlink__p2'>Прошедшие</p></Link>
      </div>
    </>
  );
};
export default DropDownNavlink;