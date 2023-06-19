import React , {useEffect, useState} from 'react'
import { useSelector } from "react-redux"
import MovieCard from "./movieCard"
import { Link } from 'react-router-dom';
import { fetchMovies } from "../features/movies/movieSlice";
import { useDispatch } from 'react-redux';
import Loader from './Loader';

function Main(){
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    setLoading(true)
    dispatch(fetchMovies());
    setLoading(false)
    }, [])

    if(isLoading){
      <Loader />
    }
  
  

  const movies = useSelector((state) => state.movies.movies)
  console.log(movies)
    return (
        <div className="flex flex-col pt-10 bg-[#000000] ">

      <div className="flex px-6">
        <h4 className="text-white font-bold text-3xl md:text-4xl">Popular</h4>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-[18px] md:flex md:justify-center ">
      {movies.length > 0 && movies.slice( 0, 6).map((movie , i) => (
      <MovieCard key={i} movie={movie}/> 
      
      ))}
      </div>

      <div className="pt-6 px-6">
      <h4 className="text-white font-bold text-3xl md:text-4xl">You May Like</h4>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-[18px] md:flex md:justify-center ">
      {movies.length > 0 && movies.slice( 10, 16 ).map((movie , i) => (
        <MovieCard key={i} movie={movie} />
      ))}
      </div>

        </div>
    )
}

export default Main