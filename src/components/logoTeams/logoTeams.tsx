import { useAppSelector } from 'interface/interface';
import React from 'react';
import './logoTeams.sass';

const LogoTeams = () => {
  const { LogoTeams } = useAppSelector((state) => state);
  
  return (
    <img src={LogoTeams} alt='pfp' className='logoTeams' />
  );
};
export default LogoTeams;