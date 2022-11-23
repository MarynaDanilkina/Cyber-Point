import React from 'react';
import './SeeAll.sass';

const SeeAll= ({title}:{title: string}) => {
  return (
    <>
      <div className="seeAll__container">
        <p>{title}</p>
        <i className='icon-ArrowRight'></i>
      </div>
    </>
  );
};
export default SeeAll;