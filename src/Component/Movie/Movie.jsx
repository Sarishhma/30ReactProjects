import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [page,setpage]=useState(1);
  const [totalPages,setTotalPages]=useState(1);
  const [loading,setloading]=useState(false);
const [search,setsearch]=useState('');
const[issearch,setissearch]=useState('')
  const API_KEY = import.meta.env.VITE_MOVIE;
  
    const fetchMovies = async (pageNumber = 1,queryText="") => {
      setloading(true);
      try {
        const url = queryText
        ? "https://api.themoviedb.org/3/search/movie"
        : "https://api.themoviedb.org/3/movie/popular";
        const res = await axios.get( url,{
            params: {
              api_key: API_KEY,
             ...(queryText && {query :queryText}),
              page: pageNumber,
            },
          }
        );
       
        setMovies(res.data.results); 
        setTotalPages(res.data.total_pages)
        setpage(pageNumber)
        setError('')
      
      } catch (err) {
        setError(err.message);
      }finally{
        setloading(false)
      }
    };

useEffect(() => {
    fetchMovies(page,issearch ? search:"");
  }, [page]);

  const handlesearch=()=>{
    setissearch(true);
    fetchMovies(1,search);
  }
  const handlereset=()=>{
    setissearch(false);
    setsearch("")
    fetchMovies(1,"")
  }


 

  return (
    <div>
      <input type="text" placeholder="search for movies" value={search} onChange={(e)=>setsearch(e.target.value)}/>
      <button onClick={handlesearch}>Search</button>
      {issearch && <button onClick={handlereset}>Reset</button> }
      {error && <div>{error}</div> }
      {movies.map((m) => (
        <div key={m.id}>
          <h1>{m.title}</h1>
          {m.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
              alt={m.title}
            />
           
          )}
           <p>{m.genre_ids?.join(", ")}</p>
        </div>

      ))}
  <div style={{ marginTop: "20px" }}>
      <button
        onClick={() => setpage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => setpage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
    </div>
  );
}
