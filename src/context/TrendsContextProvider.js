import React, { createContext, useState, useEffect } from 'react';
//Components
import { getTrends } from '../services/api';

export const TrndsContext = createContext()
const TrendsContextProvider = ({children}) => {
    const [trends, setTrends] = useState([])
    useEffect(() => {
        const fetchTrends = async () => {
            const trends = await getTrends()
            setTrends(trends)
        }
        fetchTrends()
    }, [])
    return (
        <TrndsContext.Provider value={trends}>
            {children}
        </TrndsContext.Provider>
    );
};

export default TrendsContextProvider;