import React from "react";
import { NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie, idx) => (
      <NavLink
        to={`/movies/${movie.id}`}
        activeClassName="saved-active"
        className="saved-movie"
        key={idx}
      >
        {movie.title}
      </NavLink>
    ))}
    <NavLink to="/" className="home-button">
      Home
    </NavLink>
  </div>
);

export default SavedList;
