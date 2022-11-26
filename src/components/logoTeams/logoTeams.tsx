import Edit from 'components/UIKit/edit/edit';
import React from 'react';
import './logoTeams.sass';

const LogoTeams = () => {
  
  return (
    <div className="LogoTeams__container">
      <img src='LogoProfile.png' alt='pfp' className='logoTeams' />
      <div className="BannerTeams__edit">
        <Edit />
        <p>Логотип</p>
      </div>
    </div>
    
  );
};
export default LogoTeams;