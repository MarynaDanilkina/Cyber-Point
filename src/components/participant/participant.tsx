import React from 'react';
import './participant.sass';

const Participant= ({name = 'ItsGeorge', title='Игрок' }) => {
  return (
    <>
      <div className='modal__info-team__container'>
        <div className="modal__info-team__info">
          <div className="modal__info-team__logo">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.0002 55.6654C45.9663 55.6654 55.6668 45.9649 55.6668 33.9987C55.6668 22.0325 45.9663 12.332 34.0002 12.332C22.034 12.332 12.3335 22.0325 12.3335 33.9987C12.3335 45.9649 22.034 55.6654 34.0002 55.6654Z" stroke="#505353" strokeWidth="2"/>
              <path d="M33.2302 25.6641L29 39.9974L29.4002 40.6641H37.3333" stroke="#505353" strokeWidth="2" strokeLinecap="square"/>
              <path d="M43.0889 31.9688H43.1111" stroke="#505353" strokeWidth="2" strokeLinecap="square"/>
              <path d="M22.9229 31.9688H22.9451" stroke="#505353" strokeWidth="2" strokeLinecap="square"/>
              <rect x="1" y="1" width="66" height="66" rx="3" stroke="#505353" strokeWidth="2"/>
            </svg>
          </div>
          <div className="modal__info-team__name-container">
            <p className='modal__info-team__name-title'>{title}</p>
            <p className="modal__info-team__name-name">{name}</p>
          </div>
        </div>
        <div className="modal__info-team__close">
          <img src='/Icons.png' alt='pfp' className='pfp'/>
        </div>
      </div>
    </>
  );
};
export default Participant;