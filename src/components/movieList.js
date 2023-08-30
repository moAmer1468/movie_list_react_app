import React from "react";
import { Pagination, Row } from "react-bootstrap";
import CardMovie from "./cardMovie";
import { AmerCard } from "./amerCad";
import AmerPagination from "./pagination";
import { Link } from "react-router-dom";
import "../style.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";
import { useSelector } from "react-redux";

export const MovieList = () => {
  const [movies, setMoviesState] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // getAllMovies();
    dispatch(getAllMovies());
  }, []);
  // ****************************
  const dataMovies = useSelector((state) => state.movies);
  // *************************
  useEffect(() => {
    //This is used to update the state each time the dataMovie Changes
    setMoviesState(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length > 1 ? (
        movies.map((ele, index, arr) => {
          return <CardMovie key={ele.id} singleMovie={ele} />;
        })
      ) : (
        <h2
          className="no-films-found"
          style={{
            padding: "20px",
            margin: "4px auto",
            textAlign: "center",
          }}
        >
          لا يـــــــــوجد افلام هنا
        </h2>
      )}
      {/* And This si just the second component of this page */}
      {movies.length >= 1 ? (
        <AmerPagination />
      ) : (
        // <h2>This is the place of the paginations</h2>
        <h1></h1>
      )}
    </Row>
  );
};

export default MovieList;
