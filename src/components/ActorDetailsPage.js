import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ActorDetailsPage = () => {
    const personId = useParams().id
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const PERSON_DETAIL_URL = `https://api.themoviedb.org/3/person/${personId}?language=en-US&api_key=211669938f46a27e2998bb698a8efade`;
    const PERSON_CREDITS_URL = `https://api.themoviedb.org/3/person/${personId}/movie_credits?language=en-US&api_key=211669938f46a27e2998bb698a8efade`

    const [personData, setPersonData] = useState()
    const [personCredits, setPersonCredits] = useState([])

    useEffect(() => {
        const fetchPersonDetails = async () =>{
            const personDetailsResponse = await axios.get(PERSON_DETAIL_URL)
            setPersonData(personDetailsResponse.data)
            const personCreditsResponse = await axios.get(PERSON_CREDITS_URL)
            setPersonCredits(personCreditsResponse.data.cast)            
        }
        fetchPersonDetails()
    }, [personId])

    const {profile_path, birthday, place_of_birth, name, biography} = personData || {};
    
    return (
        <div className='container-fluid text-white mb-4'>
           <div className='row p-4'>
                <div className='col-12 text-center col-md-4 mt-2'>
                    {profile_path && <img className='w-100' src={`${IMAGE_URL}/${profile_path}`} alt="Actor" />}
                </div>
                <div className='col-12 col-md-8 mt-5'>
                    <div className='row fw-bold'>
                        <h2 className='col-md-4'>{name}</h2>
                        <div className='col-md-8 mt-5 mt-md-0 text-end'>
                            <p className='text-danger fs-6'>Geboren am: {birthday}</p>
                            <p className='text-warning fs-6'>Geboren in: {place_of_birth}</p>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h5 className='text-primary'>Biografie</h5>
                        <p>{biography}</p>
                    </div>
                    <h2 className='mt-5 text-primary'>Bekannt für</h2>
                    <div className='d-flex' style={{ overflow: 'scroll' }}>
                        {personCredits.map(item => (
                            <div key={item.id}>
                            {item.poster_path && (
                                <div>
                                    <img className='me-1' style={{ width: '150px', height: '230px' }} src={`${IMAGE_URL}${item.poster_path}`} />
                                </div>
                            )}
                            {item.poster_path ? <span className='fs-6'>{item.title}</span> : null}
                            </div>
                        ))}
                    </div>

                </div>
           </div> 
        </div>
    );
};

export default ActorDetailsPage;