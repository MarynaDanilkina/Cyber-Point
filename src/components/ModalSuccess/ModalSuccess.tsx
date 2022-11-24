import ButtonModal from 'components/UIKit/buttonModal/buttonModal';
import { useAppDispatch } from 'interface/interface';
import React from 'react';
import { reduserSlice } from 'reduxStore/Reducer';
import './ModalSuccess.sass';

const ModalSuccess = () => {
  const dispatch = useAppDispatch();
  const { closeModalSuccess } = reduserSlice.actions;
  function Закрыть() {
    dispatch(closeModalSuccess())
  }
  return (
    <>
      <div className="modal__container active">
        <div className="modal">
          <div className="modal__info-container">
            <div className='modal__info'>
              <p>команда успешно записана!</p>
              <img src='/Icons.png' alt='pfp' className='pfp' onClick={() => Закрыть()}/>
            </div>
            <div className='modal__info-button'>
              
              <div className="">
                <ButtonModal title={'открыть Discord'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalSuccess;