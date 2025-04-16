import React from "react";
import { Star, Plus } from "lucide-react";
import "./../styles/MovieGrid.css";

interface Movie {
  title: string;
  image: string;
  rating: number;
}

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <h3 className="movie-title">{movie.title}</h3>
          <div className="movie-rating">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className={i < movie.rating ? "filled-star" : "empty-star"} />
            ))}
          </div>
          <button className="add-button">
            <Plus />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
