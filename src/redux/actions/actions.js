import { ALLMOVIES, APIKEY, SEARCH } from "../types/types"
import axios from 'axios';

export const getAllMovies = (page) => {
    const apiKey = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&page=${page}`;
    return async (dispatch) => {
        const res = await axios.get(apiKey);
        // console.log(res);
        dispatch({
            type: ALLMOVIES,
            data: res.data.results,
            noOfPage: page
        });
    }

}

// &page=${page}
export const searchMovies = (searchTitle, page) => {
    const apiKey = `https://api.themoviedb.org/3/search/movie?api_key=76495f291e5b44a1dae4fa6877a17d91&language=en-US&page=${page}&query=${searchTitle}`;
    console.log(apiKey);
    return async (dispatch) => {
        const res = await axios.get(apiKey);
        console.log(res.data.results);
        dispatch({
            type: SEARCH,
            data: res.data.results,
            noOfPage: page
        })
    }
}


