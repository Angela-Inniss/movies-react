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
      [event.target.name]: event.target.value, // me: updating state with a dynamic key
    }, () => {
        this.props.movieSearch({
            movieTitleSearch: this.state.movieTitleSearch,
            searchByYear: this.state.searchByYear
        });
    });
  };
    // so the above is now correct. I am spreading the state first of all, then updating the state.
    // then I want to pass the updated state to the movieSearch function which will be passed up to discover page
    // if i didn't put this in a callback function then the state wouldn't be updated straight away as state updating is asyncrnous
    // this would result in me passing an empty string to the function first of all.
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
