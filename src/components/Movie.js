import React, { useState, useEffect } from 'react';
import { getMovies, getShows } from '../services/api';
import Cart from '../shared/Cart';

const Movie = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getMovies();
            setData(movies);
        };
        fetchMovies();
    }, []);
    const movieList = data.slice(0,10);
    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    movieList.map(item => 
                        <Cart
                        className=''
                        key={item.id}
                        info={item}
                    />)
                }

            </div>
    </div>
    );
};

export default Movie;