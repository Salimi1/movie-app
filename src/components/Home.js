import React, { useContext } from 'react';
//Context
import { MovieContext } from '../context/MovieContextProvider';
import { ShowContext } from '../context/ShowContextProvider';
import { TrndsContext } from '../context/TrendsContextProvider';
//Components
import { movieShowHandler, getTrends } from '../services/api';

const Home = () => {
    const movies = useContext(MovieContext)
    const shows = useContext(ShowContext)
    const trends = useContext(TrndsContext)
    return (
        <div style={{backgroundColor: '#1b1c22', paddingTop: '40px'}}>
            <div>
                <h3 className='text-white ms-5 mt-4 row'>Serien</h3>
                {movieShowHandler(shows)}
            </div>
            <div>
                <h3 className='text-white ms-5 mt-4 row'>Filme</h3>
                {movieShowHandler(movies)}
            </div>
            <div>
                <h3 className='text-white ms-5 mt-4'>Neuste</h3>
                {movieShowHandler(trends)}
            </div>
        </div>
    );
};

export default Home;

