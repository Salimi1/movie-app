import React from 'react';
import { Link } from 'react-router-dom';
//Components
import { titleShorter } from '../services/api';
//Icons
const Cart = ({itemData, movieOrTv}) => {
    const {title, id, poster_path, vote_average, release_date, name, first_air_date} = itemData
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
    return (
        <div style={{width: '200px'}} className='card text-white m-3'>
            <img src={poster_path ? `${IMAGE_URL}${poster_path}` : 'https://praeger-schlauchtechnik.de/img/sample.png'} className='card-img h-100' style={{filter: 'brightness(0.6)'}} />
            <div className='card-img-overlay d-flex flex-column justify-content-end'>
                <div className='row'>
                    <h6 className='card-title py-1 col-12 rounded-4 bg-warning col-12'>{titleShorter(name || title)}...</h6>
                    <h6 className='card-title py-1 mt-2 col-12  rounded-4' style={{backgroundColor: '#ffffff78'}}>Rateing: {vote_average?.toFixed(2)}</h6>
                    <div className='d-flex ps-1 pe-0 justify-content-between align-items-center'>
                        <h6 className='card-title'>{release_date || first_air_date}</h6>
                        <Link to={`/${movieOrTv}/details/${id}`} className='text-center btn btn-warning text-white rounded-5 p-1'>Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;