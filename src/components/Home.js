import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/MovieContextProvider';
import { ShowContext } from '../context/ShowContextProvider';
import { TrndFilmsContext } from '../context/TrendFilmsContextProvider';
import { TrendShowsContext } from '../context/TrendShowsContextProvider';
import { movieShowHandler, getTrendPersonHandler } from '../services/api';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cart from '../shared/Cart';
import ActorCart from '../shared/ActorCart';
// Spinners
import { ThreeDots } from 'react-loader-spinner';
const Home = ({ navbarValue, bodyTheme }) => {
  const movies = useContext(MovieContext);
  const shows = useContext(ShowContext);
  const trendFilms = useContext(TrndFilmsContext);
  const trendShows = useContext(TrendShowsContext);
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [trendPersons, settrendPersons] = useState([])

  const [lastItem1, setLastItem1] = useState(5)
  const [lastItem2, setLastItem2] = useState(5)
  const [lastItem3, setLastItem3] = useState(5)
  const [lastItem4, setLastItem4] = useState(5)
  const [lastItem5, setLastItem5] = useState(5)



  useEffect(() => {
    setLoading(true)
    const fetchSearchBarValue = async () => {
      try {
        const persons = await getTrendPersonHandler();
        const trendPersons = await persons
        settrendPersons(trendPersons)
        const API_KEY = 'afd56baf731d5eedf4a0a15f63e354b1';
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

  const addHandler1 = (e) => {
    e.preventDefault()
    setLastItem1((preventLastItem) => preventLastItem !== 20 ? preventLastItem + 5 : 5)
  }
  const addHandler2 = (e) => {
    e.preventDefault()
    setLastItem2((preventLastItem) => preventLastItem !== 20 ? preventLastItem + 5 : 5)
  }
  const addHandler3 = (e) => {
    e.preventDefault()
    setLastItem3((preventLastItem) => preventLastItem !== 20 ? preventLastItem + 5 : 5)
  }
  const addHandler4 = (e) => {
    e.preventDefault()
    setLastItem4((preventLastItem) => preventLastItem !== 20 ? preventLastItem + 5 : 5)
  }
  const addHandler5 = (e) => {
    e.preventDefault()
    setLastItem5((preventLastItem) => preventLastItem !== 20 ? preventLastItem + 5 : 5)
  }

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
        <div style={{paddingTop: '40px' }}>

          <div className='position-relative'>
            <h3 className={`${bodyTheme == 'dark' ? 'text-white' : 'text-dark'} ms-5 mt-4`}>Serien</h3>
            {movieShowHandler(shows, 'tv', lastItem1)}
            <Link onClick={addHandler1} className='position-absolute btn btn-secondary mt-2 d-none d-md-block' style={{right: '50px', top: '-10px'}}>Mehr anzeigen</Link>
          </div>
          <br/>
          <div className='position-relative mt-5'>
            <h3 className={`${bodyTheme == 'dark' ? 'text-white' : 'text-dark'} ms-5 mt-4`}>Neuste Serien</h3>
            {movieShowHandler(trendShows, 'tv', lastItem2)}
            <Link onClick={addHandler2} className='position-absolute btn btn-secondary mt-2 d-none d-md-block' style={{right: '50px', top: '-10px'}}>Mehr anzeigen</Link>
          </div>
          <div className='position-relative mt-5'>
            <h3 className={`${bodyTheme == 'dark' ? 'text-white' : 'text-dark'} ms-5 mt-4`}>Belibste Schauspielern</h3>
            {movieShowHandler(trendPersons, 'person', lastItem5)}
            <Link onClick={addHandler5} className='position-absolute btn btn-secondary mt-2 d-none d-md-block' style={{right: '50px', top: '-10px'}}>Mehr anzeigen</Link>
          </div>
          <br/>
          <div className='position-relative mt-5'>
            <h3 className={`${bodyTheme == 'dark' ? 'text-white' : 'text-dark'} ms-5 mt-4`}>Filme</h3>
            {movieShowHandler(movies, 'movie', lastItem3)}
            <Link onClick={addHandler3} className='position-absolute btn btn-secondary mt-2 d-none d-md-block' style={{right: '50px', top: '-10px'}}>Mehr anzeigen</Link>
          </div>
          <br/>
          <div className='pb-5 position-relative mt-5 mb-5'>
            <h3 className={`${bodyTheme == 'dark' ? 'text-white' : 'text-dark'} ms-5 mt-4`}>Neuste Filme</h3>
            {movieShowHandler(trendFilms, 'movie', lastItem4)}
            <Link onClick={addHandler4} className='position-absolute btn btn-secondary mt-2 d-none d-md-block' style={{right: '50px', top: '-10px'}}>Mehr anzeigen</Link>
          </div>
        </div>
      ) : (
        <div className='container-fluid'>
          <div className='d-flex justify-content-center flex-row flex-wrap'>
            {searchData.map(item => item.media_type == 'person' ?               <ActorCart key={item.id} data={item} /> : <Cart key={item.id} itemData={item} movieOrTv={item.media_type} />

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