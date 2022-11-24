import Card from 'components/Card/card';
import CardTournaments from 'components/CardTournaments/CardTournaments';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import ButtomAddTeam from 'components/UIKit/button/buttomAddTeam';
import React from 'react';
import './EndedTournament.sass';

const EndedTournament = () => {
  return (
    <>
      <header className="header _container">
        <Header />
        <div className="tournament__container-info">
          <div className="tournament__info">
            <h2 className="tournament__title-info">CP Cup #3</h2>
            <div className='tournament__Cards-container'>
              <Card title={'Приз:'} info={'$ 745'} />
              <Card title={'Дата:'} info={'20.11.2022'} />
              <Card title={'Команды:'} info={'32/32'} />
              <Card title={'Вступительные:'} info={'$ 15'} />
            </div>
            <div className="tournament__button-info">
              <ButtomAddTeam title={'Турнир окончен'} disabled={true} />
            </div>
          </div>
          <i className='icon-ArrowBottom'/>
        </div>
      </header>
      <main>
        <div className='main__tournament'>
          <div className="main__tournament__container">
            <div className="clider">
              <div className="main__tournament-list">
                <div className="tournament-list">
                  <a>
                    <p>Отборочный Тур</p>
                  </a>
                </div>
                <div className="tournament-list">
                  <a>
                    <p>1/3 Финала</p>
                  </a>
                </div>
                <div className="tournament-list">
                  <a>
                    <p>Полу-финал</p>
                  </a>
                </div>
                <div className="tournament-list active">
                  <a>
                    <p>Финал</p>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="main__ended-tournaments">
              <div className="ended__tournament__container">
                <div className="ended__tournament victory">
                  <p>Победители</p>
                  <h2>Команда 1</h2>
                </div>
                <div className="ended__tournament-VS">
                  <p>vs</p>
                </div>
                <div className="ended__tournament defeat">
                  <p>Проигравшие</p>
                  <h2>Команда 2</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
    
  );
};
export default EndedTournament;
