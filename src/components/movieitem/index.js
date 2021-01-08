import React from "react";
import styled from "styled-components";

import "../../css/movieItem.scss";

export default class MovieItem extends React.Component {
  render() {
    const { title, overview, rating, release, poster } = this.props;
    return (
      // The MovieItemWrapper must be linked to the movie details popup

      <MovieItemWrapper>
        <LeftCont>
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w500${poster}`}
          />
        </LeftCont>
        <RightCont>
          <div>
            <h2>{title}</h2>
            <p>{rating}</p>
            <p>{overview}</p>
            <p>{release}</p>
          </div>
        </RightCont>
      </MovieItemWrapper>
    );
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: flex;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: inline-block;
`;

// me: how am i using props with no props at top?!!
