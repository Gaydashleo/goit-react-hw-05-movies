import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Item,
  Title,
  Poster,
  VoteWrap,
  VoteAverage,
  VoteCount,
  Value,
} from './MovieCard.styled';
import bgPoster from '../../utils/Image/IMAX.jpg'

function MovieCard({ id,title,poster,voteAverage,voteCount })
{
    const location = useLocation();
    return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
          <Title>{title ? title : 'Movie without a title'}</Title>
          
        <Poster
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : bgPoster}
          alt={title}
        />
        <VoteWrap>
          <VoteAverage>
            Vote average: <Value>{voteAverage}</Value>
          </VoteAverage>
          <VoteCount>
            Vote count:<Value>{voteCount}</Value>
          </VoteCount>
        </VoteWrap>
      </Link>
    </Item>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  poster: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
};
export default MovieCard;