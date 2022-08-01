import React, { useEffect, useState } from 'react';
import './DetailsMovie.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DetailsMovie() {
    const location = useLocation();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        const api = `https://api.themoviedb.org/3/movie/${location.state.id}?api_key=76495f291e5b44a1dae4fa6877a17d91&language=en-US`;
        const res = await fetch(api);
        const data = await res.json();
        console.log(data);
        setMovie(data);
    }


    useEffect(() => {
        getMovie();
    }, []);
    return (

        <div className='DetailsMovie' >
            {/* {console.log('location >>>>>', location.state.id)} */}
            < div className='kContent' >
                <div className='kImage'>
                    <img src={`https://image.tmdb.org/t/p/w500${location.state.poster_path}`} alt="img" />
                </div>
                <div className='kInfo'>
                    <h3>{location.state.title}</h3>
                    <p><strong>Release Date :</strong>{` ${location.state.release_date}`}</p>
                    <p><strong>Vote Count :</strong>{` ${location.state.vote_count}`}</p>
                    <p><strong>Vote Average :</strong>{` ${location.state.vote_average}`}</p>
                </div>
            </div >
            <div className='kOverview'>
                <h3>Overview</h3>
                <p>{location.state.overview}</p>
            </div>
            <div className='kButtons'>

                <button onClick={() => { navigate(`/`) }}>Home</button>
                {movie && <a href={`${movie.homepage}`} target='_blank' ><button >Play</button></a>}
            </div>
        </div >
    )
}
