import './App.css';
import React, { useState } from 'react';
import Main from './component/Main';
import { moviesData } from './component/MoviesData'
import Header from './component/Header/Header';
import { Route, Switch } from "react-router-dom";
import MovieDesc from './component/Description/MovieDesc';
function App(props) {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("")
  const AddNewMovie = (x) => {
    setMovies([...movies, x])
  }

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <Switch>
        {/* <Route exact path="/" > */}
        
          <Route exact path="/" render={(props) => (<Main {...props} movies={movies}  movies={movies.filter((el) =>
            el.name.toLowerCase().includes(search.trim()))}
            AddNewMovie={AddNewMovie} />)} />


            <Route path="/movies/:id" render={(props)=> <MovieDesc movies={movies} {...props} />}/>
            

            
     </Switch>
    
    </div>
  );
}

export default App;
