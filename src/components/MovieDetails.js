import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import { ThreeDots } from  'react-loader-spinner'
//shared
import ActorCart from '../shared/ActorCart';
//Icons
import { AiFillStar } from "react-icons/ai";
const MovieDetails = () => {

    const movieOrTv = useParams().movieOrTv
    const id = useParams().id
    const URL = `https://api.themoviedb.org/3/${movieOrTv}/${id}?language=en-US&api_key=211669938f46a27e2998bb698a8efade`
    const CREDIT_URL = `https://api.themoviedb.org/3/${movieOrTv}/${id}/credits?language=en-US&api_key=211669938f46a27e2998bb698a8efade`;
    const MOVIE_SHOW_IMAGES = `https://api.themoviedb.org/3/${movieOrTv}/${id}/images?api_key=211669938f46a27e2998bb698a8efade`
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    const [details, setDetails] = useState([])
    const [credits, setCredits] = useState([])
    const [images, setImages] = useState()

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await axios.get(URL)
            const creditResponse = await axios.get(CREDIT_URL)
            const imageResponse = await axios.get(MOVIE_SHOW_IMAGES)
            setDetails(response.data)
            setCredits(creditResponse.data.cast)
            setImages(imageResponse.data.backdrops)
        }
        fetchDetails()
    }, [id, movieOrTv])

    const {genres, name, original_language, created_by, title, overview, poster_path, release_date, runtime, vote_average} = details;

    const genreList = genres?.map(item => item.name).join(", "); 
    const direktorList = created_by?.map(creator => creator.name).join(', ')
    const pictures = images?.map(item => item.file_path)
    const slicedImages = pictures?.slice(0, 2);
    const slicedActors = credits?.slice(0, 4)
    
    return (
        <div className='container-fluid text-white'>
            <div className='w-100 mt-4'>
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
                        <div className='my-3'>
                            <button className='btn btn-warning'>Overview</button>
                            <button className='btn btn-danger ms-2'>Thrailer</button>
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
                    <Link className='btn fs-2 btn-danger' to={`/${movieOrTv}/${id}/characters`}>Mehr anzeigen</Link>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;