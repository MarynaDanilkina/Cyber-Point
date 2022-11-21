import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import InDev from 'pages/InDev/inDev';
import Main from 'pages/Main/main';
import NextTournaments from 'pages/NextTournaments/nextTournaments';
import PreviousTournaments from 'pages/PreviousTournaments/previousTournaments';
import Privacy from 'pages/Privacy/privacy';
import Rules from 'pages/Rules/rules';
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
      </Routes>
    </>
    
  );
}
export default App;
