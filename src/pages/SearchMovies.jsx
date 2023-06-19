import { useState } from "react"
import Loader from "../components/Loader";
import MovieCard from "../components/movieCard";
import RatingStar from "../components/RatingStar";
import Navbar from "../components/Navbar";

function SearchMovies(){

    const [search, setSearch] = useState('');
    const [isLoading , setLoading] = useState(false);
    const [results , setResults] = useState([])
    
   


    const fetchMovies = async (q) => {
        setLoading(true)
        const options = {
             method: 'GET',
             headers: {
             accept: 'application/json',
             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWUyOTAwNzYxMjE5ZDEzYzE4YzA2MzE4MDU5MzIwMCIsInN1YiI6IjY0OGIzNWQ0YzNjODkxMDBhZTRmN2RhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kA1NxSK6ajz333Xzb2-BhFZQxCqJBwnwWALd1JuVYqw'
            }
          };
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=false&language=en-US&page=1`, options)
        const data = await response.json();
        console.log(data)
        setResults(data.results)
        setLoading(false)
    
    }

    const handleSearchMovie = (q) => {
        setSearch(q)
        const delayDebounceFn = setTimeout(() => {
            if (q) {
              fetchMovies(search);
            }else{
                setResults([])
            }
          }, 500);
      
          return () => {
            clearTimeout(delayDebounceFn);
          };
       

    
    }


    return (
       
       <div className="bg-[#000000] flex h-container py-4 flex-col justify-center  px-4 py-4">
    
      <h3 className="text-white font-bold text-2xl md:text-3xl pt-2">Hi ,Miguel Angel</h3>
       
       
      <div className='text-white flex items-center justify-center'>
        
        <Navbar />
        
        </div>
        <div className="flex flex-col md:justify-center items-center">
        
        <div className="flex justify-center items-center mt-8 h-[47px] rounded-[5px] w-[80%] md:w-[50%] bg-[#FFFFFF]">
         <input placeholder="Search movie" className="relative" onChange={(e) => handleSearchMovie(e.target.value)} value={search} className="outline-none bg-transparent border-none h-full w-full pl-8 text-black font-semibold" type="text" name="" id="" />
         <img className="h-[25px] w-[25px] mr-6" src="/search.svg" alt="search" alt="search icon svg" />
        </div>

        
        {isLoading && (
            <div className="mt-6">
                <Loader />
            </div>

        ) }

        <div className="pt-6">
            <div className="grid grid-cols-2 pt-8 md:grid-cols-4 gap-6">
                {results.map((movie , i) => (
                  <MovieCard key={i} movie={movie}/>
                ))}
            </div>
        </div>
    
        </div>
        </div>
    )
}

export default SearchMovies