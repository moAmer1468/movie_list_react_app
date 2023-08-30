import { Container } from "react-bootstrap";
import { CardMovie } from "./components/cardMovie";
import { MovieList } from "./components/movieList";
import { AmerNavbar } from "./components/navbar";
import { MoviesDetails } from "./components/MoviesDetails";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllMovies } from "./redux/actions/movieAction";
export const App = () => {
  //making varibale to store the movies..... by The state

  /***This Code is made to handle some Errors */

  /**********This code is just made to handle Some Error uamer******************* */

  // Just we need to load the data just for Single Time when the first rendering happen

  // How to search With the name of the movie uaamer
  const search = async (movie_name) => {
    if (movie_name === "") {
      getAllMovies();
    } else {
      const allSearchedMovies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3dc757445024fb26b52d90deb04832ab&language=ar&query=${movie_name}`
      );
      // setMoviesState(allSearchedMovies.data.results); // This is used to update the movies of the layout
      // setPageCountState(allSearchedMovies.data.total_pages); // This is used to update the searched Movies
    }
  };

  return (
    <div className="font">
      <div
        className="main-container"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <div style={{ flex: "1", padding: "" }}>
          <AmerNavbar search={search}></AmerNavbar>
          <Container>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MovieList />} />
                <Route />
                <Route path="/movie/:id" element={<MoviesDetails />} />

                {/* <CardMovie></CardMovie> */}
              </Routes>
            </BrowserRouter>
          </Container>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;

/***
 * 
 * ---------- Tasks need to be implements Sooner Or later
const movie_id =
  "https://api.themoviedb.org/3/movie/44444?api_key=3dc757445024fb26b52d90deb04832ab&language=ar";
 * 
  Just Simple Hint we need to add Footer that Conatains our Logo and The Name of us uaAmer
 */

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

//we get the movies of the single page or according to the page Number
// const getPage = async (page) => {
//   const res = await axios.get(
//     `https://api.themoviedb.org/3/movie/popular?api_key=3dc757445024fb26b52d90deb04832ab&language=ar&page=${page}`
//   );
//   setMoviesState(res.data.results);
//   setPageCountState(res.data.total_pages);
// };

// const movie_id =
//   "https://api.themoviedb.org/3/movie/44444?api_key=3dc757445024fb26b52d90deb04832ab&language=ar";
