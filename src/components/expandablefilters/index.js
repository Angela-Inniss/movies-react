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
      < GenreFilterCont marginTop>
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
      </ GenreFilterCont>

    );
  }

  // You need to create your own checkbox component with a custom checkmark
}

ExpandableFilters.defaultProps = {
  movieGenres: [],
};
const GenreFilterCont = styled.div`
  background-color: white;
 
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  display: flex;
`;

const ExpandableFiltersUl = styled.ul `
     list-style: none;
    padding-left: 0;
 
`;

const ExpandableFiltersLi = styled.li `
    display:flex;
    margin-bottom: 7px;
     font-size:13px;
     color:gray;
`;

//// this.props.moviegenres this will be passed down as a prop via the searchFilter file "genres" then via the discover file genreOptions
// which will be populated when we call teh api to get all the "genres" of film
//we will map over this prop
