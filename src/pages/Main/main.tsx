import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import ModalNewTeam from 'components/ModalNewTeam/modalNewTeam';
import { useAppDispatch, useAppSelector } from 'interface/interface';
import React from 'react';
import { Link } from 'react-router-dom';
import { reduserSlice } from 'reduxStore/Reducer';
import './main.sass';

const Main = () => {
  const { modalTeamNew } = useAppSelector((state) => state);
  const { openModalNewTeam } = reduserSlice.actions;
  const dispatch = useAppDispatch();
  function СоздатьКоманду() {
    dispatch(openModalNewTeam())
  }
  return (
    <>
      <header className="header _container">
        <Header/>
      </header>
      <main className="main__wrapper">
        <div className="main__container _container">
          <div className='main__video-container'>
            <p className='main__video-container__text'>Учавствуй в <span className='main__Headline1'>турнирах по CS:GO</span> вместе с командой и выигрывай призы!</p>
            <img src='/Button.png' alt='Button' className='main__Button' onClick={() => СоздатьКоманду()}/>
          </div>
          <div className='main__info-container'>
            <p className='main__info-container-text'><span className='main__Headline1'>Cyber Point </span>- платформа, созданная для соревновательной игры в CS:GO. Это место, где можно создать свою команду или присоединиться к уже существующей и выигрывать <span className='main__Headline1'>денежные призы</span> в турнирах!</p>
          </div>
          <div className='main__3dBlock'>
            <div className='main__3dBlock__container'>
              <div className=' main__3dBlock-tournaments upcoming__tournaments'>
                <div className='Block-tournaments__text'>
                  <h2>ПРЕДСТОЯЩИЕ ТУРНИРЫ</h2>
                  <Link to="/Tournament"><img src='/LinkButton.png' alt='LinkButton' className='LinkButton'/></Link>
                </div>
                <div className='Block-tournaments__cards'>
                  <div className='Block-tournaments__card'>
                    <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
                  </div>
                  <div className='Block-tournaments__card'>
                    <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
                  </div>
                  <div className='Block-tournaments__card'>
                    <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
                  </div>
                </div>
              </div>
              <div className='main__3dBlock-tournaments past__tournaments'>
                <div className='Block-tournaments__text'>
                  <h2>ПРОШЕДШИЕ ТУРНИРЫ</h2>
                  <Link to="/PreviousTournaments"><img src='/LinkButton.png' alt='LinkButton' className='LinkButton'/></Link>
                </div>
                <div className='Block-tournaments__cards bottom'>
                  <div className='Block-tournaments__card'>
                    <Link to="/EndedTournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
                  </div>
                  <div className='Block-tournaments__card'>
                    <Link to="/EndedTournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
                  </div>
                  <div className='Block-tournaments__card'>
                    <Link to="/EndedTournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      { modalTeamNew ? <ModalNewTeam /> : null }
    </>
    
  );
};
export default Main;