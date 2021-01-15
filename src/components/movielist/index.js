import React from "react";
import styled from "styled-components";
import MovieItem from "../movieitem";

export default class MovieList extends React.Component {
  render() {
    const { movies, genres, onMovieClick, showMovieDetails } = this.props;
    const matchGenres = (movieGenreIds) => {
      return genres
        .filter((genre) => {
          return movieGenreIds.includes(genre.id);
        })
        .map((genre) => genre.name);
    };
    console.log(movies);
    return (
      <MoviesWrapper>
        {movies.results &&
          movies.results.map((movie, index) => {
            const {
              title,
              vote_average,
              overview,
              release_date,
              poster_path,
              genre_ids,
            } = movie;
            return (
              <MovieItem
                key={index}
                title={title}
                rating={vote_average}
                overview={overview}
                release={release_date}
                poster={poster_path}
                movieGenres={matchGenres(genre_ids)}
                onMovieClick={onMovieClick}
                showMovieDetails={this.props.showMovieDetailsModal}
              />
            );
          })}
      </MoviesWrapper>
    );
  }
}

const MoviesWrapper = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  border: green 1px solid;
  margin-top: 10px;
  margin-bottom: 10px;
`;

// each movie in movies will be an object i think when come back from api
{
  /* Finish the MovieItem component and use it here to display the movie results */
}
