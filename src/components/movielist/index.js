import React from "react";
import styled from "styled-components";
import MovieItem from "../movieitem";

export default class MovieList extends React.Component {
  render() {
    const { movies, genres, openModal } = this.props;
    const matchGenres = (movieGenreIds) => {
      return genres
        .filter((genre) => {
          return movieGenreIds.includes(genre.id);
        })
        .map((genre) => genre.name);
    };

    // console.log(movies); // this is empty on first render of the page [] then once componentDidMount runs it fetches the movies - see console
    return (
      <>
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
                  onMovieClick={() => openModal(movie)}
                />
              );

            })}
        </MoviesWrapper>
      </>
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

// modal: https://codesandbox.io/s/awesome-williamson-v7tug?file=/src/App.js
//when i click on this movie i want to 1. open a modal
// the modal must have movie inside
//
