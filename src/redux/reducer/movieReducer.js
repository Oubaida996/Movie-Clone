import { ALLMOVIES, SEARCH } from '../types/types';
const initState = {
    movies: [],
    noOfPage: 1
}

export const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ALLMOVIES:
            return { movies: action.data, noOfpage: action.noOfPage }
        case SEARCH:
            console.log(action.data);
            return { movies: action.data, noOfpage: action.noOfPage }
        default:
            return state;
    }
}