import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//shared
import ActorCart from '../shared/ActorCart';

//Spinner
import { ThreeDots } from 'react-loader-spinner';

const Characters = ({bodyTheme}) => {
    const [isLoading, setIsLoading] = useState(true)
    const {type, id}= useParams()
    const CREDIT_URL = `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US&api_key=afd56baf731d5eedf4a0a15f63e354b1`;
    const [actors, setActors] = useState([])
    useEffect(() => {
        const fetchActors = async () => {
            const actorsResponse = await axios.get(CREDIT_URL)
            setActors(await actorsResponse.data.cast)
            setIsLoading(false)
        }
        fetchActors()
    }, [type, id])
    return (
        <div>
            {isLoading ? <div className='d-flex justify-content-center flex-wrap'>
            <ThreeDots
              height='80'
              width='80'
              radius='9'
              color='#0d6efd'
              ariaLabel='three-dots-loading'
              wrapperStyle={{}}
              wrapperClassName=''
              visible={true}
            />
          </div> : <div>
            <h2 className={`${bodyTheme === 'dark' ? 'text-white' : 'text-dark'} my-4 ps-5 ms-5`}>Alle Schauspieler</h2>
            <div className='row d-flex flex-wrap mx-0 justify-content-evenly justify-content-md-center'>
                {actors.length > 0 ? (actors?.map(actor => <ActorCart data={actor} key={actor.cast_id} />)) : <h4 className='text-center text-danger my-5'>Es gibt keine Infos Über die Schauspielern</h4>}
            </div>
            </div>}
        </div>
    );
};

export default Characters;