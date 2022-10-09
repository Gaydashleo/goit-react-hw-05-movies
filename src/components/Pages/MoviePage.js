import getSearchMovies from 'API/get-search-movies';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import MoviesList from 'components/MoviesList';


function MoviesPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query !== '') {
      getSearchMovies(query).then(({ results }) => {
        const moviesArray = [];
        
        results.map(({ id, original_titile, poster_path, vote_average, vote_count }) => {
          const movie = {
            id,
            title: original_titile,
            poster: poster_path,
            voteAverage: vote_average,
            voteCount: vote_count,
          };
          return moviesArray.push(movie);
        },);
        setMovies(moviesArray);
      });
  }

  }, [query]);
  
  return (
    <>
      <SearchBar />
      {movies && (
        <>
          <MoviesList movies={movies} />
        </>
      )}
    </>
  );
}

export default MoviesPage;