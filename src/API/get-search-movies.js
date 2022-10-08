async function getSearchMovies(query, page = 1) {
  const key = '718b6c0b68c7f19fbdcdb1a100511982';
  const BASEURL = 'https://api.themoviedb.org/3/search/movie';
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${BASEURL}${filter}`);
  const data = await response.json();

  return data;
}

export default getSearchMovies;