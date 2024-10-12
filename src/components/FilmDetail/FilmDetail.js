import React, { useEffect, useState } from 'react'
import './FilmDetail.css'
import { Link , useParams} from 'react-router-dom'
import axios from 'axios';

import {linkImg} from '../../redux/types/moviesType.js'



const FilmDetail = () => {
    const params = useParams() ;
    const filmId = params.id;

    const [ details , setDetails ] = useState([])
    

      // details data API
    const getDetails = async()=>{
        try{
            const data = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=d0479c49cb948d6ad0bb103813fe9e3c&language=en-US`)
            setDetails(data.data)
        } catch (err) {
        console.error(err);
        }
    }

    useEffect(()=>{
        getDetails()
    } , [])
    
    return (
  
    <div className='container grid-container mt-3'>
        <div className='grid-item-cover'>
            <img src={linkImg + details.poster_path} alt='homepage'/>
        </div>
        <div className='grid-item-detaill'>
            <p className="card-text-details border-bottom title">
              {details.title}
            </p>
            <p className="card-text-details border-bottom">
                {details.release_date}
            </p>
            <p className="card-text-details border-bottom">
            language : {details.original_language}
            </p>
            <p className="card-text-details border-bottom">
                MetaScore : {details.vote_average}
            </p>
            <div>
                <h4>The stroy : </h4>
                <p>
                    {details.overview}
                </p>
            </div>
        </div>

    <Link to='/'>
        <button className='btn butn text-white'>Back home</button>
    </Link>
        <button className='btn butn'><a href={details.homepage}>Watch film</a></button>
        
    </div>
     
  )
}

export default FilmDetail