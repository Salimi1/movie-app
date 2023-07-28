import axios from 'axios'
//Components
import Cart from '../shared/Cart';
import ActorCart from '../shared/ActorCart';

const Movie_API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=afd56baf731d5eedf4a0a15f63e354b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

const SHOW_API_URL = 'https://api.themoviedb.org/3/discover/tv?api_key=afd56baf731d5eedf4a0a15f63e354b1&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0';

const TREND_FILMS_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=afd56baf731d5eedf4a0a15f63e354b1';

const TREND_SHOWS_URL = 'https://api.themoviedb.org/3/trending/tv/day?api_key=afd56baf731d5eedf4a0a15f63e354b1'

const TREND_PEOPLE_URL = 'https://api.themoviedb.org/3/trending/person/day?api_key=afd56baf731d5eedf4a0a15f63e354b1'

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
    const response = await axios.get(TREND_SHOWS_URL)
    const trendShows = response.data.results
    return trendShows
}

const getTrendPersonHandler = async () => {
    const response = await axios.get(TREND_PEOPLE_URL)
    const trendPeople = await response.data.results
    const trendPeopleResult = trendPeople
    return trendPeopleResult
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
            <div className='d-flex justify-content-center justify-md-content-between justify-content-sm-center flex-wrap'>
                {movieTv === 'person' ? dataBox.map(item => 
                        <ActorCart
                        key={item.id}
                        data={item}
                    />) : dataBox.map(item => 
                        <Cart
                        key={item.id}
                        itemData={item}
                        movieOrTv={movieTv}
                    />)}
            </div>
        </div>  
    )
}


export {getFilms, getShows, titleShorter, movieShowHandler, getTrendFilms, getTrendShows, getTrendPersonHandler}