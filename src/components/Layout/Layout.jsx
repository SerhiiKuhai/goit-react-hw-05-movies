import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  HeaderNav,
  HeaderNavLink,
} from 'components/Layout/Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <HeaderNav>
          <HeaderNavLink to="/">Home</HeaderNavLink>
          <HeaderNavLink to="/movies">Movies</HeaderNavLink>
        </HeaderNav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
