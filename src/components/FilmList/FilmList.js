import React, { useEffect, useState } from 'react';
import './FilmList.css';
import Films from '../FilmsCard/Films.js';
import PaginationCompo from '../Pagination/Pagination.js';

/**/import { useDispatch, useSelector } from 'react-redux';
/**/import { getAllMovie } from '../../redux/actions/movieAction.js';

const FilmList = () => {
  // Redux for get all movie 
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);

  const dataMovies = useSelector((state) => state.movies);
  
  useEffect(() => {
    setItems(dataMovies);
  }, [dataMovies]);

  return (
    <div className="container">
      {/* Section des films */}
      <div className="row">
        {items.length > 0 ? (
          items.map((item) => {
            return (
              <div className='col-lg-2 col-md-3 col-sm-4' key={item.id}>
                <Films item={item} />
              </div>
            );
          })
        ) : (
          <h3>No data found ♥♪☺</h3>
        )}
        <PaginationCompo />
      </div>
    </div>
  );
}

export default FilmList;
