import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import CardPreviousTournament from 'components/UIKit/CardPreviousTournament/CardPreviousTournament';
import React from 'react';
import { Link } from 'react-router-dom';
import './previousTournaments.sass';

const PreviousTournaments = () => {
  return (
    <>
      <header className="header _container">
        <Header />
        <div className='header__title'>
          <h2>Прошедшие турниры</h2>
        </div>
      </header>
      <main className="main__wrapper">
        <div className='tournament-cards__container _container'>
          <div className='tournament-cards'>
            <div className='tournament-name__container'>
              <div className='tournament-name__card'>
                <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default PreviousTournaments;