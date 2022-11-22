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
        <div className="modal">
          <div className="modal__info-container">
            <div className='modal__info'>
              <p>Вход через discord</p>
              <img src='/Icons.png' alt='pfp' className='pfp' onClick={() => Закрыть()}/>
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