import React from 'react';
import './SeeAll.sass';

const SeeAll= ({amount}:{amount: string}) => {
  return (
    <>
      <div className="seeAll__container">
        <p>Смотреть все ({amount})</p>
        <i className='icon-ArrowRight'></i>
      </div>
    </>
  );
};
export default SeeAll;