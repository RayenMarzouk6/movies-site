import React from 'react'
import './Films.css'
import { Link } from 'react-router-dom'

import {linkImg} from '../../redux/types/moviesType.js'

const Films = ({item}) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 mb-4 cardd">
      <Link to={`/movie/${item.id}`}>
        <div className="card">
          <img src={linkImg + item.poster_path} alt="poster_path" className="card-img-top" />
          <div className='card_overlay'>
            <div className='overlay_text text-center w-100 p-2'>
              <p>{item.title}</p>
              <p>{item.release_date}</p>
              <p>{item.original_language}</p>
              <p>{item.vote_average}</p>
            </div>  
          </div>  
        </div>
      </Link>
    </div>
  )
}

export default Films
