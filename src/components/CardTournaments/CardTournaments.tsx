import React from 'react';
import './CardTournaments.sass';
export interface ICardTournaments {
  team1?: string;
  team2?: string;
  victory?: string;
}
const CardTournaments = ({team1 = 'пусто', team2 = 'пусто', victory = ''}: ICardTournaments) => {
  return (
    <>
      <div className={(team2 || team1) === 'пусто' ? 'Card-Tournaments__container empty' : 'Card-Tournaments__container'}>
        <div className={victory === 'team1' ? 'Card-Tournaments victory' : 'Card-Tournaments'}>
          <p className='Card-Tournaments-team'>{team1}</p>
        </div>
        <div className="Card-Tournaments-VS">
          <p className='Card-Tournaments-VS'>VS</p>
        </div>
        <div className={victory === 'team1' ? 'Card-Tournaments defeat' : 'Card-Tournaments'}>
          <p className='Card-Tournaments-team'>{team2}</p>
        </div>
      </div>
      
    </>
  );
};
export default CardTournaments;