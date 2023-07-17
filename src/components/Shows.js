import React, { useState, useEffect, useRef } from 'react';
import Cart from '../shared/Cart';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

//Spinner
import { ThreeDots } from 'react-loader-spinner';

const Shows = ({navbarValue}) => {
  const [allShows, setAllShows] = useState([]);
  const { genreId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [isLoading, setIsLoading] = useState(true)
  const API_KEY = '211669938f46a27e2998bb698a8efade';
  const btnCon = useRef();
  const value = navbarValue;
  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const URL = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${genreId}&api_key=${API_KEY}`;
        const response = await axios.get(URL);
        setAllShows(response.data.results);
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [genreId, currentPage, value]);
  
  const filterdAllShows = allShows.filter(show => show.name.toLowerCase().includes(value.toLowerCase()))

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const nextFourPageHandler = () => {
    if (pageNumbers[3] !== 500) {
      setPageNumbers((prevPageNumbers) =>
        prevPageNumbers.map((item) => item + 4)
      );
    } else {
      return null;
    }
  };

  const lastFourPageHandler = () => {
    if (pageNumbers[0] > 1) {
      setPageNumbers((prevPageNumbers) =>
        prevPageNumbers.map((item) => item - 4)
      );
    } else {
      return null;
    }
  };
  return (
    <div>
      {isLoading ? (
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
          </div>) : (<div className='container-fluid'>
      <div className='d-flex justify-content-center flex-wrap'>
        {filterdAllShows ? filterdAllShows.map((show) => <Cart itemData={show} movieOrTv='tv' key={show.id}  />) : allShows.map((item) => (
          <Cart itemData={item} movieOrTv='tv' key={item.id} />
        ))}
      </div>
      <div className='text-center mt-4'>
        <div className='btn-group' ref={btnCon}>
          <Link className='btn btn-primary' onClick={lastFourPageHandler}>
            last
          </Link>
          {pageNumbers.map((item) => (
            <Link
              key={item}
              className={`btn btn-primary${currentPage === item ? ' active' : ''}`}
              onClick={() => handlePageChange(item)}
            >
              {item}
            </Link>
          ))}
          <Link className='btn btn-primary' onClick={nextFourPageHandler}>
            next
          </Link>
        </div>
      </div>
    </div>)}
    </div>
  );
};

export default Shows;






        // <div style={{ backgroundColor: '#1b1c22', paddingTop: '40px' }}>
        //   <div style={{ backgroundColor: '#1b1c22', paddingTop: '40px' }}>
        //     <div>
        //       <h3 className='text-white ms-5 mt-4 row'>Serien</h3>
        //       {movieShowHandler(shows, 'tv')}
        //     </div>
        //     <div>
        //       <h3 className='text-white ms-5 mt-4'>Neuste Serien</h3>
        //       {movieShowHandler(trendShows, 'tv')}
        //     </div>
        //     <div>
        //       <h3 className='text-white ms-5 mt-4 row'>Filme</h3>
        //       {movieShowHandler(movies, 'movie')}
        //     </div>
        //     <div>
        //       <h3 className='text-white ms-5 mt-4'>Neuste Filme</h3>
        //       {movieShowHandler(trendFilms, 'movie')}
        //     </div>
        //   </div>
        // </div>