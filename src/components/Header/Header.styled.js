import styled from '@emotion/styled';
import { FaFilm } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


export const HeaderWrap = styled.header`
  background-image:linear-gradient(to right, #0B0A0A, #FFFFFF);
  padding: 50px 0 50px 0;
  
`;
export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const IconHeader = styled(FaFilm)`
width: 40px;
  height: 40px;
  padding-left:45px;
  margin-right: 25px;
  color:#999999;
  
`;

export const Title = styled.h1`
color:#F6ECEC;
font-size:30px;

`;
export const NavList = styled.ul`
display: flex;
`;

export const Item = styled.li`
  list-style-type: none;

  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;

export const CustomLink = styled(NavLink)`
text-decoration:none;
font-size: 15px;
  font-weight: 700;
  color:#837D7D;
  transition: color 250ms linear;

  &.active {
  text-decoration: underline;
  }
  :hover{
    color:#fafafa;
  }
  `;