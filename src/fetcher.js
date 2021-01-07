import axios from "axios";

// All of your API requests should be in this file
// i.e.
// export const getMovieGenres = async () => {

// };

export const getMoviesFiltered = async (keyword, year) => {
  try {
    const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3c92d1fbb8f0a1c50d4a45730be93fda&language=en-US&query=${keyword}&page=1&include_adult=false&year=${year}`
    );
    return response.data

  } catch (error) {
    console.error(error);
  }
};
//me : async await returns a promise
