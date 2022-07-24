import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
import axios from 'axios';
function App() {

  const [movies, setMovies] = useState(null);

  //============Start get data from api by axios
  const getAllMovies = async () => {
    const apiKey = 'https://api.themoviedb.org/3/movie/popular?api_key=76495f291e5b44a1dae4fa6877a17d91';
    const res = await axios.get(apiKey);
    console.log(res.data.results);
    setMovies(res.data.results);

  }
  //============End get data from api by axios

  const search = async (searchTitle) => {
    if (!searchTitle) {
      getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=76495f291e5b44a1dae4fa6877a17d91&query=${searchTitle}&page=1`);
      console.log(res.data.results);
      setMovies(res.data.results);
    }
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="App">
      <Header search={search} />
      <Body movies={movies} />


    </div>
  );
}

export default App;
