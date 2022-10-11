import propTypes from 'prop-types';
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
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
      poster: propTypes.string,
      voteAverage: propTypes.number,
      voteCount: propTypes.number,
    }),).isRequired,
};
export default MoviesList; 
