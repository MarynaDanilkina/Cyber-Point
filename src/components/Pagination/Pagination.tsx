import React from 'react';
import './Pagination.sass';
const Pagination = () => {
  return (
    <>
      <div className="pagination__container">
        <button className='prev'><i className='icon-ArrowRight'></i></button>
        <p>1/3</p>
        <button className='next'><i className='icon-ArrowRight'></i></button>
      </div>
    </>
  );
};
export default Pagination;