import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiToken } from 'store/commonThunk/apiThunk';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Auction } from 'pages/Auction/Auction';
import { Classes } from 'pages/Game/Classes/CLasses';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { Home } from 'pages/Home/Home';

const App = () => {
  const dispatch = useDispatch();
  const { apiToken } = useSelector((state) => state.tokenReducer);

  useEffect(() => {
    dispatch(getApiToken());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auction" element={<Auction />} />
          <Route path="classes" element={<Classes />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
