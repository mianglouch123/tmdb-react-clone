import { Link } from "react-router-dom"
import RatingStar from "./RatingStar"


function MovieCard({movie}){
return (

  <Link to={`/movie/${movie.id.toString()}`}>
   <div className="flex flex-col h-[500px] w-[230px] bg-[#1a1a1a] rounded-[5px]">
    <div className="">
    <img className=' h-[300px] object-cover w-full transition duration-300 hover:opacity-30 ' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
    </div>

    <div className="flex gap-4 items-center justify-center pt-4">
    <div className="flex items-center justify-center  gap-1 text-[#bbbbbb] font-semibold">
      <RatingStar />
      <p>{movie.vote_average}</p>

    </div>

    <div className="text-[#bbbbbb]">
      <p>{movie.vote_count + ' ' + 'counts'}</p>
    </div>
   </div>

   <div className="flex items-center justify-center pt-2 text-[#FFFFFF]">
    <p className="font-bold">{movie.title}</p>
   </div>

   <div className="flex mt-4 justify-center text-[#5799ef] bg-[#2c2c2c]">
  <p className="font-bold text-[17px]"> + lista de seguimi...</p>
   </div>

   <div className="flex items-center justify-center gap-4 mt-4">
    <img className="h-[20px] w-[20px]"  src="/icon.svg" alt="" />
    <p className="text-[#FFFFFF] font-bold">Play</p>
   </div>
  
   </div>
  </Link>
  
)


}

export default MovieCard