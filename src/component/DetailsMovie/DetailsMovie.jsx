import React from 'react';
import './DetailsMovie.scss';
import { useLocation } from 'react-router-dom';
import Text from '../CardMovie/Text';

export default function DetailsMovie() {
    const location = useLocation();
    return (

        <div className='DetailsMovie' >
            {/* {console.log('location >>>>>', location.state.id)} */}
            < div className='kContent' >
                <div className='kImage'>
                    <img src={`https://image.tmdb.org/t/p/w500${location.state.poster_path}`} alt="img" />
                </div>
                <div className='kInfo'>
                    <div className='kTitle'>
                        <h3>{location.state.title}</h3>
                    </div>
                    <Text text={`Release Date : ${location.state.release_date}`} />
                    <Text text={`Vote Count : ${location.state.vote_count}`} />
                    <Text text={`Vote Average : ${location.state.vote_average}`} />



                </div>
            </div >
            <div className='kOverview'>
                <h3>Overview</h3>
                <p>{location.state.overview}</p>
            </div>
        </div >
    )
}
