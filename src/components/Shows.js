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






// Spinners
// import { ThreeDots } from 'react-loader-spinner';

// const Shows = ({navbarValue}) => {
//   const genreId = useParams().genreId;
//   const [allTvShows, setAllTvShows] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  
//   useEffect(() => {
//     setIsLoading(true)
//     const fetchData = async () => {
//       try {
//         const allShows = [];
//         for (let i = 1; i < 15; i++) {
//           const response = await axios.get(
//             `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${i}&sort_by=popularity.desc&with_genres=${genreId}&api_key=211669938f46a27e2998bb698a8efade`
//             );
//             allShows.push(...response.data.results);
//           }
//           setAllTvShows(allShows);
//           setIsLoading(false);
//         } catch (error) {
//           console.error(error);
//         }
//       };
      
//       fetchData();
//     }, [genreId]);
    
//   const filteredMoviesShows = allTvShows.filter(item => item.name && item.name.toLowerCase().includes(navbarValue.toLowerCase()));
//   return (
//     <div>
//       {isLoading ? (
//         <div className='d-flex justify-content-center flex-wrap'>
//           <ThreeDots
//             height='80'
//             width='80'
//             radius='9'
//             color='#0d6efd'
//             ariaLabel='three-dots-loading'
//             wrapperStyle={{}}
//             wrapperClassName=''
//             visible={true}
//           />
//         </div>
//       ) : (
//         <div className='d-flex justify-content-center flex-wrap'>
//           {!filteredMoviesShows ? allTvShows.map((item) => (
//             <Cart key={item.id} movieOrTv='tv' itemData={item} />
//           )) : filteredMoviesShows.map(item => (<Cart key={item.id} movieOrTv='tv' itemData={item} />))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Shows