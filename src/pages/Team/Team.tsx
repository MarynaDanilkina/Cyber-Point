import Card from 'components/Card/card';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import ModalExit from 'components/modalExit/modalExit';
import PFP from 'components/UIKit/PFP/PFP';
import { useAppDispatch, useAppSelector } from 'interface/interface';
import React from 'react';
import { reduserSlice } from 'reduxStore/Reducer';
import './Team.sass';

const Team = () => {
  const { BanerTeams } = useAppSelector((state) => state);
  const { modalExit } = useAppSelector((state) => state);
  const { openModalExit } = reduserSlice.actions;
  const dispatch = useAppDispatch();
  function Выйти() {
    dispatch(openModalExit())
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
                  <img src={BanerTeams} alt='pfp' className='banner'/>
                </div>
                <PFP />
              </div>
              <div className="profile-team__titles">
                <div className="profile__title">
                  <h3 className='profile__title-h3'>(CBPT) Cyber-Point Team</h3>
                  <img src='/редактировать.png' alt='pfp' className='pfp'/>
                </div>
                <div className="profile__exit-faceit__container">
                  <div className="profile__team">
                    <p>Cyber Point - платформа, созданная для соревновательной игры в CS:GO. Это место,<br />
                    где можно создать свою команду или присоединиться к уже существующей <br />и выигрывать денежные призы в турнирах!</p>
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
      <Footer />
    </>
    
  );
};
export default Team;
