
import Edit from 'components/UIKit/edit/edit';
import React from 'react';
import './BannerTeams.sass';

const BannerTeams = () => {
  
  return (
    <div className="BannerTeams__container">
      <img src='Banner.png' alt='pfp' className='BannerTeams' />
      <div className="BannerTeams__edit">
        <p>Баннер</p>
        <Edit />
      </div>
    </div>
  );
};
export default BannerTeams;