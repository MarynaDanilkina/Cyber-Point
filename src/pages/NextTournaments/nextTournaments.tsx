import Footer from 'components/footer/footer';
import Header from 'components/header/header';
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
        <div className='tournament-cards__container'>
          <div className='tournament-cards'>
            <div className='tournament-name__container'>
              <div className='tournament-name__card'>
                <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
              </div>
              <div className='tournament-name__card'>
                <Link to="/Tournament"><img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/></Link>
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