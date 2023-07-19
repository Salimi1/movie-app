import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/MovieContextProvider';
import { ShowContext } from '../context/ShowContextProvider';
import { TrndFilmsContext } from '../context/TrendFilmsContextProvider';
import { TrendShowsContext } from '../context/TrendShowsContextProvider';
import { movieShowHandler, getTrendmovies } from '../services/api';
import axios from 'axios';
import Cart from '../shared/Cart';
// Spinners
import { ThreeDots } from 'react-loader-spinner';

const Home = ({ navbarValue }) => {
  const movies = useContext(MovieContext);
  const shows = useContext(ShowContext);
  const trendFilms = useContext(TrndFilmsContext);
  const trendShows = useContext(TrendShowsContext);
  const allMovieShows = [...movies, ...shows];
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    setLoading(true)
    const fetchSearchBarValue = async () => {
      try {
        const API_KEY = '211669938f46a27e2998bb698a8efade';
        const encodedValue = encodeURIComponent(navbarValue);
        const URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodedValue}`;
        const response = await axios.get(URL);
        const searchData = response.data.results;
        setSearchData(searchData);
        setLoading(false);
      } catch (error) {
        console.error('Fehler beim Abrufen der Suchdaten:', error);
        setLoading(false);
      }
    };

    fetchSearchBarValue();
  }, [navbarValue]);

  return (
    <div>
      {loading ? (
        <div className='d-flex justify-content-center flex-wrap'>
          <ThreeDots
            height={80}
            width={80}
            radius={9}
            color='#0d6efd'
            ariaLabel='three-dots-loading'
            wrapperStyle={{}}
            wrapperClassName=''
            visible={true}
          />
        </div>
      ) : searchData.length === 0 ? (
        <div style={{ backgroundColor: '#1b1c22', paddingTop: '40px' }}>
          <div>
            <h3 className='text-white ms-5 mt-4 row'>Serien</h3>
            {movieShowHandler(shows, 'tv')}
          </div>
          <div>
            <h3 className='text-white ms-5 mt-4'>Neuste Serien</h3>
            {movieShowHandler(trendShows, 'tv')}
          </div>
          <div>
            <h3 className='text-white ms-5 mt-4 row'>Filme</h3>
            {movieShowHandler(movies, 'movie')}
          </div>
          <div className='pb-5'>
            <h3 className='text-white ms-5 mt-4'>Neuste Filme</h3>
            {movieShowHandler(trendFilms, 'movie')}
          </div>
        </div>
      ) : (
        <div className='container-fluid'>
          <div className='d-flex justify-content-center flex-row flex-wrap'>
            {searchData.map(item =>
              <Cart key={item.id} itemData={item} movieOrTv={item.media_type} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;


/* <div style={{ backgroundColor: '#1b1c22', paddingTop: '40px' }}>
  <div>
    <h3 className='text-white ms-5 mt-4 row'>Serien</h3>
    {movieShowHandler(shows, 'tv')}
  </div>
  <div>
    <h3 className='text-white ms-5 mt-4'>Neuste Serien</h3>
    {movieShowHandler(trendShows, 'tv')}
  </div>
  <div>
    <h3 className='text-white ms-5 mt-4 row'>Filme</h3>
    {movieShowHandler(movies, 'movie')}
  </div>
  <div>
    <h3 className='text-white ms-5 mt-4'>Neuste Filme</h3>
    {movieShowHandler(trendFilms, 'movie')}
  </div>
</div> */