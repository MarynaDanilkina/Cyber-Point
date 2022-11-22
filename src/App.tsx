import EndedTournament from 'pages/EndedTournament/EndedTournament';
import InDev from 'pages/InDev/inDev';
import Main from 'pages/Main/main';
import NextTournaments from 'pages/NextTournaments/nextTournaments';
import PreviousTournaments from 'pages/PreviousTournaments/previousTournaments';
import Privacy from 'pages/Privacy/privacy';
import Profile from 'pages/Profile/Profile';
import Rules from 'pages/Rules/rules';
import Team from 'pages/Team/Team';
import Tournament from 'pages/Tournament/Tournament';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/InDev' element={<InDev />} />
        <Route path='/NextTournaments' element={<NextTournaments />} />
        <Route path='/PreviousTournaments' element={<PreviousTournaments />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/team' element={<Team />} />
        <Route path='/Tournament' element={<Tournament />} />
        <Route path='/EndedTournament' element={<EndedTournament />} />
      </Routes>
    </>
    
  );
}
export default App;
