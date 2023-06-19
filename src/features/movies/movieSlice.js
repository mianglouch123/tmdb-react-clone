import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

const BASE_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
   
    const options = {
         method: 'GET',
         headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWUyOTAwNzYxMjE5ZDEzYzE4YzA2MzE4MDU5MzIwMCIsInN1YiI6IjY0OGIzNWQ0YzNjODkxMDBhZTRmN2RhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kA1NxSK6ajz333Xzb2-BhFZQxCqJBwnwWALd1JuVYqw'
     }
    }

    const response = await fetch(BASE_URL, options )
    const data = await response.json()

    return data.results;
})

export const fetchMovieById = createAsyncThunk("movies/fetchMoviesById", async (id) => {
   
    const options = {
         method: 'GET',
         headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWUyOTAwNzYxMjE5ZDEzYzE4YzA2MzE4MDU5MzIwMCIsInN1YiI6IjY0OGIzNWQ0YzNjODkxMDBhZTRmN2RhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kA1NxSK6ajz333Xzb2-BhFZQxCqJBwnwWALd1JuVYqw'
     }
    }

    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options )
    const data = await response.json()

    return data.results;
})



const initialState = {
    movies : [],
    favoriteMovies : [],
    status: null,
    error: null,
}
export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addFavoriteMovies:(state, {payload}) => {
            const findMovie = state.favoriteMovies.find((movie) => movie.id === Number(payload.id));
            if(!findMovie){
                state.favoriteMovies = state.favoriteMovies.concat(payload);
                localStorage.setItem('favoriteMovies' , JSON.stringify(state.favoriteMovies))
                window.alert('movie added')
            }else{
                window.alert('this movie its has been added');
            }
         
          
        },
    
    },
    extraReducers(builder){
        builder
        .addCase(fetchMovies.pending, (state, {payload}) => {
            state.status = "loading"
        })
        .addCase(fetchMovies.fulfilled, (state, {payload}) => {
            state.status = "succeeded"
            state.movies = state.movies.concat(payload);
        })
        .addCase(fetchMovies.rejected, (state, {payload}) => {
            state.status = "failed"
            state.error = payload
        })

        builder
        .addCase(fetchMovieById.pending, (state, {payload}) => {
            state.status = "loading"
        })
        .addCase(fetchMovieById.fulfilled, (state, {payload}) => {
            state.status = "succeeded"
            state.movies = state.movies.concat(payload);
        })
        .addCase(fetchMovieById.rejected, (state, {payload}) => {
            state.status = "failed"
            state.error = payload
        })

        

        
    }
})

export const { addMovies , addFavoriteMovies } = moviesSlice.actions

export default moviesSlice.reducer