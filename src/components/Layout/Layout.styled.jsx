import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: sticky;
  padding: 0 20px;
  z-index: 10;
  top: 0;
  left: 0;
  margin: 0 auto;
  background-color: rgb(235, 235, 235);
  box-shadow: 6px 6px 4px 2px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgb(200, 200, 200);
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 12px;
`;

export const HeaderNavLink = styled(NavLink)`
  color: #010101;
  font-size: 16px;
  line-height: 1.19;
  padding: 16px 0;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
