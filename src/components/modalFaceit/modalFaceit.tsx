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
              <img src='/Icons.png' alt='pfp' className='pfp' onClick={() => Закрыть()}/>
            </div>
            <div className='modal__info-button'>
              <img src='/Привязыть.png' alt='pfp' className='pfp' onClick={() => Привязать()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalFaceit;