import React, { useState, useEffect } from 'react';
import Cart from '../shared/Cart';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Shows = () => {
  const genreId = useParams().genreId;
  const [allTvShows, setAllTvShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allShows = [];
        for (let i = 1; i < 100; i++) {
          const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${i}&sort_by=popularity.desc&with_genres=${genreId}?&api_key=211669938f46a27e2998bb698a8efade`)
          allShows.push(...response.data.results);
        }
        setAllTvShows(allShows);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [genreId]);

  return (
    <div>
      <div className='d-flex justify-content-center flex-wrap'>
        {allTvShows.map((item) => (
          <Cart key={item.id} itemData={item} />
        ))}
      </div>
    </div>
  );
};

export default Shows;
