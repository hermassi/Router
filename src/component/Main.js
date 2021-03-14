import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import AddMovie from "../component/AddMovie/AddMovie"
const Main = ({ movies , AddNewMovie}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movies.map((el, i) => (
        <MovieCard movie={el} key={i}/>
      ))}
      <AddMovie AddNewMovie={AddNewMovie} />
     
    </div>
  );
};

export default Main;