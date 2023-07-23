import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//Context
import { MovieContext } from '../context/MovieContextProvider';
import { ShowContext } from '../context/ShowContextProvider';
//shared
import ActorCart from '../shared/ActorCart';
const Characters = ({bodyTheme}) => {
    const movies = useContext(MovieContext)
    const shows = useContext(ShowContext)
    const {type, id}= useParams()
    const CREDIT_URL = `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US&api_key=e47d2fb209321705b053fb1d423a1baf`;
    const [actors, setActors] = useState([])
    useEffect(() => {
        const fetchActors = async () => {
            const actorsResponse = await axios.get(CREDIT_URL)
            setActors(actorsResponse.data.cast)
        }
        fetchActors()
    }, [type, id])
    return (
        <div>
            <h2 className={`${bodyTheme == 'dark' ? 'text-white' : 'text-dark'} my-4 ps-5 ms-5`}>Alle Schauspieler</h2>
            <div className='row d-flex flex-wrap mx-0 justify-content-evenly justify-content-md-center'>
                {actors.length > 0 ? (actors?.map(actor => <ActorCart data={actor} key={actor.cast_id} />)) : <h4 className='text-center text-danger my-5'>Es gibt keine Infos Über die Schauspielern</h4>}
            </div>
        </div>
    );
};

export default Characters;