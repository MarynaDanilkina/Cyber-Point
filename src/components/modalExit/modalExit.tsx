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
              <img src='/Icons.png' alt='pfp' className='pfp' onClick={() => Закрыть()}/>
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