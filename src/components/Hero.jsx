import React, { useState , useCallback , useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchMovies } from "../features/movies/movieSlice";
import BannerCard from './BannerCard';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
 function Hero () {

  const [isLoading, setLoading] = useState(false)
  
  const dispatch = useDispatch()
  
  const user = "Miguel Angel"
 

  
  
  useEffect(() => {
  setLoading(true)
  dispatch(fetchMovies());
  setLoading(false)

  }, [])

  if(isLoading){
    return <Loader />
  }



    return (
   
   <div className='flex flex-col pt-8 bg-[#000000]'>
  
  <div className='text-white px-8 font-bold'>
  
   <h3 className='sm:text-[25px] text-[22px]'> HI , {user.toUpperCase()}</h3>
 
  </div>
  
  <div className='text-white flex items-center justify-center'>
  <Navbar />
  </div>

  <BannerCard />
   </div>
   

  


  
  )
}

export default Hero
