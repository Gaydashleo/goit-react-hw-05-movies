import styled from '@emotion/styled';
import { FaFilm } from 'react-icons/fa';


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