import React, { useState, useEffect } from 'react'
import './Body.scss'
import CardMovie from '../CardMovie/CardMovie';
import BasicPagination from '../Pagination/Pagination';
import { getAllMovies } from '../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';


export default function Body() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);

    const moviesArr = useSelector((state) => state.movies);


    useEffect(() => {
        dispatch(getAllMovies(page));
        // console.log('useEffect 1');
    }, [page]);


    useEffect(() => {
        setMovies(moviesArr.movies);
        // console.log('useEffect 2');
    }, [moviesArr]);


    const handlePageChange = (noOfPage) => {
        setPage(noOfPage);
    }

    return (

        movies && <div className='kBody'>
            {/* {console.log(movies)} */}
            <div className='kContent'>
                {movies.map((movie, indx) => {
                    return <CardMovie key={indx} movie={movie} />
                })}
            </div>
            <BasicPagination handlePageChange={handlePageChange} />
        </div > || <div className='loading'>loading</div>
    )
}
