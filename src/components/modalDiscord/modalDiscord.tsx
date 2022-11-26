import ButtonModal from 'components/UIKit/buttonModal/buttonModal';
import { useAppDispatch } from 'interface/interface';
import React from 'react';
import { reduserSlice } from 'reduxStore/Reducer';
import './modalDiscord.sass';

const ModalDiscord = () => {
  const dispatch = useAppDispatch();
  const { closeModalDiscord, login } = reduserSlice.actions;
  function Войти() {
    dispatch(closeModalDiscord())
    dispatch(login())
  }
  function Закрыть() {
    dispatch(closeModalDiscord())
  }
  return (
    <>
      <div className="modal__container active">
        <div className="modal discord">
          <div className="modal__info-container">
            <div className='modal__info'>
              <p>Вход через discord</p>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='pfp' onClick={() => Закрыть()}>
                <path d="M1.00001 21L21 1M1 1L21 21" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className='modal__info-button'>
              
              <div className="" onClick={() => Войти()}>
                <ButtonModal title={'Войти'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalDiscord;