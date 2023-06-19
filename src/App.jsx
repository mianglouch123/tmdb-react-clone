import React from 'react'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MovieById from './pages/MovieById'
import FavoriteMovies from './pages/FavoriteMovies'
import SearchMovies from './pages/SearchMovies'

const App = () => (

  
  <BrowserRouter>
   
  
    <div className='h-screen w-full bg-[#000000] flex flex-col'>
  <Routes>
  <Route path='/' exact element={<HomePage />}></Route>
  <Route path='/movie/:id' exact element={<MovieById />}></Route>
  <Route path='/favoriteMovies' exact element={<FavoriteMovies />}></Route>
  <Route path='/searchMovies' exact element={<SearchMovies />}></Route>


  </Routes>
  </div>
  
  </BrowserRouter>
)


  

export default App
