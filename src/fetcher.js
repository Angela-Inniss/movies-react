import axios from "axios";

// All of your API requests should be in this file
// i.e.
// export const getMovieGenres = async () => {

// };

export const getMoviesFiltered = async (e) => {
  console.log(e);
  const { movieTitleSearch, searchByYear } = e; // destructuring user search to pass into endpoint.

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=3c92d1fbb8f0a1c50d4a45730be93fda&language=en-US&query=${movieTitleSearch}&page=1&include_adult=false&year=${searchByYear}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
// me : async await returns a promise
export const loadPopularMoviesAndGenres = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=3c92d1fbb8f0a1c50d4a45730be93fda&language=en-US&page=1"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGenres = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=3c92d1fbb8f0a1c50d4a45730be93fda&language=en-US"
    );
    const { genres } = response.data;
    return genres;
  } catch (error) {
    console.error(error);
  }
};
