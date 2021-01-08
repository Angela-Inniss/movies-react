import React from "react";
import styled from "styled-components";
import MovieItem from "../movieitem";

export default class MovieList extends React.Component {
  render() {
    const { movies, genres } = this.props;

    return (
      <>
        {/* Finish the MovieItem component and use it here to display the movie results */}
        <MoviesWrapper>
          {movies.map((movie) => {
            const {
              title,
              vote_average,
              overview,
              release_date,
              poster_path,
            } = movie;
            return (
              <MovieItem
                title={title}
                rating={vote_average}
                overview={overview}
                release={release_date}
                poster={poster_path}
              />
            );
          })}
          {/*{genres.map((genre)=>{*/}
          {/*    return <div>{genre.id} {genre.name}</div>*/}
          {/*})}*/}
          {genres}
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
`;

// each movie in movies will be an object i think when come back from api
