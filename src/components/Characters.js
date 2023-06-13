import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
//shared
import ActorCart from '../shared/ActorCart';
const Characters = () => {
    const {type, id}= useParams()
    const CREDIT_URL = `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US&api_key=211669938f46a27e2998bb698a8efade`;
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
            <h2 className='text-white my-4 ps-5 ms-5'>Alle Schauspieler</h2>
            <div className='row d-flex flex-wrap mx-0 justify-content-evenly justify-content-md-center'>
                {actors?.map(actor => <ActorCart data={actor} key={actor.cast_id} />)}
            </div>
        </div>
    );
};

export default Characters;