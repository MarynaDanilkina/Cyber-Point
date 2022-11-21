import DropDownNavlink from 'components/DropDownNavlink/dropDownNavlink';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.sass';

const Header = () => {
  const [clickTournaments, setClickTournaments] = useState(false);
  useEffect(() => {
    console.log(clickTournaments);
  }, [clickTournaments]);
  function openTournamentsDiv(){
    if (clickTournaments === false) {
      setClickTournaments(true)
    } else {
      setClickTournaments(false)
    }
  }
  return (
      <div className="header__wrapper">
        <div className="header__left">
          <Link to="/"><img src='/Logotype.png' alt='logo' className='logo'/></Link>
          <nav className='header__nav'>
            <ul className='header__list'>
              <li className='header__item tournaments' onClick={() => openTournamentsDiv()}>Турниры <img src='/Arrow.png' alt='Arrow' className='Arrow'/></li>
              <li className='header__item'><Link to="/InDev">Рейтинг</Link></li>
              <li className='header__item'><Link to="/rules">Регламент</Link></li>
            {clickTournaments === true ? <DropDownNavlink /> : null}
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
  );
};
export default Header;