import { useAppDispatch, useAppSelector } from 'interface/interface';
import React from 'react';
import { reduserSlice } from 'reduxStore/Reducer';

const ModalFaceit = () => {
  const dispatch = useAppDispatch();
  const { modalFaceit } = useAppSelector((state) => state);
  const { closeModalDiscord,closeModalFaceit, login } = reduserSlice.actions;
  function Войти() {
    dispatch(closeModalFaceit())
    dispatch(login());
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
              <img src='/Icons.png' alt='pfp' className='pfp' onClick={() => Закрыть()}/>
            </div>
            <div className='modal__info-button'>
              <img src='/Привязыть.png' alt='pfp' className='pfp' onClick={() => Войти()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalFaceit;