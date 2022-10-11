import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const ButtonGoBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

    width: 200px;
  height: 40px;
  // margin-bottom: 30px;
  font-size: 15px;
  background-image:linear-gradient(to right, #0B0A0A, #FFFFFF);
  color:#F6ECEC;
  border: none;
  cursor: pointer;
`;

export const Label = styled.span`
margin-left: 10px;
`;

export const MainWrap = styled.div`
display: flex;
margin-bottom: 50px;
`;

export const Poster = styled.img`
width: 400px;
`;
export const InfoWrap = styled.div`
margin-left: 50px;
`;

export const TitleWrap = styled.div`
margin-bottom: 20px;
display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h2`
font-size: 30px;
margin-bottom: 10px;
`;

export const ReleaseDate = styled.p`
  font-weight: 700;
  font-size: 15px;
`;

export const GenresList = styled.ul`
padding-left:0px;
display: flex;

`;
export const TitleGenres = styled.p`
font-size: 18px;
font-weight: 700;
`;


export const GenresItem = styled.li`
    font-size: 15px;
  margin-right: 15px;
  list-style-type:none;

  :last-child {
    margin-right: 0;
  }
`;
export const TitleDescription = styled.p`
font-size: 18px;
font-weight: 700;
`;
export const Description = styled.p`

`;

export const VoteWrap = styled.div`

`;

export const VoteAverage = styled.p`

`;
export const VoteCount = styled.p`

`;

export const Value = styled.span`

`;

export const AdditionalWrap = styled.div`

`;
export const AdditionalTitle = styled.p`

`;

export const NavigationsList = styled.ul`

`;

export const NavigationsItem = styled.li`

`;

export const CustomLink = styled(NavLink)`
font-size: 18px;
&.active{
  color:
}
`;