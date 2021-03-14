import React,{useEffect , useState} from 'react';
import ReactPlayer from 'react-player';


const MovieDesc = ({match,movies}) => {

const [myfilm , setFilm]= useState({})

useEffect(() => {

    setFilm(movies.find(el=> el.id === +match.params.id))
  
}, [])


    return (
        <div>
            <h1 style={{color:"red"}}> {myfilm.name}</h1>
            <ReactPlayer style={{marginTop:40,marginLeft:340}} url={myfilm.trailerPage} />
        </div>
    )
}

export default MovieDesc
