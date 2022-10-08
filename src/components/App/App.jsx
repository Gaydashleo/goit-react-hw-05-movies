// import { Routes,Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Container from 'components/Container';
import Header from 'components/Header';
import Loader from 'components/Loader';

// const HomePage = lazy(() =>
//   import('pages/HomePage'),
// );

function App() {
  return (
    <>
      <Header title="Search Movie" />

      <Suspense fallback={<Loader />}>
        {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>  */}
      </Suspense>
    
    </>
  );
};
export default App;