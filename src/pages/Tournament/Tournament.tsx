import Card from 'components/Card/card';
import CardTournaments from 'components/CardTournaments/CardTournaments';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import React from 'react';
import './Tournament.sass';

const Tournament = () => {
  return (
    <>
      <header className="header _container">
        <Header />
        <div className="tournament__container-info">
          <div className="tournament__info">
            <h2 className="tournament__title-info">Beast Mode #1</h2>
            <div className='tournament__Cards-container'>
              <Card title={'Приз:'} info={'$ 330'} />
              <Card title={'Дата:'} info={'16.12.2022'} />
              <Card title={'Команды:'} info={'20/32'} />
              <Card title={'Вступительные:'} info={'$ 3'} />
            </div>
            <div className="tournament__button-info">
              <img src='/записать команду.png' alt='pfp' className='pfp'/>
            </div>
          </div>
          <img src='/свернуть.png' alt='pfp' className='pfp'/>
        </div>
      </header>
      <main>
        <div className='main__tournament'>
          <div className="main__tournament__container">
            <div className="main__tournament-list">
              <div className="tournament-list active">
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
              <div className="tournament-list">
                <a>
                  <p>Финал</p>
                </a>
              </div>
            </div>
            <div className="main__tournaments">
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments team1={'ЕслиНазваниеКомандыДлинное'} team2={'Название Команды'} />
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments team1={'Команда Победителей'} team2={'Команда Проигравших'} victory={'team1'}/>
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments />
              <CardTournaments team1={'Название Команды'} team2={'Название Команды'} />
              <CardTournaments/>
            </div>
          </div>
          <div className="main__tournament-pagination">
            <img src='/Pagination.png' alt='pfp' className='pfp'/>
          </div>
        </div>
      </main>
      <Footer />
    </>
    
  );
};
export default Tournament;
