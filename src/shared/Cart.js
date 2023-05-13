import React from 'react';
//Components
import { titleShorter } from '../services/api';
//Icons
import { AiOutlineRight } from "react-icons/ai";

const Cart = ({itemData}) => {
    const {title, poster_path, vote_average, release_date, name, first_air_date} = itemData
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
    return (
        <div style={{width: '200px'}} className='card text-white m-3'>
            <img src={`${IMAGE_URL}${poster_path}`} className='card-img' style={{filter: 'brightness(0.6)'}} />
            <div className='card-img-overlay d-flex flex-column justify-content-end'>
                <div className='row'>
                    <h6 className='card-title py-1 col-12 rounded-4 bg-warning col-12'>{titleShorter(name || title)}...</h6>
                    <h6 className='card-title py-1 mt-2 col-12  rounded-4' style={{backgroundColor: '#ffffff78'}}>Rateing: {vote_average.toFixed(2)}</h6>
                    <h6 className='card-title mt-3 col-8'>{release_date || first_air_date}</h6>
                    <span className='col-4 text-end p-0 align-items-center d-flex'>
                        <AiOutlineRight className='fw-4 mt-2 rounded-5 fs-4'style={{backgroundColor:'#ffffff78'}} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Cart;