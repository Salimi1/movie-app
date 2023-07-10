import React, { createContext, useEffect, useState } from 'react';
import { getShows } from '../services/api';

export const ShowContext = createContext()

const ShowContextProvider = ({children}) => {
    const [show, setShow] = useState([])
    useEffect(() => {
        const fetchShows = async () => {
            const shows = await getShows();
            setShow(shows)
        }
        fetchShows()
    }, [])
    return (
        <ShowContext.Provider value={show}>
            {children}
        </ShowContext.Provider>
    );
};

export default ShowContextProvider;