const MOVIES = [
  {
    id: 0,
    category: "Action",
    imageUrl: "images/action.jpg",
  },
  {
    id: 1,
    category: "Drama",
    imageUrl: "images/drama.jpg"
  },
  {
    id: 2,
    category: "Romance",
    imageUrl: "images/romance.jpg"
  },
  {
    id: 3,
    category: "Thriller",
    imageUrl: "images/thriller.jpg"
  },
  {
    id: 4,
    category: "Western",
    imageUrl: "images/western.jpg"
  },
  {
    id: 5,
    category: "Horror",
    imageUrl: "images/horrer.jpg"
  },
  {
    category: "Fantasy",
    id: 6,
    imageUrl: "images/fantacy.jpg"
  },
  {
    category: "Fiction",
    id: 7,
    imageUrl: "images/fiction.jpg"
  },
  {
    category: "Music",
    id: 8,
    imageUrl: "images/music.jpg"
  },
];

import { useState } from "react";
import Box from "../components/Box";
import Chip from "../components/chip";
import { useNavigate } from "react-router-dom";
import danger from "../assets/danger.png"
import './Genera.css'

const COLORS = ["#FF5209", "#D7A4FF", "#148A08", "#84C2FF", "#902500", "#7358FF", "#FF4ADE", "#E61E32", "#6CD061"];


function Genera() {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const navigate = useNavigate();
  function handleNavigate() {
    if (selectedMovie.length < 3) return;
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
    navigate("/info");
  }
  return (
    <div className="main-container">
      <div className="left-section">
      <h1>Super app</h1>
      <p id="left-text">Choose your entertainment category</p>
      <div className="selected-movies-container">
        {selectedMovie.length > 0
          ? selectedMovie.map((movie, index) => {
              return (
                <Chip
                  selectedMovie={movie}
                  setSelectedMovie={setSelectedMovie}
                  key={index}
                />
              );
            })
          : null}
      </div>
      <p style={{
        color:"red",
        marginTop: "15px",
        display: selectedMovie.length < 3 ? "block" : "none"
      }}>
        <img src={danger} alt="image" id="danger" />
        &nbsp;&nbsp;Minimum 3 movies are required
      </p>

      </div>
      <div className="right-section"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {MOVIES.map((movie, index) => {
          return (
            <Box
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
              key={movie.id}
              data={movie}
              backgroundColor={COLORS[index % COLORS.length]} 
            />
          );
        })}
      </div>
      

      <button className="btn-nextPage"
        onClick={handleNavigate}
      >
        Next Page
      </button>
    </div>
  );
}

export default Genera