import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer';
import { useGetAccessTokenQuery } from 'api/AuthApi';
import { useEffect, useState } from 'react';
import LoadingScreen from 'components/LoadingScreen';

export const Layout = () => {
  const { data: token, isLoading, isError } = useGetAccessTokenQuery();
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    token && window.sessionStorage.setItem('token', token);
    setTimeout(() => setLoading(false), 2500);
  }, [isLoading]);

  return loading ? (
    <LoadingScreen />
  ) : isError ? (
    <div>Error</div>
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
