import React from 'react';
import './footer.sass';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__ThroughBlock'>
          <div className='footer__LeftPart-Noise'></div>
          <div className='footer__card'>
            <div className='footer__card-wrapper'>
              <div className='footer__card-text'>
                <h3>
                  выигрывай турниры со своей командой!
                </h3>
                <p>Присоединяйся к миру соревновательных игр высокого уровня на Cyper Point и выигрывай денежные призы!</p>
              
                <div><img src='/Secondary Button.png' alt='Secondary Button' className='SecondaryButton' /></div>
              </div>
              <div className='footer__card-img'>
                <img src='/Image.png' alt='card' className='card-Image' />
              </div>
            </div>
          </div>
        </div>
        <div className='footer__FooterContainer'>
          <div className='footer__LeftPart'>
            <div className='footer__LeftPart-logo'>
              <img src='/Logotype1.png' alt='Logotype1' className='Logotype1' />
            </div>
            <div className='footer__LeftPart-info'>
              <p>Политика конфиденциальности</p>
              <p>© 2022 Cyber Point. All rights reserved.</p>
            </div>
          </div>
          <div className='footer__RightPart'>
            <div className='footer__RightPart-email'>
              <p className='RightPart-email__text'>Сотрудничество</p>
              <p className='RightPart-email__p'><a className='RightPart-email' href="mailto:info@cyber-point.ru">info@cyber-point.ru</a></p>
            </div>
            <div className='footer__RightPart-info'>
              <img src='/Socials.png' alt='Socials' className='Socials' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;