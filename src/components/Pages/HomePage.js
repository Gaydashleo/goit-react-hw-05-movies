import { useState, useEffect } from 'react';
import getTrending from 'API/get-trending';
import MoviesList from 'components/MoviesList';



function HomePage() {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    getTrending().then(({ results }) => {
      const miviesArray = [];

      result.map(
        ({
          id,
          original_title,
          poster,
          quantyty_average,
          quantyty_count
        }) => {
          const movie = {
            id,
            title: original_title,
            poster: poster,
            quantytyAverage: quantyty_average,
            quantytyCount: quantyty_count,
          };
          return moviesArray.push(movie);
        },
      );
      setMovies(moviesArray);
    });
  },[]);
        
      
 
  




}