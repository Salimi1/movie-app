import React, { createContext, useState, useEffect } from 'react';
//Components
import { getTrendFilms } from '../services/api';

export const TrndFilmsContext = createContext()
const TrndFilmsContextProvider = ({children}) => {
    const [trendFilms, setTrendFilms] = useState([])
    useEffect(() => {
        const fetchTrendFilms = async () => {
            const trends = await getTrendFilms()
            setTrendFilms(trends)
        }
        fetchTrendFilms()
    }, [])
    return (
        <TrndFilmsContext.Provider value={trendFilms}>
            {children}
        </TrndFilmsContext.Provider>
    );
};

export default TrndFilmsContextProvider;