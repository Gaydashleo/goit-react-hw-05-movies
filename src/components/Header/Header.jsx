
import propTypes from 'prop-types';
// import Container from 'components/Container';

import {
  HeaderWrap,
  LogoWrap,
  IconHeader,
  Title,
  NavList,
  Item,
  CustomLink,
} from './Header.styled';

function Header({title}) {
  return (
    <HeaderWrap>
    <LogoWrap>
        <IconHeader />
        <Title>{title }</Title>
      </LogoWrap>
      <NavList>
    <Item>
      <CustomLink to="/"end>Home</CustomLink>
    </Item>
        <Item>
      <CustomLink to="/movies"end>Movies</CustomLink>
    </Item>
  </NavList> 
  </HeaderWrap>
  );
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};
export default Header;