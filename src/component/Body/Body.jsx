import React from 'react'
import './Body.scss'
import CardMovie from '../CardMovie/CardMovie';

export default function Body({ movies }) {



    return (

        movies && <div className='kBody'>
            {movies.map((movie, indx) => {
                return <CardMovie key={indx} movie={movie} />
            })}
        </div > || <div className='loading'>loading</div>
    )
}
