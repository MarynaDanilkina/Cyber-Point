import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import CardUpcomingTournaments from 'components/UIKit/CardUpcomingTournaments/CardUpcomingTournaments';
import React from 'react';
import { Link } from 'react-router-dom';
import './nextTournaments.sass';

const NextTournaments = () => {
  return (
    <>
      <header className="header _container">
        <Header />
        <div className='header__title'>
          <h2>Предстоящие турниры</h2>
        </div>
      </header>
      <main className="main__wrapper">
        <div className='tournament-cards__container _container'>
          <div className='tournament-cards'>
            <div className='tournament-name__container'>
              <div className="tournament__hidden">
                <div className='tournament-name__card'>
                  <Link to="/Tournament"><CardUpcomingTournaments  date={'20.11.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
                </div>
                <div className='tournament-name__card'>
                  <Link to="/Tournament"><CardUpcomingTournaments  date={'20.11.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
                </div>
                <div className='tournament-name__card'>
                  <Link to="/Tournament"><CardUpcomingTournaments  date={'20.11.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
                </div>
                <div className='tournament-name__card'>
                  <Link to="/Tournament"><CardUpcomingTournaments  date={'20.11.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
                </div>
                <div className='tournament-name__card'>
                  <Link to="/Tournament"><CardUpcomingTournaments  date={'20.11.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
                </div>
                <div className='tournament-name__card'>
                  <Link to="/Tournament"><CardUpcomingTournaments  date={'20.11.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
                </div>
                <div className='tournament-name__card'>
                  <Link to="/Tournament"><CardUpcomingTournaments  date={'20.11.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
                </div>
                <div className='tournament-name__card'>
                  <Link to="/Tournament"><CardUpcomingTournaments  date={'20.11.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
                </div>
                <div className='tournament-name__card'>
                  <Link to="/Tournament"><CardUpcomingTournaments  date={'20.11.2022'} title={'Название турнира'} price={'$ 330'} /></Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default NextTournaments;