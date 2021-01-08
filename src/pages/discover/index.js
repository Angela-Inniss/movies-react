import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import ExpandableFilters from "../../components/expandablefilters";

import {
  getMoviesFiltered,
  loadPopularMoviesAndGenres,
  getGenres,
} from "../../fetcher";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      year: 0,
      results: [],
      movieDetails: null,
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 },
      ],
      languageOptions: [
        { id: "GR", name: "Greek" },
        { id: "EN", name: "English" },
        { id: "RU", name: "Russian" },
        { id: "PO", name: "Polish" },
      ],
    };
  }

  // Write a function to preload the popular movies when page loads & get the movie genres // me pass the result to genreOptions above // use useeffect?

  // loads movies by popularity
  async loadMovies() {
    const movieResults = await loadPopularMoviesAndGenres();
    return movieResults;
  }

  // loads genres
  async getGenreList() {
    const genresResults = await getGenres();
    return genresResults;
  }

  // on page load this kicks off load movies api and genres api req
  componentDidMount() {
    this.loadMovies().then((response) => {
      console.log(response);
      this.setState({ results: response });
    });
    this.getGenreList().then((response) => {
      this.setState({ genreOptions: response.map((genre) => genre.name) });
    });
  }

  // Write a function to get the movie details based on the movie id taken from the URL.// me: something to do with useRoute probably TODO

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  async searchMovies(keyword, year) {
    const response = await getMoviesFiltered(keyword, year);
    console.log(response); // filtered response
  }

  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
      movieDetails,
    } = this.state;

    return (
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle>
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          />
        </MovieFilters>
        {/*<ExpandableFilters movieGenres={genreOptions} />*/}
        <MovieResults>
          {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
          <MovieList movies={results || []} genres={genreOptions || []} />
          {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
        </MovieResults>
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.div`
  padding: 60px 35px;
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
// me search filters already contains expandable filters so no need to add it on this page too
