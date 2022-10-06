import propTypes from 'prop-types';
import Container from 'components/Container';

import {
  HeaderWrap,
  LogoWrap,
  IconHeader,
  Title,
  NavList,
  Item,
  Link
} from './Header.styled';

function Header({title}) {
  return (
    <HeaderWrap>
      <Container>
        <LogoWrap>
        <IconHeader />
        <Title>{title }</Title>
      </LogoWrap>
      <NavList>
    <Item>
      <Link to="/">Home</Link>
    </Item>
        <Item>
      <Link to="/movies">Movies</Link>
    </Item>
  </NavList>
      </Container>
      
    </HeaderWrap>
  );
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};
export default Header;