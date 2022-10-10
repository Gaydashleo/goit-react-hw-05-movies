import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from 'components/Header';
import Loader from 'components/Loader';

const HomePage = lazy(() =>
  import('../pages/HomePage'),
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage'),
);
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage'),
);

function App() {
  return (
    <>
      <Header title="Search Movie" />

      <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes> 
      </Suspense>
    
    </>
  );
};
export default App;