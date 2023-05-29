import React, { createContext, useState, useEffect } from 'react';
//Components
import { getTrendFilms, getTrendShows } from '../services/api';

export const TrendShowsContext = createContext()
const TrendShowsContextProvider = ({children}) => {
    const [trendShows, setTrendShows] = useState([])
    useEffect(() => {
        const fetchTrendShows = async () => {
            const trends = await getTrendShows()
            setTrendShows(trends)
        }
        fetchTrendShows()
    }, [])
    return (
        <TrendShowsContext.Provider value={trendShows}>
            {children}
        </TrendShowsContext.Provider>
    );
};

export default TrendShowsContextProvider;