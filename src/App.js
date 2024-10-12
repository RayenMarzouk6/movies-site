import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar';
import FilmList from './components/FilmList/FilmList';
import FilmDetail from './components/FilmDetail/FilmDetail';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import {getAllMovie} from './redux/actions/movieAction'
//4-
import { useSelector , useDispatch } from 'react-redux';

function App() {
  const [items, setItems] = useState([]);
  const [option, setOption] = useState('movie');
  const [language, setLanguage] = useState('en');
  const [page, setPage] = useState('1');
  const [totalPageNumber, setTotalPageNumber] = useState();



  


  // const getData = async () => {
  //   try {
  //     // const response = getAllMovie()
  //     setItems(response.data.results);
  //     setTotalPageNumber(response.data.total_pages);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };



  


  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route
            path='/'
            element={
              <FilmList
                // option={option}
                // setOption={setOption}
                // setLanguage={setLanguage}
                // setPage={setPage}
                // totalPageNumber={totalPageNumber}
              />
            }
          />
          <Route path='/movie/:id' element={<FilmDetail  items={items} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
