import { Reducer } from "react";
import "../actions/movieAction";
import { ALLMOVIES } from "../types/movieType";

const initialObject = { movies: [], pageNumber: 0 }; // This equivalent to state
// Simple hint the object that we need to deal with is response.data
// and This will look like this response.data= {page:1,results:[{movieOneObject},{movieTwoObject},{movieThreeObject}....]}
export const moviesReducer = (
  initialObject = { movies: [], pageCount: 0 },
  actionObject
) => {
  switch (actionObject.type) {
    case ALLMOVIES:
      return {
        movies: actionObject.data,
        pageCount: actionObject.pages,
      };
      break;
    default:
      return initialObject;
      break;
  }
};

// case "word":
//   return {
//     movies: initialObject.data,
//     page: actionObject.pageNumber,
//   };
//   break;
// case "page":
//   return {
//     movies: initialObject.data,
//     page: actionObject.pageNumber,
//   };
//   break;
// default:
//   return initialObject;
//   break;
