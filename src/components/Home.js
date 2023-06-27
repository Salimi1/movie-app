import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/MovieContextProvider';
import { ShowContext } from '../context/ShowContextProvider';
import { TrndFilmsContext } from '../context/TrendFilmsContextProvider';
import { TrendShowsContext } from '../context/TrendShowsContextProvider';
import { movieShowHandler, getTrendmovies } from '../services/api';

const Home = ({ navbarValue }) => {
  const movies = useContext(MovieContext);
  const shows = useContext(ShowContext);
  const trendFilms = useContext(TrndFilmsContext);
  const trendShows = useContext(TrendShowsContext);
  const allMovieShows = [...movies, ...shows];  
  const filteredMoviesShows = allMovieShows.filter(item => item.title && item.title.includes(navbarValue) || item.name && item.name.includes(navbarValue));
  console.log(filteredMoviesShows);

  return (
    <div style={{ backgroundColor: '#1b1c22', paddingTop: '40px' }}>
      <h2 className='text-white'>{filteredMoviesShows.length > 0 && navbarValue}</h2>
      <div style={{ backgroundColor: '#1b1c22', paddingTop: '40px' }}>
        <div>
          <h3 className='text-white ms-5 mt-4 row'>Serien</h3>
          {movieShowHandler(shows, 'tv')}
        </div>
        <div>
          <h3 className='text-white ms-5 mt-4'>Neuste Serien</h3>
          {movieShowHandler(trendShows, 'tv')}
        </div>
        <div>
          <h3 className='text-white ms-5 mt-4 row'>Filme</h3>
          {movieShowHandler(movies, 'movie')}
        </div>
        <div>
          <h3 className='text-white ms-5 mt-4'>Neuste Filme</h3>
          {movieShowHandler(trendFilms, 'movie')}
        </div>
      </div>
    </div>
  );
};

export default Home;
