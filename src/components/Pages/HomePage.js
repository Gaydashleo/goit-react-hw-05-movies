import { useState, useEffect } from 'react';
import getTrending from 'API/get-trending';
import MoviesList from 'components/MoviesList';
import Container from 'components/Container';


function HomePage() {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    getTrending().then(({ results }) => {
      const moviesArray = [];

      results.map(
        ({
          id,
          original_title,
          poster_path,
          vote_average,
          vote_count
        }) => {
          const movie = {
            id,
            title: original_title,
            poster: poster_path,
            voteAverage: vote_average,
            voteCount: vote_count,
          };
          return moviesArray.push(movie);
        },
      );
      setMovies(moviesArray);
    });
  }, []);
  
  return (
    movies && (
      <Container>
        <MoviesList movies={movies} />
      </Container>
    )
  );
}
export default HomePage;
