import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import { Auction } from 'pages/Auction/Auction';
import { Classes } from 'pages/Game/Classes/CLasses';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { Home } from 'pages/Home/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='auction' element={<Auction />} />
        <Route path='classes' element={<Classes />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
