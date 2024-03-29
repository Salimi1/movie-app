import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import { ThreeDots } from  'react-loader-spinner'
//shared
import ActorCart from '../shared/ActorCart';
//Icons
import { AiFillStar } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

const MovieDetails = ({bodyTheme}) => {
    
    const movieOrTv = useParams().movieOrTv
    const id = useParams().id
    const URL = `https://api.themoviedb.org/3/${movieOrTv}/${id}?language=en-US&api_key=afd56baf731d5eedf4a0a15f63e354b1`
    const CREDIT_URL = `https://api.themoviedb.org/3/${movieOrTv}/${id}/credits?language=en-US&api_key=afd56baf731d5eedf4a0a15f63e354b1`;
    const MOVIE_SHOW_IMAGES = `https://api.themoviedb.org/3/${movieOrTv}/${id}/images?api_key=afd56baf731d5eedf4a0a15f63e354b1`
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const TRAILER_URL = `https://api.themoviedb.org/3/${movieOrTv}/${id}/videos?api_key=afd56baf731d5eedf4a0a15f63e354b1`
    
    
    const [details, setDetails] = useState([])
    const [credits, setCredits] = useState([])
    const [images, setImages] = useState()
    const [trailers, setTrailer] = useState([])
    const [loading, setLoading] = useState(true)
    
    const iframeTag = useRef()
    const detailsDivTag = useRef()
    const closeBtn = useRef()
    const showTrailerHsandler = () => {
        iframeTag.current.src = YOUTUBE_URL
        iframeTag.current.style.display = ' block';
        detailsDivTag.current.style.filter = 'blur(5px)';
        closeBtn.current.style.display = ' block';
        
    }
    const mainTrailer = trailers.findIndex(item => item.type == 'Trailer')

    const closeTrailerHandler = () => {
        iframeTag.current.style.display = ' none';
        detailsDivTag.current.style.filter = 'blur(0px)';
        closeBtn.current.style.display = ' none';
        if (iframeTag.current) {
            iframeTag.current.src = '';
          }
    }

    useEffect(() => {
        window.scrollTo(0,0)
        const fetchDetails = async () => {
            const response = await axios.get(URL)
            const creditResponse = await axios.get(CREDIT_URL)
            const imageResponse = await axios.get(MOVIE_SHOW_IMAGES)
            const trailerResponse = await axios.get(TRAILER_URL)
            { response.data ? setDetails(response.data) : movieOrTv = 'tv'}
            setCredits(creditResponse.data.cast)
            setImages(imageResponse.data.backdrops)
            setTrailer(trailerResponse.data.results);
            setLoading(false)
        }
        fetchDetails()
    }, [id, movieOrTv])

    const {genres, name, original_language, created_by, title, overview, poster_path, release_date, runtime, vote_average, last_air_date, last_episode_to_air, episode_run_time} = details;



    const genreList = genres?.map(item => item.name).join(", "); 
    const direktorList = created_by?.map(creator => creator.name).join(', ')
    const pictures = images?.map(item => item.file_path)
    const slicedImages = pictures?.slice(0, 2);
    const slicedActors = credits?.slice(0, 4)
    const YOUTUBE_URL = `https://www.youtube.com/embed/${trailers[mainTrailer]?.key}`
    
    return (
        <div className='py-4'>
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
            <div className={`container-fluid ${bodyTheme === 'dark' ? 'text-light' : 'text-dark'}`}>
            <div ref={closeBtn} className='ms-4 ms-md-5 ps-md-5' style={{zIndex: '1', display: 'none'}}>
                <VscChromeClose onClick={closeTrailerHandler} className={`p-0  ${bodyTheme === 'dark' ? 'text-light' : null} fs-1 fs-bolder`}/>
            </div>
            <iframe ref={iframeTag} style={{zIndex: '1', display: 'none'}} className='position-absolute position-relative start-50 end-50 translate-middle-x' width="58%" height="415" src={`${YOUTUBE_URL}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div ref={detailsDivTag} style={{zIndex:'-1'}} className='w-100 mt-4'>
                <div className='row d-flex justify-content-between align-items-start'>
                    <div className='col-12 col-md-6 col-lg-5 d-flex justify-content-center align-items-center'>
                        <img alt='image' className='w-75 shadow-lg w-md-100 rounded-2' src={ poster_path ? `${IMAGE_URL}${poster_path}` : 'https://praeger-schlauchtechnik.de/img/sample.png'}/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 mt-5 mt-md-0'>
                        <div className='d-flex justify-content-between'>
                            <h2 className=''>{title || name || ''}</h2>
                            <div className='fs-3'>
                                <span>{vote_average?.toFixed(1)}</span>
                                <AiFillStar className='text-warning ms-2'/>
                            </div>
                        </div>
                        <div className=' d-flex justify-content-between'>
                            <div>
                                <span className='border-end border-secondary pe-2 me-2'>{release_date || last_air_date}</span>
                                <span>{runtime || episode_run_time} min</span>
                            </div>
                            <div>
                                {last_episode_to_air && `Letzte Folge: ${last_episode_to_air.episode_number}`}
                            </div>
                        </div>
                        <div id='trailerCon' className='my-3'>
                            <span className={`${bodyTheme === 'dark' ? 'text-primary' : 'text-secondary'} fa-bold`}>Overview</span>
                            <button onClick={showTrailerHsandler} className={`btn ${bodyTheme === 'dark' ? 'btn-secondary' : 'btn-primary'} ms-2`}>Trailer</button>
                        </div>
                        <span className=''>{overview}</span>
                        <div className='d-flex mt-3'>
                            <span className='text-secondary'>Direktor/in:</span>
                            <p className='ms-2'>{direktorList || 'unbekannt'}</p>
                        </div>
                        <div className='d-flex mt-3'>
                            <span className='text-secondary'>Genre:</span>
                            <p className='ms-2'>{genreList}</p>
                        </div>
                        <div className='d-flex'>
                            <span className='text-secondary'>Language:</span>
                            <p className='ms-2'>{ original_language}</p>
                        </div>
                        <div style={{}} className='row'>
                            {slicedImages?.map(item => <img alt='bild' key={item} className='col-6 mt-2' style={{height: '190px'}} src={`${IMAGE_URL}${item}`} />)}
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-5 px-3 mx-3 mx-md-0'>
                <h3 className='pt-5 mb-4'>Hauptdarsteller</h3>
                <div className='row ms-sm-2 ms-md-0 d-flex flex-md-nowrap justify-content-md-evenly justify-content-center'>
                    {slicedActors.length > 0 ? (slicedActors.map(actor => <ActorCart data={actor} key={actor.cast_id} />)) : (<h4 className='text-center text-danger my-5'>Es gibt keine Infos Über die Schauspielern</h4>)}
                </div>
                <div className='text-center mt-5'>
                    <Link className={`btn ${bodyTheme === 'dark' ? 'btn-secondary' : 'btn-primary'} w-s-50 px-md-5 fs-md-2 w-md-25 mt-3 `} to={`/${movieOrTv}/${id}/characters`}>Mehr anzeigen</Link>
                </div>
            </div>
        </div>
        )}
      </div>
    );
};
export default MovieDetails;