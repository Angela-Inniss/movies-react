import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export default class SearchBar extends React.Component {
  //i added the constructor and state and onchagnge
  constructor(props) {
    super(props);
    this.state = {
      movieTitleSearch: "",
      searchByYear: "",
    };
  }

  handleOnChange = (event) => {
    const { movieTitleSearch } = this.state;
    const { searchByYear } = this.state;
    this.setState(
      {
        [event.target.name]: event.target.value, // me: updating state
      },
      () => {
        if (movieTitleSearch.length || searchByYear.length > 1) {
          this.props.movieSearch(movieTitleSearch, searchByYear); // me: if someone has searched by year or movie title call th function movieSearch which is a prop! and pass in searches
        }
      }
    );
  };

  // returns and array of filtered movies... should
  // this filters the movies in the list and checks if the book in the list matches what the user has typed

  // filteredMoviesUserSearch = () => {
  //   this.props.movieSearch.filter((movie) => {
  //     return movie
  //       .toLowerCase()
  //       .includes(this.state.userSearchValue.toLowerCase());
  //   });
  // };

  render() {
    return (
      <div>
        <label>search film title</label>
        <input
          onChange={this.handleOnChange}
          type="text"
          name="movieTitleSearch"
          placeholder="search by film"
          value={this.state.movieTitleSearch}
        />
        <label>search by year</label>
        <input
          onChange={this.handleOnChange}
          type="text"
          name="searchByYear"
          placeholder="search by year"
          value={this.state.searchByYear}
        />
      </div>
    );
  }
}

//me: movieList is a prop (a list of movies) that will be filtered, to see if the ca
