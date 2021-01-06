import React from "react";
import styled, { css } from "styled-components";
import "./expandablefilters.scss";

import Checkbox from "../../components/checkbox";

export default class ExpandableFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtersShown: true,
    };
  }

  showFilterCategories = () =>
    this.setState({
      filtersShown: !this.state.filtersShown,
    });

  render() {
    const { filtersShown } = this.state;
    return (
      <>
        <button
          className="category-title-button"
          onClick={this.showFilterCategories}
        >
          <CategoryTitle>
            {filtersShown ? `--` : `+`} Select genre(s)
          </CategoryTitle>
        </button>
        <GenreFilterCont marginTop>
          {filtersShown && (
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
          )}
        </GenreFilterCont>
        <CategoryTitle> + Select min. vote</CategoryTitle>
        <CategoryTitle> + Select language</CategoryTitle>
      </>
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

  display: flex;
  -webkit-transition: 1s;
`;

const ExpandableFiltersUl = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ExpandableFiltersLi = styled.li`
  display: flex;
  margin-bottom: 7px;
  font-size: 13px;
  color: gray;
`;

const CategoryTitle = styled.div`
  margin-bottom: 7px;
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

//// this.props.moviegenres this will be passed down as a prop via the searchFilter file "genres" then via the discover file genreOptions
// which will be populated when we call teh api to get all the "genres" of film
//we will map over this prop
