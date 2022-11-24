import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import ModalNewTeam from 'components/ModalNewTeam/modalNewTeam';
import ModalSuccess from 'components/ModalSuccess/ModalSuccess';
import ButtomAddTeam from 'components/UIKit/button/buttomAddTeam';
import CardPreviousTournament from 'components/UIKit/CardPreviousTournament/CardPreviousTournament';
import CardUpcomingTournaments from 'components/UIKit/CardUpcomingTournaments/CardUpcomingTournaments';
import SeeAll from 'components/UIKit/SeeAll/SeeAll';
import { useAppDispatch, useAppSelector } from 'interface/interface';
import React from 'react';
import { Link } from 'react-router-dom';
import { reduserSlice } from 'reduxStore/Reducer';
import './main.sass';

const Main = () => {
  const { modalTeamNew, modalSuccess } = useAppSelector((state) => state);
  const { openModalNewTeam } = reduserSlice.actions;
  const dispatch = useAppDispatch();
  function СоздатьКоманду() {
    dispatch(openModalNewTeam())
  }
  return (
    <>
      <header className="header _container">
        <Header/>
      </header>
      <main className="main__wrapper">
        <div className="main__container _container">
          <div className='main__video-container'>
            <p className='main__video-container__text'>Учавствуй в <span className='main__Headline1'>турнирах по CS:GO</span> вместе с командой и выигрывай призы!</p>
            <div className="main__button" onClick={() => СоздатьКоманду()}>
              <ButtomAddTeam />
            </div>
          </div>
          <div className='main__info-container'>
            <p className='main__info-container-text'><span className='main__Headline1'>Cyber Point </span>- платформа, созданная для соревновательной игры в CS:GO. Это место, где можно создать свою команду или присоединиться к уже существующей и выигрывать <span className='main__Headline1'>денежные призы</span> в турнирах!</p>
          </div>
          <div className='main__3dBlock'>
            <div className='main__3dBlock__container'>
              <div className=' main__3dBlock-tournaments upcoming__tournaments'>
                <div className='Block-tournaments__text'>
                  <h2>ПРЕДСТОЯЩИЕ ТУРНИРЫ</h2>
                  <Link to="/NextTournaments"><SeeAll title={'Смотреть все (1)'}/></Link>
                </div>
                <div className="container__clider">
                  <div className='Block-tournaments__cards'>
                    <div className='Block-tournaments__card'>
                      <Link to="/Tournament"><CardUpcomingTournaments date={'16.12.2022'} title={'Beast Mode #1'} price={'$ 330'} /></Link>
                    </div>
                    <div className='Block-tournaments__card'>
                      <Link to="/Tournament"><CardUpcomingTournaments/></Link>
                    </div>
                    <div className='Block-tournaments__card'>
                      <Link to="/Tournament"><CardUpcomingTournaments/></Link>
                    </div>
                    <div className='Block-tournaments__card'>
                      <Link to="/Tournament"><CardUpcomingTournaments/></Link>
                    </div>
                  </div>
                </div>  
                </div>
                
              <div className='main__3dBlock-tournaments past__tournaments'>
                <div className='Block-tournaments__text'>
                  <h2>ПРОШЕДШИЕ ТУРНИРЫ</h2>
                  <Link to="/PreviousTournaments"><SeeAll title={'Смотреть все (9)'} /></Link>
                </div>
                <div className="container__clider">
                  <div className='Block-tournaments__cards bottom _container'>
                    <div className='Block-tournaments__card'>
                      <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'CP Cup #3 - *победитель тут*'} price={'$ 745'} /></Link>
                    </div>
                    <div className='Block-tournaments__card'>
                      <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'CP Cup #2 - *если не помещается в одну строчку*'} price={'$ 399'} /></Link>
                    </div>
                    <div className='Block-tournaments__card'>
                      <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'CP Cup #1 - *победитель тут*'} price={'$ 150'} /></Link>
                    </div>
                    <div className='Block-tournaments__card'>
                      <Link to="/EndedTournament"><CardPreviousTournament date={'20.12.2022'} title={'CP Cup #1 - *победитель тут*'} price={'$ 150'} /></Link>
                    </div>
                  </div>  
                </div>
      
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {modalTeamNew ? <ModalNewTeam /> : null}
      {modalSuccess? <ModalSuccess /> : null}
    </>
    
  );
};
export default Main;