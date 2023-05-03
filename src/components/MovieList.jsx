import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const MovieList = ({ movies }) => {
    return (
        <div className='movie-list'>
            {movies.map((movie) => (
                <div key={movie.id} className='movie-card' >
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' className='movie-img' />
                    <h5 style={{ margin: "6px", }}>{movie.title}</h5>
                    <h5 style={{ color: "gray", margin: "2px" }}>⭐{movie.vote_average}</h5>
                    <button className='see-detail'>
                        <Link className='detail-link' to={`/Moviedetail/${movie.id}`} >see details...</Link>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default MovieList;