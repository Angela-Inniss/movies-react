import React from "react";
import styled, { css } from "styled-components";
import * as colors from "../../colors";

import ExpandableFilters from "../../components/expandablefilters";
import SearchBar from "../../components/searchbar";

export default class SearchFilters extends React.Component {
  render() {
    const { genres, ratings, languages, searchMovies } = this.props; // me : this is for the filter under the
    //me : search movies is a function? hmm
    return (
      <FiltersWrapper>
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          {/* Implement a SearchBar component and use it for both the keyword and the year inputs */}
          <SearchBar movieSearch={(e) => searchMovies(e)} />
        </SearchFiltersCont>

        <SearchFiltersCont>
          <CategoryTitle bold>Movies</CategoryTitle>
          {/* Implement a component called "ExpandableFilters" and use it for the filter categories */}
          <ExpandableFilters
            movieRatings={ratings}
            movieGenres={genres}
            languages={languages}
          />
        </SearchFiltersCont>
      </FiltersWrapper>
    );
  }
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div`
  margin-bottom: 7px;

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;
