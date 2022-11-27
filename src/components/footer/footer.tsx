import ButtomAddTeamWhite from 'components/UIKit/button/ButtomAddTeamWhite';
import LogoFooter from 'components/UIKit/LogoFooter/LogoFooter';
import Logotype from 'components/UIKit/PFP/Icon/Logotype';
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.sass';

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='footer__wrapper _container'>
        <div className='footer__ThroughBlock'>
          <div className='footer__LeftPart-Noise'></div>
          <div className='footer__card'>
            <div className='footer__card-wrapper'>
              <div className='footer__card-text'>
                <h3>
                  выигрывай <span>турниры</span> со своей командой!
                </h3>
                <p>Присоединяйся к миру соревновательных игр высокого уровня на Cyper Point и выигрывай денежные призы!</p>
              
                <div className='footer__button-team'><ButtomAddTeamWhite /></div>
              </div>
              <div className='footer__card-img'>
                <img src='/machine.png' alt='machine' className='machine' />
              </div>
            </div>
          </div>
        </div>
        <div className='footer__FooterContainer '>
          <div className='footer__LeftPart'>
            <div className='footer__LeftPart-logo'>
              <Link to="/"><Logotype/></Link>
            </div>
            <div className='footer__LeftPart-info'>
              <Link to="/privacy">Политика конфиденциальности</Link>
              <p>© 2022 Cyber Point. All rights reserved.</p>
            </div>
          </div>
          <div className='footer__RightPart'>
            <div className='footer__RightPart-email'>
              <p className='RightPart-email__text'>Сотрудничество</p>
              <p className='RightPart-email__p'><a className='RightPart-email' href="mailto:info@cyber-point.ru">info@cyber-point.ru</a></p>
            </div>
            <div className='footer__RightPart-info'>
              <LogoFooter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;