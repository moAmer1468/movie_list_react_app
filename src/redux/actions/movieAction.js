import { ALLMOVIES } from "../types/movieType";
import { WORD } from "../types/movieType";
import { PAGE } from "../types/movieType";
import { MovieApi } from "../types/movieType";
import axios from "axios";

// ******************Simple Hint all actions will be called by the dispatchMethod 5 Step of Redux**************
//This is the action Number One
export const getAllMovies = () => {
  // This method will return just object uaAmer With the type and that data as a props
  //   Simple Hint With async You need to use middleWare

  return async (dispatch) => {
    const response = await axios.get(MovieApi);
    console.log("This is coming From api By Using MiddleWare uaAmer");
    console.log(response);
    dispatch({
      type: ALLMOVIES,
      data: response.data.results,
      page: response.data.total_pages,
    });
  };
};

export const getMovieByWord = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=3dc757445024fb26b52d90deb04832ab&language=ar&query=${word}`
    );
    console.log("This is coming From action search By word");
    console.log(res);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      page: res.data.total_pages,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=3dc757445024fb26b52d90deb04832ab&language=ar&page=${page}`
    );
    console.log("This is coming from getPage method File is : MovieAction ");
    console.log(response.data);
    dispatch({
      type: ALLMOVIES,
      data: response.data.results,
      pages: response.data.total_pages,
    });
  };

  // Process the successful response data
  // setMoviesState(response.data.results);
  // setPageCountState(response.data.total_pages);
};

/** ************************* Wait ************************ */
//This is the actions Number Two
export const getSinglePage = () => {
  return {
    type: PAGE,
    data: ["This is just single page", 222, 747, "amerNumber"],
    page: 1,
  };
};
//This is the actions Number Three
export const getPageByWord = () => {
  return {
    type: WORD,
    data: ["gET THE PAGE BY WORD", 222, 747, "amerNumber"],
    page: 2,
  };
};

// //This  method is used to get all the popular elements
// const getAllMovies = async () => {
//   const response = await axios.get(
//     "https://api.themoviedb.org/3/movie/popular?api_key=3dc757445024fb26b52d90deb04832ab&language=ar"
//   );
//   console.log(
//     "So The output of This funciton is array of objects uaAmer each object represents a single movie"
//   );
//   console.log(response); //response is an object that contains key called data And its value is an object that contains
//   // page and and results the result is just a key and its value is array of movies
//   setMoviesState(response.data.results);
//   console.log(response.data.results);
//   setPageCountState(response.data.total_pages);
//   console.log(response.data.total_pages);
// };
