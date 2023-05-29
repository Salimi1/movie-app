
import React, { createContext, useState, useEffect } from 'react';
import { getFilms } from '../services/api';

export const MovieContext = createContext()

const MovieContextProvider = ({children}) => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getFilms();
            setMovie(movies);
        };
        fetchMovies();
    }, []);
    return(
        <MovieContext.Provider value={movie}>
            {children}
        </MovieContext.Provider>
    )
};
export default MovieContextProvider
