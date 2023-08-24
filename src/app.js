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
export const App = () => {
  //making varibale to store the movies..... by The state
  const [movies, setMoviesState] = useState([]);
  const [pageCount, setPageCountState] = useState(0);
  const movie_id =
    "https://api.themoviedb.org/3/movie/44444?api_key=3dc757445024fb26b52d90deb04832ab&language=ar";

  //This  method is used to get all the popular elements
  const getAllMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=3dc757445024fb26b52d90deb04832ab&language=ar"
    );
    setMoviesState(response.data.results);
    console.log(response.data.results);
    setPageCountState(response.data.total_pages);
    console.log(response.data.total_pages);
  };

  //we get the movies of the single page or according to the page Number
  // const getPage = async (page) => {
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=3dc757445024fb26b52d90deb04832ab&language=ar&page=${page}`
  //   );
  //   setMoviesState(res.data.results);
  //   setPageCountState(res.data.total_pages);
  // };

  /***This Code is made to handle some Errors */
  const getPage = async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3dc757445024fb26b52d90deb04832ab&language=ar&page=${page}`
      );
      // Process the successful response data
      setMoviesState(response.data.results);
      setPageCountState(response.data.total_pages);
    } catch (error) {
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        console.log("Response headers:", error.response.headers);
      } else if (error.request) {
        console.log("Request made but no response received:", error.request);
      } else {
        console.log("Error setting up request:", error.message);
      }
      console.log("Error config:", error.config);
    }
  };
  /**********This code is just made to handle Some Error uamer******************* */

  // Just we need to load the data just for Single Time when the first rendering happen
  useEffect(() => {
    getAllMovies();
  }, []);

  // How to search With the name of the movie uaamer
  const search = async (movie_name) => {
    if (movie_name === "") {
      getAllMovies();
    } else {
      const allSearchedMovies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3dc757445024fb26b52d90deb04832ab&language=ar&query=${movie_name}`
      );
      setMoviesState(allSearchedMovies.data.results); // This is used to update the movies of the layout
      setPageCountState(allSearchedMovies.data.total_pages); // This is used to update the searched Movies
    }
  };

  return (
    <div className="font">
      <AmerNavbar search={search}></AmerNavbar>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movies={movies}
                  pageCount={pageCount}
                  getPage={getPage}
                />
              }
            />
            <Route />
            <Route path="/movie/:id" element={<MoviesDetails />} />

            {/* <CardMovie></CardMovie> */}
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer></Footer>
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
