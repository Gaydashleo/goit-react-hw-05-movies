import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


 
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