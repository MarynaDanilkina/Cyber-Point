import Card from 'components/Card/card';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import ModalEditProfile from 'components/ModalEditProfile/ModalEditProfile';
import ModalExit from 'components/modalExit/modalExit';
import ModalFaceit from 'components/modalFaceit/modalFaceit';
import Edit from 'components/UIKit/edit/edit';
import PFP from 'components/UIKit/PFP/PFP';
import { useAppDispatch, useAppSelector } from 'interface/interface';
import React from 'react';
import { reduserSlice } from 'reduxStore/Reducer';
import './Profile.sass';

const Profile = () => {
  const { modalExit, modalFaceit, userFaceit, modalEditProfile } = useAppSelector((state) => state);
  const { openModalFaceit, openModalExit, openModalEditProfile } = reduserSlice.actions;
  const dispatch = useAppDispatch();
  function Выйти() {
    dispatch(openModalExit())
  }
  function МодалкаFaceit() {
    dispatch(openModalFaceit())
  }
  function РедактироватьПрофиль() {
    dispatch(openModalEditProfile())
  }
  return (
    <>
      <header className="header _container">
        <Header />
        <div className='profile__container'>
          <div className='profile__title-container'>
            <div className='profile__title__wrapper'>
              <PFP />
              <div className="profile__titles">
                <div className="profile__title">
                  <h3 className='profile__title-h3'>itsgeorge</h3>
                  <div onClick={() => РедактироватьПрофиль()}><Edit /></div>
                </div>
                <div className="profile__exit-faceit__container">
                  <div className="profile__exit-faceit profile__exit-faceitExit" onClick={() => Выйти()}>
                    <p className='profile__exit'>Выйти</p>
                  </div>
                  <div className="profile__exit-faceit" onClick={() => МодалкаFaceit()}>
                    <p>{userFaceit? 'Faceit Профиль' : 'Привязать Faceit' }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='Cards__container'>
            <Card title={'Команда:'} info={'CBPT'} />
            <Card title={'Сыграно Турниров:'} info={'12'} />
            <Card title={'Побед:'} info={'7'} />
            <Card title={'Выиграно:'} info={'$ 4 567'} />
          </div>
        </div>
      </header>
      {modalExit ? <ModalExit /> : null}
      {modalFaceit ? <ModalFaceit /> : null}
      {modalEditProfile? <ModalEditProfile /> : null}
      <Footer />
    </>
    
  );
};
export default Profile;
