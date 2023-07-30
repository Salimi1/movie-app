import React from 'react';
import { Link } from 'react-router-dom';

const ActorCart = ({data}) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    const {profile_path, original_name, character, id} = data;
    return (
        <div className='col-6 col-sm-4 mx-4 ms-md-0 col-md-3 col-lg-2 ms-3 card mt-4 p-0 text-dark'>
            <img alt='ActorCart' className='card-img-top h-75 w-100' src={profile_path ? `${IMAGE_URL}/${profile_path}` : 'https://www.physiotherapie-sonthofen.de/wp-content/uploads/2016/03/kein-bild-vorhanden.png'} />
            <div className='card-body px-0 ps-1'>
                <h4 className='card-title fs-6'>{original_name}</h4>
                <p className='card-text text-secondary'>{character}</p>
            </div>
            <div>
                <Link to={`/person/${id}/details`} className='btn btn-danger float-end m-1 m-md-2'>Info</Link>
            </div>
        </div>
    );
};

export default ActorCart;