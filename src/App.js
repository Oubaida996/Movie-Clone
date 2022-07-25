import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
import axios from 'axios';
import BasicPagination from './component/Pagination/Pagination';
import Footer from './component/Footer/Footer';
function App() {

  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);

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
  }, [page]);

  return (
    <div className="App">
      <Header search={search} />
      <Body movies={movies} />
      <BasicPagination handlePageChange={handlePageChange} />
      <Footer />
    </div>
  );
}

export default App;
