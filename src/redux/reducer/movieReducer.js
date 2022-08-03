import { ALLMOVIES } from '../types/types';
const initState = {
    movies: [],
    pageCount: 0
}

export const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ALLMOVIES:
            return { movies: action.data }
        default:
            return state;
    }
}