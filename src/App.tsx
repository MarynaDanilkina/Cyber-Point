import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import Main from 'pages/Main/main';
import Privacy from 'pages/Privacy/privacy';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/privacy' element={<Privacy />} />
      </Routes>

      <Footer />
    </>
    
  );
}

export default App;
