import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useSelector , useDispatch } from "react-redux";
import { fetchMovies , addFavoriteMovies, fetchMovieById } from "../features/movies/movieSlice";
import RatingStar from '../components/RatingStar';
import MovieCard from '../components/movieCard';

function MovieById(){
    const [isFavorite, setIsFavorite] = useState(null)
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate()
    
    useEffect(() => {
     dispatch(fetchMovieById(id))
    }, [])

    const movies = useSelector((state) => state.movies.movies)
    const findMovie = movies.find((movie) => movie.id === Number(id));
     
    const handleAddFavoriteMovie = (e, movie) => {
        e.preventDefault();
        dispatch(addFavoriteMovies(movie))
    }
    
   const favoriteMovies = useSelector((state) => state.movies.favoriteMovies)
   console.log(findMovie)



    return (
        <div className=' h-[3000px] bg-[#000000] py-4 w-full flex flex-col'>
          
        <div className='flex justify-between items-center pt-4 px-4 cursor-pointer'>
        <h1 onClick={()=> navigate(-1)} className='text-white text-4xl md:text-5xl'> ← </h1>
        <img onClick={(e) => handleAddFavoriteMovie(e , {...findMovie, favorite : true})} className={`${isFavorite ? 'bg-red-500' : ''}  h-[25px] w-[25px]`} src="/add_favorite.png" alt="" />
        </div>

        <div className='flex flex-col justify-center items-center pt-8'>

            <div>
                <img className='h-[535px] object-cover rounded-[35px] md:rounded-none' src={`https://image.tmdb.org/t/p/w500${findMovie.poster_path || findMovie.backdrop_path}`} alt="" />
            </div>

            <div className='flex flex-col pt-6 items-center justify-center'>
            
             <h4 className='text-2xl font-semibold text-white'>{findMovie.title}</h4>
             <div className='mt-8 w-[500px] h-[1px] bg-slate-600'></div>
            
                        
            </div>

            </div>

            <div className='text-white flex flex-col md:items-center  px-12 pt-8 gap-4'>

            <h4 className='text-[22px] font-bold'>Story line</h4>
             <p className='text-[#A5A5A5] text-[20px]'>{findMovie.overview}</p>

             <div className='flex justify-evenly items-center gap-4'>
            
            <div className='flex items-center justify-center gap-4 cursor-pointer'>
                <img className='h-[35px] w-[35px]' src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Like-icon.png" alt="" />
                <span className='text-[#A5A5A5] text-[18px] font-bold'>{findMovie.vote_count} vouts</span>
            </div>

            <div className='flex items-center justify-center gap-4'>
                <RatingStar/>
                <span className='text-[#A5A5A5] font-bold text-[18px]'>{parseFloat(findMovie.vote_average).toFixed(1)}</span>
            </div>

            

             </div>

             <div className='flex flex-col items-center justify-center '>
              
              <h3 className='text-white font-bold text-2xl mt-4'>Recommend</h3>
              
              <div className="mt-6 grid grid-cols-2 gap-6 md:flex md:justify-center">
              {movies.length > 0 && movies.slice(30,35).map((movie, i) => (
                <MovieCard key={i} movie={movie}/>
              ))}
              </div>
            </div>
             
            </div>

            


        </div>
    )
}

export default MovieById