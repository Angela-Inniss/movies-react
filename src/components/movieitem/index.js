import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import "../../css/movieItem.scss";
import Modal from "../modal/modal";

export default class MovieItem extends React.Component {
  render() {
    const {
      title,
      overview,
      rating,
      release,
      poster,
      movieGenres,
      onMovieClick,
    } = this.props;
    // console.log(showMovieDetails);
    return (
      // The MovieItemWrapper must be linked to the movie details popup
      <MovieItemWrapper onClick={onMovieClick}>
        <LeftCont>
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w500${poster}`}
          />
        </LeftCont>
        <RightCont>
          <div className="movie-title-container">
            <h2 className="movie-title">{title}</h2>
            <Rating>{rating}</Rating>
          </div>
          {movieGenres && <div>{movieGenres.join(" ")}</div>}

          <p>{overview}</p>
          <p>{release}</p>
        </RightCont>
      </MovieItemWrapper>
    );
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: flex; // added flex on each movie
  padding:20px
  border: 1px solid grey;
  margin:10px;
`;

const LeftCont = styled.div`
  display: inline-block;
  // width:100%
  margin-right: 20px;
`;

const RightCont = styled.div`
  display: inline-block;
  flex: 1; // to make the right side of the content take up the most room when there is space left
`;
const Rating = styled.p`
  background-color: ${colors.primaryColor};
  color: ${colors.lightBackground};
  margin: 0;
  border-radius: 9px;
  text-align: center;
  width: 25px;
  font-weight: bold;
  padding: 5px;
`;

// me: how am i using props with no props at top... Props come from react import.
