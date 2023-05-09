import axios from 'axios'
const Movie_API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=211669938f46a27e2998bb698a8efade&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

const SHOW_API_URL = 'https://api.themoviedb.org/3/discover/tv?api_key=211669938f46a27e2998bb698a8efade&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0';

const getMovies = async () => {
        const response = await axios.get(Movie_API_URL);
        const data = response.data.results;
        return data
}

const getShows = async () => {
    const response = axios.get(SHOW_API_URL)
    const data = (await response).data.results;
    return data
}

const titleShorter = (title) => {
    const splitedTitle = title.split(' ')
    const newTitle = `${splitedTitle[0]}${splitedTitle[1]}`;
    return newTitle
}

export {getMovies, getShows, titleShorter}