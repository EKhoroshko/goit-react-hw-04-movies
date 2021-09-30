import './App.css';
import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./Views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./Views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./Views/MovieDetailsPage/MovieDetailsPage'),
);

const App = () => (
  <div className="App">
    <Navigation />
    <Suspense
      fallback={
        <div className="loader">
          <Loader />
        </div>
      }
    >
      <Switch>
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default App;
