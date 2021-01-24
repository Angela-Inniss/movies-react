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
import Modal from "../../components/modal/modal";
import MovieItem from "../../components/movieitem";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      year: 0,
      results: [],
      movieDetails: [],
      totalCount: 0,
      showMovieDetailsModal: false,
      genreOptions: [],
      selectedMovie: null, // me update after dinndind
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
      this.setState({ results: response, totalCount: response });
    });
    this.getGenreList().then((response) => {
      this.setState({ genreOptions: response });
    });
  }

  // Write a function to get the movie details based on the movie id taken from the URL.// me: something to do with useRoute probably TODO

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  async searchMovies(e) {
    // console.log(e.movieTitleSearch, e.searchByYear);
    const response = await getMoviesFiltered(e);
    this.setState({ results: response });
  }

  showModal = () => {
    console.log("show me");
    this.setState(
      { showMovieDetailsModal: !this.state.showMovieDetailsModal },
      () => {
        document.addEventListener("click", this.closeModal);
      }
    );
  };

  closeModal = () => {
    console.log("close modal");
    this.setState(
      (prevState) => ({
        showMovieDetailsModal: !prevState.showMovieDetailsModal, /// figure out what the difference is between tis and above
      }),
      () => {
        document.removeEventListener("click", this.closeModal);
      }
    );
  };

  openModal = (movie) => {
    console.log(movie); // movie object
    this.setState({ movieDetails: movie }, () => {
      this.showModal();
    });
  };

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
      <>
        <MobilePageTitle>Discover</MobilePageTitle>
        <DiscoverWrapper>
          <MovieResults>
            {totalCount > 0 && (
              <TotalCounter>{totalCount} results</TotalCounter>
            )}
            <MovieList
              openModal={(movie) => this.openModal(movie)}
              movies={results || []}
              genres={genreOptions || []}
            />
            <Modal
              show={this.state.showMovieDetailsModal}
              handleClose={this.closeModal}
            >
              <div>
                <MovieItem
                  title={movieDetails.title}
                  overview={movieDetails.overview}
                  rating={movieDetails.vote_average}
                  poster={movieDetails.poster_path}
                />
              </div>
            </Modal>
            {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
          </MovieResults>
          <MovieFilters>
            <SearchFilters
              genres={genreOptions}
              ratings={ratingOptions}
              languages={languageOptions}
              searchMovies={(e) => this.searchMovies(e)}
            />
          </MovieFilters>
          {/*<ExpandableFilters movieGenres={genreOptions} />*/}
        </DiscoverWrapper>
      </>
    );
  }
}

const DiscoverWrapper = styled.div`
  padding: 60px 35px;
  display: flex;
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div`
  flex: 3;
  margin-right: 30px;
`;

const MovieFilters = styled.div`
  flex: 1;
`;

const MobilePageTitle = styled.header``;
