import DropDownNavlink from 'components/DropDownNavlink/dropDownNavlink';
import ModalDiscord from 'components/modalDiscord/modalDiscord';
import Arrow from 'components/UIKit/PFP/Icon/arrow';
import ArrowTop from 'components/UIKit/PFP/Icon/arrowTop';
import Logotype from 'components/UIKit/PFP/Icon/Logotype';
import User from 'components/UIKit/PFP/Icon/user';
import { useAppDispatch, useAppSelector } from 'interface/interface';
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { reduserSlice } from 'reduxStore/Reducer';
import './header.sass';

const Header = () => {
  const [clickTournaments, setClickTournaments] = useState(false);
  const [menu, setMenu] = useState(false);
  const { user, modalDiscord } = useAppSelector((state) => state);
  const { openModalDiscord } = reduserSlice.actions;
  const dispatch = useAppDispatch();
  
  function openTournamentsDiv(){
    if (clickTournaments === false) {
      setClickTournaments(true)
    } else {
      setClickTournaments(false)
    }
  }

  function Войти() {
    dispatch(openModalDiscord())
  }
  function Menu() {
    if (menu === false) {
        setMenu(true)
      } else {
        setMenu(false)
      }
    }
  return (
    <>
      <div className="header__wrapper">
        <div className="header__left">
          <Link to="/"><Logotype/></Link>
          <nav className='header__nav' >
            <ul className='header__list'>
              <li className='header__item tournaments' onClick={() => openTournamentsDiv()}>Турниры { clickTournaments? <ArrowTop/> : <Arrow/>}</li>
              <li className='header__item'><Link to="/InDev">Рейтинг</Link></li>
              <li className='header__item'><Link to="/rules">Регламент</Link></li>
            {clickTournaments === true ? <DropDownNavlink /> : null}
              <li className='header__item'>Контакты</li>
            </ul>
          </nav>
        </div>
        <div className={menu ? "header__menu-icon _active" : "header__menu-icon"} onClick={() => Menu()}>
          <span></span>
        </div>
        <div className={menu ? "nemu__modal _active" : "nemu__modal"}>
          <div className="nemu__modal-nav__container">
            <nav className='nemu__modal-nav' >
              <ul className='nemu__modal-header__list'>
              <li className='nemu__modal-header__item main'><Link to="/" className='active'>Главная</Link></li>
              <p className='nemu__modal-header__item tournament' onClick={() => openTournamentsDiv()}>Турниры</p>
              <li className='nemu__modal-header__item tournaments'><Link to="/NextTournaments">Предстоящие</Link></li>
              <li className='nemu__modal-header__item tournaments'><Link to="/PreviousTournaments">Прошедшие</Link></li>
              <li className='nemu__modal-header__item tournament'><Link to="/InDev">Рейтинг</Link></li>
              <li className='nemu__modal-header__item tournament'>Контакты</li>
              </ul>
              <div className="nemu__modal-nav-info">
                <Link to="/profile"><User /></Link>
                <div className='header__head'>
                  <p className='header__player'>Команда</p>
                  <p className='header__input'><Link to="/team">Отсутствует</Link></p>
                </div>
              </div>
          </nav>
          </div>
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
                  <p className='header__input'><Link to="/team">Отсутствует</Link></p>
              </div>
              <div className='Divider'></div>
              <div className='header__head'>
                <p className='header__player'>Игрок</p>
                <p className='header__input'><Link to="/profile">ItsGeorge</Link></p>
              </div>
            </>
        )}
          <div className='header__pfp'>
            <User />
          </div>
        </div>
      </div>
      {modalDiscord ? <ModalDiscord /> : null}
    </>
  );
};
export default Header;