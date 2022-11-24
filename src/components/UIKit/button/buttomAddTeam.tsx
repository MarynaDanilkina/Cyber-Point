import React from 'react';
import './buttomAddTeam.sass';

const ButtomAddTeam = ({title= 'Создать команду', disabled= false}) => {
  return (
    <>
      <button className='button' disabled={disabled}>
        <p className='button__p'>{title}</p>
      </button>
    </>
  );
};
export default ButtomAddTeam;