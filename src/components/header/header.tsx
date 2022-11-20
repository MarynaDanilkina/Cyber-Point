import React from 'react';
import './header.sass';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <img src='/Logotype.png' alt='logo' className='logo'/>
          <nav className='header__nav'>
            <ul className='header__list'>
              <li className='header__item tournaments'>Турниры <img src='/Arrow.png' alt='Arrow' className='Arrow'/></li>
              <li className='header__item'>Рейтинг</li>
              <li className='header__item'>Регламент</li>
              <li className='header__item'>Контакты</li>
            </ul>
          </nav>
        </div>
        <div className="header__right">
          <div className='header__head'>
            <p className='header__player'>Игрок</p>
            <p className='header__input'>Войти</p>
          </div>
          <div className='header__pfp'>
            <img src='/PFP.png' alt='pfp' className='pfp'/>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;