import React from "react";
import styled, { css } from "styled-components";
import "./expandablefilters.scss";

import Checkbox from "../../components/checkbox";

export default class ExpandableFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genreFiltersShown: true,
      ratingFiltersShown: false,
      showLanguagesFilters: false,
    };
  }

  showFilterCategories = () =>
    this.setState({
      genreFiltersShown: !this.state.genreFiltersShown,
    });

  showRatingFilters = () => {
    this.setState({
      ratingFiltersShown: !this.state.ratingFiltersShown,
    });
  };

  showLanguagesFilters = () => {
    this.setState({
      showLanguagesFilters: !this.state.showLanguagesFilters,
    });
  };

  render() {
    const {
      genreFiltersShown,
      ratingFiltersShown,
      showLanguagesFilters,
    } = this.state;
    return (
      <>
        <button
          className="category-title-button"
          onClick={this.showFilterCategories}
        >
          <CategoryTitle>
            {genreFiltersShown ? `--` : `+`} Select genre(s)
          </CategoryTitle>
        </button>
        <GenreFilterCont marginTop>
          {genreFiltersShown && (
            <ExpandableFiltersUl>
              {this.props.movieGenres.map((genre, index) => {
                return (
                  <ExpandableFiltersLi key={index}>
                    <Checkbox />
                   <div>{genre.name}</div>
                  </ExpandableFiltersLi>
                );
              })}
            </ExpandableFiltersUl>
          )}
        </GenreFilterCont>

        <button
          className="category-title-button"
          onClick={this.showRatingFilters}
        >
          <CategoryTitle>
            {" "}
            {ratingFiltersShown ? `--` : `+`} Select min. vote{" "}
          </CategoryTitle>
        </button>
        {ratingFiltersShown && (
          <ExpandableFiltersUl>
            {this.props.movieRatings.map((rating) => {
              return (
                <ExpandableFiltersLi key={rating.id}>
                  <Checkbox />
                  {rating.name}
                </ExpandableFiltersLi>
              );
            })}
          </ExpandableFiltersUl>
        )}

        <button
          className="category-title-button"
          onClick={this.showLanguagesFilters}
        >
          <CategoryTitle>
            {showLanguagesFilters ? `--` : `+`} Select language
          </CategoryTitle>
        </button>
        {showLanguagesFilters && (
          <ExpandableFiltersUl>
            {this.props.languages.map((lang) => {
              return (
                <ExpandableFiltersLi key={lang.id}>
                  <Checkbox />
                  {lang.name}
                </ExpandableFiltersLi>
              );
            })}
          </ExpandableFiltersUl>
        )}
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
   border: 1px solid green;
`;

const ExpandableFiltersLi = styled.li`
  display: flex;
  margin-bottom: 7px;
  font-size: 13px;
  color: gray;
  border: 1px solid red;
`;

const CategoryTitle = styled.div`
  margin-bottom: 7px;
  color: gray;
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

// this.props.moviegenres this will be passed down as a prop via the searchFilter file "genres" then via the discover file genreOptions
// which will be populated when we call the api to get all the "genres" of film
// we will map over this prop
