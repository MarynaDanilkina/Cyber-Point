import React from 'react';
import './main.sass';

const Main = () => {
  return (
    <main className="main__wrapper">
      <div className='main__1stBlock'>
        <p className='main__Headline2'>Учавствуй в <span className='main__Headline1'>турнирах по CS:GO</span> вместе с командой и выигрывай призы!</p>
        <img src='/Button.png' alt='Button' className='main__Button'/>
      </div>
      <div className='main__2stBlock'>
        <p className='main__TestBody1'><span className='main__Headline1'>Cyber Point </span>- платформа, созданная для соревновательной игры в CS:GO. Это место, где можно создать свою команду или присоединиться к уже существующей и выигрывать <span className='main__Headline1'>денежные призы</span> в турнирах!</p>
      </div>
      <div className='main__3dBlock'>
        <div className='main__3dBlock__container'>
          <div className=' main__3dBlock-tournaments upcoming__tournaments'>
            <div className='Block-tournaments__text'>
              <h2>ПРЕДСТОЯЩИЕ ТУРНИРЫ</h2>
              <img src='/LinkButton.png' alt='LinkButton' className='LinkButton'/>
            </div>
            <div className='Block-tournaments__cards'>
              <div className='Block-tournaments__card'>
                <img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/>
              </div>
              <div className='Block-tournaments__card'>
                <img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/>
              </div>
              <div className='Block-tournaments__card'>
                <img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/>
              </div>
            </div>
          </div>
          <div className='main__3dBlock-tournaments past__tournaments'>
            <div className='Block-tournaments__text'>
              <h2>ПРОШЕДШИЕ ТУРНИРЫ</h2>
              <img src='/LinkButton.png' alt='LinkButton' className='LinkButton'/>
            </div>
            <div className='Block-tournaments__cards'>
              <div className='Block-tournaments__card'>
                <img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/>
              </div>
              <div className='Block-tournaments__card'>
                <img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/>
              </div>
              <div className='Block-tournaments__card'>
                <img src='/EmptyCard.png' alt='EmptyCard' className='EmptyCard'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;