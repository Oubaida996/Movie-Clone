import React from 'react'
import './Body.scss'
import CardMovie from '../CardMovie/CardMovie';
import BasicPagination from '../Pagination/Pagination';

export default function Body({ movies, handlePageChange }) {



    return (

        movies && <div className='kBody'>
            <div className='kContent'>
                {movies.map((movie, indx) => {
                    return <CardMovie key={indx} movie={movie} />
                })}
            </div>
            <BasicPagination handlePageChange={handlePageChange} />
        </div > || <div className='loading'>loading</div>
    )
}
