import React, { useState, useEffect, useRef } from 'react';
import Cart from '../shared/Cart';
import ActorCart from '../shared/ActorCart';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// Spinner
import { ThreeDots } from 'react-loader-spinner';

const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 1040, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 1077, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 1075, name: "War" },
  { id: 37, name: "Western" },
];

const Shows = ({ navbarValue, bodyTheme }) => {
  const genreId = useParams().genreId;
  const genreName = genres.find(genre => genre.id === parseInt(genreId))?.name;

  const [allShows, setAllShows] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = 'afd56baf731d5eedf4a0a15f63e354b1';
  const btnCon = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchSearchBarValue = async () => {
      setIsLoading(true);
      try {
        const encodedValue = encodeURIComponent(navbarValue);
        const URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodedValue}`;
        const response = await axios.get(URL);
        const searchData = await response.data.results;
        setSearchData(searchData);
        setIsLoading(false);
      } catch (error) {
        console.error('Fehler beim Abrufen der Suchdaten:', error);
        setIsLoading(false);
      }
    };

    fetchSearchBarValue();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const URL = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${genreId}&api_key=${API_KEY}`;
        const response = await axios.get(URL);
        setAllShows(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [genreId, currentPage, navbarValue]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const nextFourPageHandler = () => {
    if (pageNumbers[3] !== 500) {
      setPageNumbers((prevPageNumbers) => prevPageNumbers.map((item) => item + 4));
    } else {
      return null;
    }
  };

  const lastFourPageHandler = () => {
    if (pageNumbers[0] > 1) {
      setPageNumbers((prevPageNumbers) => prevPageNumbers.map((item) => item - 4));
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
        </div>
      ) : (
        <div className='container-fluid text-center text-md-start'>
          {allShows.length > 0 && <h3 className={`ms-md-5 ps-md-3 ps-lg-0 mt-5 ${bodyTheme === 'dark' ? 'text-light' : 'text-dark'}`}>
              Serien im Genre {genreName}
            </h3>}
          <div className='d-flex justify-content-center flex-wrap'>
            {searchData.length > 0 ? (
              searchData.map(item => item.media_type == 'person' ? <ActorCart key={item.id} data={item} /> : <Cart key={item.id} itemData={item} movieOrTv={item.media_type} />)
            ) : allShows.length > 0 ? (
              allShows.map((item) => <Cart itemData={item} movieOrTv='tv' key={item.id} />)
            ) : (
              <h4 className='text-danger py-4'>Leider nichts gefunden</h4>
            )}
          </div>
          {allShows.length > 0 && (
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
          )}
        </div>
      )}
    </div>
  );
};

export default Shows;
