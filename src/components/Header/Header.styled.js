import styled from '@emotion/styled';
import { FaFilm } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  min-height: 80px;
  padding: 0 40px;
  background-color: #34495e;
  box-shadow: var(--boxShadow);
`;
export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const IconHeader = styled(FaFilm)`
width: 40px;
  height: 40px;
  margin-right: 15px;
  color:#fafafa;
`;

export const Title = styled.h1`
font-size:30px;
`;
export const NavList = styled.ul`
display: flex;
`;

export const Item = styled.li`
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;

export const Link = styled(NavLink)`
font-size: 15px;
  font-weight: 700;
  color:#161616;
  transition: color 250ms linear;

  &.active {
  text-decoration: underline;
  }
  :hover{
    color:#fafafa;
  }
  `;