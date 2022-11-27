import BannerTeams from 'components/BaannerTeams/BannerTeams';
import Card from 'components/Card/card';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import ModalEditTeam from 'components/ModalEditTeam/ModalEditTeam';
import ModalExit from 'components/modalExit/modalExit';
import Edit from 'components/UIKit/edit/edit';
import PFP from 'components/UIKit/PFP/PFP';
import { useAppDispatch, useAppSelector } from 'interface/interface';
import React from 'react';
import { reduserSlice } from 'reduxStore/Reducer';
import './Team.sass';

const Team = () => {
  const { modalExit, modalEditTeam } = useAppSelector((state) => state);
  const { openModalExit, openmodalEditTeam } = reduserSlice.actions;
  const dispatch = useAppDispatch();
  function Выйти() {
    dispatch(openModalExit())
  }
  function РедактироватьПрофиль() {
    dispatch(openmodalEditTeam())
  }
  return (
    <>
      <header className="header _container">
        <Header />
        <div className='profile-team__container'>
          <div className='profile__title-container'>
            <div className='profile__title__wrapper'>
              <div className="profile-team">
                <div className='profile-team-banner'>
                  <BannerTeams />
                </div>
                <PFP />
              </div>
              <div className="profile-team__titles">
                <div className="profile__title">
                  <h3 className='profile__title-h3'><span className='CBPT'>(CBPT) </span>Cyber-Point Team</h3>
                  <div onClick={() => РедактироватьПрофиль()}><Edit /></div>
                </div>
                <div className="profile__exit-faceit__container">
                  <div className="profile__team">
                    <p>Cyber Point - платформа, созданная для соревновательной игры в CS:GO. Это место,
                    где можно создать свою команду или присоединиться к уже существующей и выигрывать денежные призы в турнирах!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='Cards-team__container'>
            <Card title={'Дата Создания:'} info={'11.13.2022'} />
            <Card title={'Сыграно Турниров:'} info={'12'} />
            <Card title={'Побед:'} info={'7'} />
            <Card title={'Выиграно:'} info={'$ 4 567'} />
          </div>
        </div>
      </header>
      {modalExit ? <ModalExit /> : null}
      {modalEditTeam? <ModalEditTeam /> : null}
      <Footer />
    </>
    
  );
};
export default Team;
