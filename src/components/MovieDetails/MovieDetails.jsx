import Container from 'components/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import bgPoster from '../../Image/IMAX.jpg'
import {
  ButtonGoBack,
  Label,
  MainWrap,
  Poster,
  InfoWrap,
  TitleWrap,
  Title,
  ReleaseDate,
  GenresList,
  GenresItem,
  Description,
  VoteWrap,
  VoteAverage,
  VoteCount,
  Value,
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
    title, genres, description, poster, releaseDate, voteAverage, voteCount,
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
            <Title>{title}</Title>
            <ReleaseDate>{ releaseDate}</ReleaseDate>
          </TitleWrap>
            <GenresList>
            {genres &&
              genres.map(({ name, id }) => (
                <GenresItem key={id}>{name}</GenresItem>
              ))}
          </GenresList>
          <Description>{description }</Description>
          <VoteWrap>
            <VoteAverage>
              Vote average: <Value>{voteAverage}</Value>
            </VoteAverage>
            <VoteCount>
              Vote count: <Value>{voteCount}</Value>
            </VoteCount>
          </VoteWrap>         
        </InfoWrap>
      </MainWrap>
            <AdditionalWrap>
        <AdditionalTitle>Additional Information</AdditionalTitle>
        <NavigationsList>
          <NavigationsItem>
            <CustomLink to="cast" state={{ from: subLocation }}>
              <FaChevronRight /> Cast
            </CustomLink>
          </NavigationsItem>
          <NavigationsItem>
            <CustomLink to="reviews" state={{ from: subLocation }}>
              <FaChevronRight /> Reviews
            </CustomLink>
          </NavigationsItem>
        </NavigationsList>
      </AdditionalWrap>
</Container>
  );
}

MovieDetails.propTypes = {
  movieInfo: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      }),
    ),
    description: propTypes.string,
    poster: propTypes.string,
    releaseDate: propTypes.string,
    voteAverage: propTypes.number,
    voteCount: propTypes.number,
  }),
};

export default MovieDetails;