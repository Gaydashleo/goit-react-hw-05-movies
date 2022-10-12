import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard';
import { Wrap } from './MoviesList.styled';

function MoviesList({ movies }) {
  return (
    <Wrap>
      {movies.map(({ id, title, poster, voteAverage, voteCount }) => {

        return (
          <MovieCard
            key={id}
            id={id}
            title={title}
            poster={poster}
            voteAverage={voteAverage}
            voteCount={voteCount} />
        );
      })}
    </Wrap>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster: PropTypes.string.isRequired,
      voteAverage: PropTypes.number.isRequired,
      voteCount: PropTypes.number.isRequired,
    }),).isRequired,
};
export default MoviesList; 
