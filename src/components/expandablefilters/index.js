import React from "react";
import styled, { css } from "styled-components";

import Checkbox from "../../components/checkbox";

export default class ExpandableFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtersShown: true,
    };
  }
  render() {
    return (
      <SearchFiltersCont marginTop>
       <ExpandableFiltersUl>
        {this.props.movieGenres.map((genre) => {
          return (
                <ExpandableFiltersLi>
                  <Checkbox />
                  {genre}
                </ExpandableFiltersLi>
          );
        })}
       </ExpandableFiltersUl>
      </SearchFiltersCont>
    );
  }

  // You need to create your own checkbox component with a custom checkmark
}

ExpandableFilters.defaultProps = {
  movieGenres: [],
};
const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  display: flex;

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 15px;
    `}
`;

const ExpandableFiltersUl = styled.ul `
     list-style: none;
    padding-left: 0;
`;

const ExpandableFiltersLi = styled.li `
    display:flex;
    margin-bottom: 7px;
`;

//// this.props.moviegenres this will be passed down as a prop via the searchFilter file "genres" then via the discover file genreOptions
// which will be populated when we call teh api to get all the "genres" of film
//we will map over this prop
