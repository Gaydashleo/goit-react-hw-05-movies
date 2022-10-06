import propTypes from 'prop-types';
import Navigation from 'components/Navigation';
import {
  HeaderWrap,
  LogoWrap,
  IconHeader,
  Title,
} from './Header.styled';

 function Header({title}) {
  return (
    <HeaderWrap>
      <LogoWrap>
        <IconHeader />
        <Title>{title }</Title>
      </LogoWrap>
      <Navigation/>
    </HeaderWrap>
  );
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};
export default Header;