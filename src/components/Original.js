import React from 'react'
import { useEffect,useState } from 'react';
import axios from '../axios';
import "../css/Row.css"; 
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'


const base = "https://image.tmdb.org/t/p/original/"

function Original({title,fetchUrl}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
 
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
         
            return request
        }
        fetchData();
    }, [fetchUrl]);
 
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleClick = (movie) => {

        console.log(movie.name)
        if(trailerUrl){
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || movie?.original_title|| movie?.original_name||"")
            .then((Url) => {
              const urlParams = new URLSearchParams(new URL(Url).search)
              setTrailerUrl(urlParams.get('v')) 
            })
            .catch((error)=>console.log(error));
        }
    }

    return (
        <div class="row">
            <h2>{title}</h2>
            <div class="row__posters">
                {movies.map(movie => 
                    <img  key ={movie.id} class="row__poster" src={base+movie.poster_path} alt={movie.name} onClick={()=>handleClick(movie)}/>
               
                
                )}
              
            </div>
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Original
