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
  //
  // handleOnChange = (event) => {
  //   this.setState({
  //     ...this.state,
  //     [event.target.name]: event.target.value, // me: updating state
  //   });
  //   this.props.movieSearch(
  //     this.state.movieTitleSearch,
  //     this.state.searchByYear
  //   ); // wrong, if we pass the updated state to the movieSearch function then it may not be updated straight away so essentially we will be passing nothing!
  // };

    handleOnChange = (event) => {
        this.props.movieSearch(event.target.value); // passing the user search straight to the movieSearch function
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value // me: updating state // this is asyncronous and may not happen straight away so may cause bugs if we use the updated state straight away.
        });
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
// the state here doesn't update straight away when the user types so i shouldn't pass in the updated state to the movieSearch function as it won't work straight off line 30
// instead  i need to  pass in what the user types event.target.value. Need to do the same for the year somehow.
