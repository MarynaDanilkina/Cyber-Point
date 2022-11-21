import Header from 'components/header/header';
import React from 'react';
import { Link } from 'react-router-dom';
import './inDev.sass';

const InDev = () => {
  return (
    <>
      <header className="header header__inDev _container">
        <div className='header-inDev__container'>
          <Header />
          <div className='header-inDev__info-container'>
            <div className="header-inDev__info">
              <div className="header-inDev__info-text">
                <h3>Страница в разработке</h3>
              </div>
              <div className="header-inDev__info-button">
                <Link to="/"><img src='/НаГлавную.png' alt='pfp' className='НаГлавную'/></Link>
              </div>
            </div>
          </div>
          <div className="header-inDev__footer">
            <div className="header-inDev__footer-left">
              <p>© 2022 Cyber Point. All rights reserved.</p>
            </div>
            <div className="header-inDev__footer-right">
              <Link to="/privacy">Политика конфиденциальности</Link>
            </div>
          </div>
        </div>
      </header>
    </>
    
  );
};
export default InDev;