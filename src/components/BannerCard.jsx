// import ButtonPlay from "./ButtonPlay"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function BannerCard(){

    const movies = useSelector((state) => state.movies.movies);
    
    
    return (
    <div className='relative cursor-pointer flex items-center justify-center pt-2'>
         <img  className='h-0 md:h-10 z-10 px-4 absolute left-0 hover:opacity-75' src="/left.svg" alt="left arrow" />
         <img className='h-0 md:h-10 z-10 px-4 absolute right-0 hover:opacity-75' src="/right.svg" alt="right arrow" />

          <Swiper spaceBetween={50} slidesPerView={3}>
        {movies.length > 0 && movies.slice(10,30).map((movie, i) => (
            <SwiperSlide key={i}>
                <Link to={`movie/${movie.id}`}>
                <div className='group  flex flex-col pt-4 px-4'>
                
                <div className=' relative  '>
                <img className='h-[250px] w-[750px] md:h-[250px] md:w-[550px] object-cover rounded-[3px]  transition duration-300 hover:opacity-30 ' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
                </div>
                
                <div className='group-hover:opacity-0 shadow-md mt-1 py-2 rounded-[25px] flex flex-col bg-[#141414]/50 text-[#ffffff] absolute px-4 text-1xl md:text-[17px] font-semibold'>
                    <p>Popular</p>
                </div>

                <div className='absolute bottom-0 mb-[30px] shadow-md px-4 text-1xl font-semibold '>
                    <p className='transition text-2xl duration-300 opacity-0 group-hover:opacity-75 text-[#FFFFFF]'>{movie.title}</p>
                </div>
                </div>
                </Link>
            </SwiperSlide>

        ))}
              
           </Swiper>

           
    </div>
       
    )
}

export default BannerCard