import React from 'react';
import './buttonModal.sass';

const ButtonModal= ({title}:{title: string}) => {
  return (
    <>
      <button className='button' type="submit">
        <p className='button__p'>{title}</p>
      </button>
    </>
  );
};
export default ButtonModal;