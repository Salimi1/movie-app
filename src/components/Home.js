import React, { useContext } from 'react';
//Context
import { MovieContext } from '../context/MovieContextProvider';
import { ShowContext } from '../context/ShowContextProvider';
import { TrndFilmsContext } from '../context/TrendFilmsContextProvider';
import { TrendShowsContext } from '../context/TrendShowsContextProvider';
//Components
import { movieShowHandler, getTrendmovies } from '../services/api';

const Home = () => {
    const movies = useContext(MovieContext)
    const shows = useContext(ShowContext)
    const trendFilms = useContext(TrndFilmsContext)
    const trendShows = useContext(TrendShowsContext)
    return (
        <div style={{backgroundColor: '#1b1c22', paddingTop: '40px'}}>
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
    );
};

export default Home;

