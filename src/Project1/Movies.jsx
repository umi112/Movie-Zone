// Movies.js
import React, { useState } from "react";
import { movies } from "./data";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);

  const filterBycategory = (cat)=>{
      setMovieList(movies.filter((data)=>data.category== cat))
  }

  return (
    <>
      <div class="d-flex justify-content-center gap-3 mt-3">
        <button onClick={()=>setMovieList(movies)} type="button" className="btn btn-outline-primary">
          All
        </button>
        <button onClick={()=>filterBycategory('Action')} type="button" className="btn btn-outline-secondary">
          Action
        </button>
        <button  onClick={()=>filterBycategory('Thriller')}type="button" className="btn btn-outline-success">
          Thriller
        </button>
        <button onClick={()=>filterBycategory('Animation')} type="button" className="btn btn-outline-danger">
          Animation
        </button>
        <button onClick={()=>filterBycategory('Horror')} type="button" className="btn btn-outline-warning">
          Horor
        </button>
        <button  onClick={()=>filterBycategory('Drama')}type="button" className="btn btn-outline-info">
          Drama
        </button>
        <button onClick={()=>filterBycategory('Sci-Fi')} type="button" className="btn btn-outline-light">
          Sci-fi
        </button>
        
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          textAlign: "center",
          width: "1000px",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "200px" }} className="hover">
            <div>
              <img
                src={data.poster_path}
                style={{
                  width: "200px",
                  borderRadius: "5px",
                  border: "2px solid red",
                  height: "280px",
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <h5>{data.title}</h5>
              <p>{data.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
