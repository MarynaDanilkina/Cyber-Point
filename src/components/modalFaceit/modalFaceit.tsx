import ButtonModal from 'components/UIKit/buttonModal/buttonModal';
import { useAppDispatch, useAppSelector } from 'interface/interface';
import React from 'react';
import { reduserSlice } from 'reduxStore/Reducer';

const ModalFaceit = () => {
  const dispatch = useAppDispatch();
  const { modalFaceit } = useAppSelector((state) => state);
  const { loginFaceit ,closeModalFaceit } = reduserSlice.actions;
  function Привязать() {
    dispatch(closeModalFaceit())
    dispatch(loginFaceit())
  }
  function Закрыть() {
    dispatch(closeModalFaceit())
  }
  return (
    <>
      <div className="modal__container active">
        <div className="modal">
          <div className="modal__info-container">
            <div className='modal__info'>
              <p>Сначала привяжите faceit</p>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='pfp' onClick={() => Закрыть()}>
                <path d="M1.00001 21L21 1M1 1L21 21" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className='modal__info-button' onClick={() => Привязать()} >
              <ButtonModal title={'Привязать'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalFaceit;