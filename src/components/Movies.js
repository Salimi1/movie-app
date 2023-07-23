import React, { useState, useEffect, useRef } from 'react';
import Cart from '../shared/Cart';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

//Spinner
import { ThreeDots } from 'react-loader-spinner';

const Movies = ({navbarValue}) => {
  const [allMovies, setAllMovies] = useState([]);
  const [searchData, setSearchData] = useState([])
  const { genreId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [isLoading, setIsLoading] = useState(true)
  const API_KEY = 'e47d2fb209321705b053fb1d423a1baf';
  const btnCon = useRef();
  const value = navbarValue;

  useEffect(() => {
    const fetchSearchBarValue = async () => {
        setIsLoading(true)
        try {
          const encodedValue = encodeURIComponent(navbarValue);
          const URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodedValue}`;
          const response = await axios.get(URL);
          const searchData = await response.data.results;
          setSearchData(searchData);
          setIsLoading(false);
        } catch (error) {
          console.error('Fehler beim Abrufen der Suchdaten:', error);
        }
      };
  
      fetchSearchBarValue();
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${genreId}&api_key=${API_KEY}`;
        const response = await axios.get(URL);
        setAllMovies(await response.data.results);
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [genreId, currentPage, value]);

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
          </div>) : searchData.length === 0 ? (<div className='container-fluid'>
      <div className='d-flex justify-content-center flex-wrap'>
        {allMovies ?( allMovies.map((item) => (
          <Cart itemData={item} movieOrTv='movie' key={item.id} />
        ))) : <h2 className='text-danger'>Nichts gefunden</h2>}
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
    </div>) : (
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

export default Movies;
