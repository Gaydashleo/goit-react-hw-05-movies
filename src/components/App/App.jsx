// import { Routes,Route } from 'react-router-dom';

import Container from 'components/Container';
import Header from 'components/Header';


function App() {
  return (
    <Container>
      <Header title="Search Movie" />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes> */}
    </Container>
  );
};
export default App;