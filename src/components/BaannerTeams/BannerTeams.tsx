
import Edit from 'components/UIKit/edit/edit';
import React from 'react';
import './BannerTeams.sass';

const BannerTeams = () => {
  
  return (
    <div className="BannerTeams__container">
      <img src='BannerTeam.png' alt='pfp' className='BannerTeams' />
      <div className="BannerTeams__edit">
        <Edit />
        <p>Баннер</p>
      </div>
    </div>
  );
};
export default BannerTeams;