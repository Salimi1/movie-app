import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import { ThreeDots } from  'react-loader-spinner'
//shared
import ActorCart from '../shared/ActorCart';
//Icons
import { AiFillStar } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const MovieDetails = () => {
    
    const movieOrTv = useParams().movieOrTv
    const id = useParams().id
    const URL = `https://api.themoviedb.org/3/${movieOrTv}/${id}?language=en-US&api_key=211669938f46a27e2998bb698a8efade`
    const CREDIT_URL = `https://api.themoviedb.org/3/${movieOrTv}/${id}/credits?language=en-US&api_key=211669938f46a27e2998bb698a8efade`;
    const MOVIE_SHOW_IMAGES = `https://api.themoviedb.org/3/${movieOrTv}/${id}/images?api_key=211669938f46a27e2998bb698a8efade`
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const TRAILER_URL = `https://api.themoviedb.org/3/${movieOrTv}/${id}/videos?api_key=211669938f46a27e2998bb698a8efade`
    
    
    const [details, setDetails] = useState([])
    const [credits, setCredits] = useState([])
    const [images, setImages] = useState()
    const [trailers, setTrailer] = useState([])
    
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
        const fetchDetails = async () => {
            const response = await axios.get(URL)
            const creditResponse = await axios.get(CREDIT_URL)
            const imageResponse = await axios.get(MOVIE_SHOW_IMAGES)
            const trailerResponse = await axios.get(TRAILER_URL)
            setDetails(response.data)
            setCredits(creditResponse.data.cast)
            setImages(imageResponse.data.backdrops)
            setTrailer(trailerResponse.data.results);
        }
        fetchDetails()
    }, [id, movieOrTv])

    const {genres, name, original_language, created_by, title, overview, poster_path, release_date, runtime, vote_average} = details;


    const genreList = genres?.map(item => item.name).join(", "); 
    const direktorList = created_by?.map(creator => creator.name).join(', ')
    const pictures = images?.map(item => item.file_path)
    const slicedImages = pictures?.slice(0, 2);
    const slicedActors = credits?.slice(0, 4)
    const YOUTUBE_URL = `https://www.youtube.com/embed/${trailers[mainTrailer]?.key}`
    
    return (
        <div className='container-fluid text-white'>
            <iframe ref={iframeTag} style={{zIndex: '1', display: 'none'}} className='position-absolute start-50 end-50 translate-middle-x' width="58%" height="415" src={`${YOUTUBE_URL}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div ref={closeBtn} className='position-absolute start-50' style={{zIndex: '1', top: '85%', display: 'none'}}>
                <GrClose onClick={closeTrailerHandler} className='btn btn-danger p-0 fs-1'/>
            </div>
            <div ref={detailsDivTag} style={{zIndex:'-1'}} className='w-100 mt-4'>
                <div className='row d-flex justify-content-between align-items-start'>
                    <div className='col-12 col-md-6 col-lg-5 d-flex justify-content-center align-items-center'>
                        <img className='w-75 w-md-100 rounded-2' src={`${IMAGE_URL}${poster_path}`}/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-7 mt-5 mt-md-0'>
                        <div className='d-flex justify-content-between'>
                            <h2 className='text-white'>{title || name}</h2>
                            <div className='fs-3'>
                                <span>{vote_average?.toFixed(1)}</span>
                                <AiFillStar className='text-warning ms-2'/>
                            </div>
                        </div>
                        <div className=''>
                            <span className='border-end border-secondary pe-2 me-2'>{release_date}</span>
                            <span>{runtime} min</span>
                        </div>
                        <div id='trailerCon' className='my-3'>
                            <span className='text-warning fw-bold'>Overview</span>
                            <button onClick={showTrailerHsandler} className='btn btn-danger ms-2'>Trailer</button>
                        </div>
                        <span className=''>{overview}</span>
                        <div className='d-flex mt-3'>
                            <span className='text-secondary'>Direktor/in:</span>
                            <p className='ms-2'>{direktorList}</p>
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
                            {slicedImages?.map(item => <img key={item} className='col-6 mt-2' style={{height: '190px'}} src={`${IMAGE_URL}${item}`} />)}
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-5 px-3 mx-3 mx-md-0'>
                <h3 className='text-white pt-5 mb-4'>Hauptdarsteller</h3>
                <div className='row ms-sm-2 ms-md-0 d-flex flex-md-nowrap justify-content-md-evenly'>
                    {slicedActors.map(actor => <ActorCart data={actor} key={actor.cast_id} />)}
                </div>
                <div className='text-center mt-5'>
                    <Link className='btn w-25 fs-2 btn-light' to={`/${movieOrTv}/${id}/characters`}>Mehr anzeigen</Link>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;