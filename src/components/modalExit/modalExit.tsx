import ButtonModal from 'components/UIKit/buttonModal/buttonModal';
import { useAppDispatch, useAppSelector } from 'interface/interface';
import React from 'react';
import { reduserSlice } from 'reduxStore/Reducer';

const ModalExit = () => {
  const dispatch = useAppDispatch();
  const { modalFaceit } = useAppSelector((state) => state);
  const { closeModalExit, deleteLogin } = reduserSlice.actions;
  function Выйти() {
    dispatch(closeModalExit())
    dispatch(deleteLogin());
  }
  function Закрыть() {
    dispatch(closeModalExit())
  }
  return (
    <>
      <div className="modal__container active">
        <div className="modal">
          <div className="modal__info-container">
            <div className='modal__info'>
              <p>Вы уверены, что хотите выйти?</p>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='pfp' onClick={() => Закрыть()}>
                <path d="M1.00001 21L21 1M1 1L21 21"  strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className='modal__info-button' onClick={() => Выйти()}>
              <ButtonModal title={'да, выйти'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalExit;