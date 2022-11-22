
import { useAppSelector } from 'interface/interface';
import React from 'react';
import './BannerTeams.sass';

const BannerTeams = () => {
  const { BanerTeams } = useAppSelector((state) => state);
  
  return (
    <img src={BanerTeams} alt='pfp' className='BannerTeams' />
  );
};
export default BannerTeams;