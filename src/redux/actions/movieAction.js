import axios from 'axios'
import {AllMovies, allMovieAPI} from '../types/moviesType'


// without async await
export const getAllMovie =  ()=>{
    return  async (dispatch)=>{
        const allMovie =  await axios.get(allMovieAPI)
        dispatch({type : AllMovies , data : allMovie.data.results , pages :allMovie.data.total_pages })

    }
}

export const getMovieBySearch = (word)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=d0479c49cb948d6ad0bb103813fe9e3c`) 
        dispatch({type : AllMovies , data : res.data.results , pages : res.data.total_pages})
    }
}


// export const getPageCount = async(page)=>{
//     return async(dispatch)=>{
//         const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d0479c49cb948d6ad0bb103813fe9e3c&language=an&page=${page}`) 
//         dispatch({type : AllMovies , data : res.data.results , pages : res.data.total_pages})
      
//     }
// }

export const getPageCount = (page) => {
    return async (dispatch) => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=d0479c49cb948d6ad0bb103813fe9e3c&language=an&page=${page}`
        );
        dispatch({
          type: AllMovies, // Ensure this is the correct action type
          data: res.data.results,
          pages: res.data.total_pages,
        });
      } catch (error) {
        console.error("Error fetching page count:", error);
      }
    };
  };
  




