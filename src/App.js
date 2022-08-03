import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMoviess } from './redux/actions/actions';
import './App.css';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/Footer/Footer';
import DetailsMovie from './component/DetailsMovie/DetailsMovie';
function App() {
  const dispatch = useDispatch();
  const moviesArr = useSelector(state => state.movies);
  console.log(moviesArr);
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [mount, setMount] = useState(false)
  //============Start get data from api by axios
  const getAllMovies = async () => {
    const apiKey = `https://api.themoviedb.org/3/movie/popular?api_key=76495f291e5b44a1dae4fa6877a17d91&page=${page}`;
    const res = await axios.get(apiKey);
    console.log(res.data.results);
    setMovies(res.data.results);

  }
  //============End get data from api by axios

  const search = async (searchTitle) => {
    if (!searchTitle) {
      getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=76495f291e5b44a1dae4fa6877a17d91&query=${searchTitle}&page=${page}`);
      console.log(res.data.results);
      setMovies(res.data.results);
    }
  }

  const handlePageChange = (noOfPage) => {
    setPage(noOfPage);
  }

  useEffect(() => {
    getAllMovies();
    dispatch(getAllMoviess());
  }, [page]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header search={search} />
        <Routes>
          <Route path="/" element={<Body movies={movies} handlePageChange={handlePageChange} />} />
          <Route path="details/:id" element={<DetailsMovie />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
