import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../store/moviesSlice';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import MovieList from './MovieList';

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    dispatch(fetchMovies('action'));
  }, [dispatch]);

  const handleSearch = (movieGenre) => {
    dispatch(fetchMovies(movieGenre));
  };

  return (
    <div className='home-container'>
      <SearchBar onSearch={handleSearch} />
      <div className='main-content'>
        <Sidebar onGenreSelect={handleSearch} />
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Error fetching movies.</div>}
        {status === 'succeeded' && <MovieList movies={movies} />}
      </div>
    </div>
  );
};

export default HomePage;
