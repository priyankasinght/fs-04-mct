import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css'

const MovieDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    id: 0,
    title: "",
    overview: "",
    poster_path: "",
    vote_average: 0,
    release_date: "",
    runtime: 0,
    genres: [],
  });

  const API_KEY = '475aef2ec41986e38a57bff00b6c53d0'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (

    <div className='movieDetailCard'>
      <div className='leftMoviedetail'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
          className="poster"
        />
      </div>
      <div className="rightMoviedetail">
        <h1 className="title">{data.title}</h1>
        <p className="rating">{data.vote_average}⭐</p>
        <p className="genres">{data.genres.map(genre => genre.name).join(", ")}</p>
        <p className="release-date">{data.release_date} | {Math.floor(data.runtime / 60)}Hrs {data.runtime % 60}Mins | {Math.floor(data.vote_average)}+</p>
        <p className="overview">{data.overview}</p>
        <h3 className="relatedMoviesTitle">Related Movies</h3>
      </div>
    </div>
  )
}

export default MovieDetail;