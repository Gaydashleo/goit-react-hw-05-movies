async function getMovieReviews(movieId) {
  const key = '718b6c0b68c7f19fbdcdb1a100511982';
  const BASEURL = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const filter = `?api_key=${key}&language=en-US&page=1`;
  
  const response = await fetch(`${BASEURL}${filter}`);
  const data = await response.json();

  return data;
}
export default getMovieReviews;