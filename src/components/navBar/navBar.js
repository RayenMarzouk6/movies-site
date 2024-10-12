import React, { useState } from 'react'
import './navBar.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { AllMovies } from '../../redux/types/moviesType'
import { getAllMovie, getMovieBySearch } from '../../redux/actions/movieAction'



const NavBar = () => {
  const [search , setSearch] = useState('')
 

  const handelSearch = (e)=>{
    const event = e.target.value;
    setSearch(event) 
    console.log(search);
    
  }

  const dispatch = useDispatch()

  const newDataFiltred = async(w)=>{
    try{
      if(search === "" ){
        dispatch(getAllMovie())
      }else{
        dispatch(getMovieBySearch(search))
        setSearch('')
      }
    }
    catch(err){
      console.error("rayen , the error : " + err)
    }
  }

  return (
    <nav>
        <h5>
            Movie <span>   </span>
            <img src="https://icon-library.com/images/movies-icon-png/movies-icon-png-8.jpg" alt='logo'/>
        </h5>
        <div className="search" >
            <input className='searchInput' type="text" placeholder="search ..." value={search} onChange={handelSearch}/>
            <button className='searchButton' onClick={()=>newDataFiltred(search)}>Search</button>
        </div>
    </nav>
  )
}

export default NavBar