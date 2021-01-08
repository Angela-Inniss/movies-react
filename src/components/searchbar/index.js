import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export default class SearchBar extends React.Component {
  // me: added the constructor and state and onchange
  constructor(props) {
    super(props);
    this.state = {
      movieTitleSearch: "",
      searchByYear: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value, // me: updating state
    });
    this.props.movieSearch(
      this.state.movieTitleSearch,
      this.state.searchByYear
    ); // me: if someone has searched by year or movie title call th function movieSearch which is a prop! and pass in searches
  };

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
