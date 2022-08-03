import { ALLMOVIES } from "../types/types"
export const getAllMoviess = () => {
    const data = [1, 2, 3, 4];
    return {
        type: ALLMOVIES,
        data: data,
        pages: 0
    }
}