import React from 'react';
import { Link } from 'react-router-dom';

const ActorCart = ({data}) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    const {cast_id, profile_path, original_name, character, id} = data;
    return (
        <div key={cast_id} className='col-4 mx-4 ms-md-0 col-md-3 col-lg-2 ms-md-5 card mt-4 p-0 text-dark'>
            <img className='card-img-top h-75 w-100' src={profile_path ? `${IMAGE_URL}${profile_path}` : 'https://praeger-schlauchtechnik.de/img/sample.png'} />
            <div className='card-body px-0 ps-1'>
                <h4 className='card-title fs-6'>{original_name}</h4>
                <p className='card-text text-secondary'>{character}</p>
            </div>
            <div>
                <Link to={`/person/${id}/details`} className='btn btn-primary float-end m-2'>Info</Link>
            </div>
        </div>
    );
};

export default ActorCart;