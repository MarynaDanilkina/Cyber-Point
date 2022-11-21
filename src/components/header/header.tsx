import DropDownNavlink from 'components/DropDownNavlink/dropDownNavlink';
import { useAppDispatch, useAppSelector } from 'interface/interface';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { reduserSlice } from 'reduxStore/Reducer';
import './header.sass';

const Header = () => {
  const [clickTournaments, setClickTournaments] = useState(false);
  const { user } = useAppSelector((state) => state);
  const { login } = reduserSlice.actions;
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    console.log(user);
  }, [user]);
  
  function openTournamentsDiv(){
    if (clickTournaments === false) {
      setClickTournaments(true)
    } else {
      setClickTournaments(false)
    }
  }

  function Войти() {
    dispatch(login());
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
        { !user? (
        <div className='header__head'>
          <p className='header__player'>Игрок</p>
          <p className='header__input' onClick={() => Войти()}>Войти</p>
        </div>
        ) : (
            <>
              <div className='header__head'>
                <p className='header__player'>Команда</p>
                <p className='header__input'>Отсутствует</p>
              </div>
              <div className='Divider'></div>
              <div className='header__head'>
                <p className='header__player'>Игрок</p>
                <p className='header__input'>ItsGeorge</p>
              </div>
            </>
        
            
        )}
          <div className='header__pfp'>
            <img src='/PFP.png' alt='pfp' className='pfp'/>
          </div>
        </div>
      </div>
  );
};
export default Header;