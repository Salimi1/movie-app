import axios, { all } from 'axios'
import { Link } from 'react-router-dom';
//Components
import Cart from '../shared/Cart';
import { useState } from 'react';

const Movie_API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=e47d2fb209321705b053fb1d423a1baf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

const SHOW_API_URL = 'https://api.themoviedb.org/3/discover/tv?api_key=e47d2fb209321705b053fb1d423a1baf&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0';

const TREND_FILMS_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=e47d2fb209321705b053fb1d423a1baf';

const TFREND_SHOWS_URL = 'https://api.themoviedb.org/3/trending/tv/day?api_key=e47d2fb209321705b053fb1d423a1baf'

const getFilms = async () => {
        const response = await axios.get(Movie_API_URL);
        const movie = response.data.results;
        return movie
}

const getTrendFilms = async () => {
    const response = await axios.get(TREND_FILMS_URL)
    const trendFilms = response.data.results
    return trendFilms
}
const getShows = async () => {
    const response = await axios.get(SHOW_API_URL)
    const shows = response.data.results;
    return shows
}

const getTrendShows = async () => {
    const response = await axios.get(TFREND_SHOWS_URL)
    const trendShows = response.data.results
    return trendShows
}

const titleShorter = (title) => {
    const splitedTitle = title.split(' ')
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle
}


const movieShowHandler = (Info, movieTv, lastItemIndex) => {
    const lastItem = lastItemIndex;
    const dataBox = Info.slice(0, lastItem);
    return (
        <div className='container-fluid'>
            <div className='d-flex row justify-content-center justify-md-content-between justify-content-sm-center flex-wrap'>
                {
                    dataBox.map(item => 
                        <Cart
                        key={item.id}
                        itemData={item}
                        movieOrTv={movieTv}
                    />)
                }
            </div>
        </div>  
    )
}


export {getFilms, getShows, titleShorter, movieShowHandler, getTrendFilms, getTrendShows}