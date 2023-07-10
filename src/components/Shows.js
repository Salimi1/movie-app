import React, { useState, useEffect } from 'react';
import Cart from '../shared/Cart';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Spinners
import { ThreeDots } from 'react-loader-spinner';

const Shows = ({navbarValue}) => {
  const genreId = useParams().genreId;
  const [allTvShows, setAllTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const allShows = [];
        for (let i = 1; i < 15; i++) {
          const response = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${i}&sort_by=popularity.desc&with_genres=${genreId}&api_key=211669938f46a27e2998bb698a8efade`
            );
            allShows.push(...response.data.results);
          }
          setAllTvShows(allShows);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      
      fetchData();
    }, [genreId]);
    
  const filteredMoviesShows = allTvShows.filter(item => item.name && item.name.toLowerCase().includes(navbarValue.toLowerCase()));
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
        <div className='d-flex justify-content-center flex-wrap'>
          {!filteredMoviesShows ? allTvShows.map((item) => (
            <Cart key={item.id} movieOrTv='tv' itemData={item} />
          )) : filteredMoviesShows.map(item => (<Cart key={item.id} movieOrTv='tv' itemData={item} />))}
        </div>
      )}
    </div>
  );
};

export default Shows