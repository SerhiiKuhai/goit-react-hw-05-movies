import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MoviesDetails from 'pages/MoviesDetails';
// import NotFound from 'pages/NotFound';
import { Layout } from './Layout/Layout';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews'

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({ ...module, default: module.Cast }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
