import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { ThreeDots } from  'react-loader-spinner'
//Icons
import { FaTheaterMasks } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineFieldTime } from "react-icons/ai";

const MovieDetails = () => {
    const [details, setDetails] = useState()
    const id = useParams().id
    const URL = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=211669938f46a27e2998bb698a8efade`
    useEffect(() => {
        const fetchDetails = async () => {
            try{
                const response = await axios.get(URL)
                console.log(response);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchDetails()
    }, [id])
    return (
        <div>
            This is Details Page
        </div>
    );
};

export default MovieDetails;