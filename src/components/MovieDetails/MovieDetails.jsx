import Container from 'components/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import bgPoster from '../../utils/Image/IMAX.jpg';

import {
  ButtonGoBack,
  Label,
  MainWrap,
  Poster,
  InfoWrap,
  TitleWrap,
  Title,
  // ReleaseDate,
  TitleDescription,
  TitleGenres,
  GenresList,
  GenresItem,
  Description,
  AdditionalWrap,
  AdditionalTitle,
  NavigationsList,
  NavigationsItem,
  CustomLink,
  } from "./MovieDetails.styled";
  import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'; 
  

function MovieDetails({ movieInfo }) {
  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location.state.from;

  const {
    title, genres, description, poster, releaseDate, 
  } = movieInfo;
  



  const onGoBack = () => navigate(location?.state?.from ?? '/');
  return (
    <Container>
      <ButtonGoBack type="button" onClick={onGoBack}>
        <FaChevronLeft />
        <Label>Go back</Label>
      </ButtonGoBack>

      <MainWrap>
        <Poster src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : bgPoster}
          alt={title} />
        <InfoWrap>
          <TitleWrap>
            <Title>{title} ({ releaseDate}) </Title>
            {/* <ReleaseDate></ReleaseDate> */}
          </TitleWrap>
          <TitleDescription>Overview</TitleDescription>
          <Description>{description}</Description>
          <TitleGenres> Genres</TitleGenres>
          <GenresList> 
              {genres &&
              genres.map(({ name, id }) => (
                <GenresItem key={id}>{name}</GenresItem>
              ))}
          </GenresList>
        </InfoWrap>
      </MainWrap>
            <AdditionalWrap>
        <AdditionalTitle>Additional Information</AdditionalTitle>
        <NavigationsList>
          <NavigationsItem>
            <CustomLink to="cast" end state={{ from: subLocation }}>
              <FaChevronRight /> Cast
            </CustomLink>
          </NavigationsItem>
          <NavigationsItem>
            <CustomLink to="reviews" end state={{ from: subLocation }}>
              <FaChevronRight /> Reviews
            </CustomLink>
          </NavigationsItem>
        </NavigationsList>
      </AdditionalWrap>
</Container>
  );
}
// title, genres, description, poster, releaseDate, 
MovieDetails.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;