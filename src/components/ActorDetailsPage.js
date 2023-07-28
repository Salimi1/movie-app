import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Spinner
import { ThreeDots } from 'react-loader-spinner';



const ActorDetailsPage = ({bodyTheme}) => {
    const personId = useParams().id
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const PERSON_DETAIL_URL = `https://api.themoviedb.org/3/person/${personId}?language=en-US&api_key=afd56baf731d5eedf4a0a15f63e354b1`;
    const PERSON_CREDITS_URL = `https://api.themoviedb.org/3/person/${personId}/movie_credits?language=en-US&api_key=afd56baf731d5eedf4a0a15f63e354b1`

    const [personData, setPersonData] = useState()
    const [personCredits, setPersonCredits] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0,0)
        const fetchPersonDetails = async () =>{
            const personDetailsResponse = await axios.get(PERSON_DETAIL_URL)
            setPersonData(personDetailsResponse.data)
            const personCreditsResponse = await axios.get(PERSON_CREDITS_URL)
            setPersonCredits(personCreditsResponse.data.cast)            
            setLoading(false)
        }
        fetchPersonDetails()
    }, [personId])

    const {profile_path, birthday, place_of_birth, name, biography} = personData || {};
    
    return (
        <div className={`bg-${bodyTheme}`}>
        {loading ? (
          <div className='d-flex justify-content-center flex-wrap'>
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
          </div>
        ) : (
            <div className={`container-fluid ${bodyTheme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
            <div className='row p-4'>
                 <div className='col-12 text-center col-md-4 mt-2'>
                    <img className='w-100 shadow-lg' src={profile_path ? `${IMAGE_URL}/${profile_path}` : 'https://wemme-events.de/wp-content/themes/wemme/assets/images/no_image.jpg'} alt="" />
                 </div>
                 <div className='col-12 col-md-8 mt-5'>
                     <div className='row fw-bold'>
                         <h2 className='col-md-4'>{name}</h2>
                         <div className='col-md-8 mt-5 mt-md-0 text-end'>
                             <p className='text-decondary fs-6'>Geboren am: {birthday || 'unbekannt'}</p>
                             <p className='text-decondary fs-6'>Geboren in: {place_of_birth || 'unbekannt'}</p>
                         </div>
                     </div>
                     <hr/>
                     <div>
                         <h5 className='text-primary'>Biografie</h5>
                         <p>{biography || 'Es gibt keine Infos über diese/r Schauspieler/in'}</p>
                     </div>
                     {personCredits.length > 0 && <div>
                        <h2 className='mt-5 text-primary'>Bekannt für</h2>
                        <div className='d-flex' style={{ overflow: 'scroll' }}>
                            {personCredits.map(item => (
                                <div className='py-3' key={item.id}>
                                {item.poster_path && (
                                    <div>
                                        <Link to={`/movie/details/${item.id}`}>
                                            <img className='me-1' style={{ width: '150px', height: '230px' }} src={`${IMAGE_URL}${item.poster_path}`} />
                                        </Link>
                                    </div>
                                )}
                                {item.poster_path ? <span className='fs-6'>{item.title}</span> : null}
                                </div>
                            ))}
                        </div>
                     </div>}
                 </div>
            </div> 
         </div>
        )}
      </div>
    );
};

export default ActorDetailsPage;