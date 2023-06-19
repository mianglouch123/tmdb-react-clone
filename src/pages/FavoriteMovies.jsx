import React , { useEffect, useState } from 'react'
import MovieCard from '../components/movieCard';
import Navbar from '../components/Navbar';
function FavoriteMovies(){
    const [favoriteMovies , addFavoriteMovies] = useState([]);
   useEffect(() => {
    const movies = localStorage.getItem('favoriteMovies')
    if(movies){
        addFavoriteMovies(JSON.parse(movies));
    }
   }, [])

    return (
        <div className='h-container py-4 bg-[#000000] w-full flex flex-col'>
        
       

         <h4 className='text-2xl text-white font-bold mt-6 px-4'>All saved</h4>

         <div className='text-white flex items-center justify-center'>
        
        <Navbar />
        
        </div>
         <div className=' md:flex items-center justify-center mt-12 px-2 gap-6'>
         {favoriteMovies.map((movie, i) => (
          <MovieCard movie={movie} key={i} />
         ))}
         </div>

        </div>
    )
}

export default FavoriteMovies