import React from "react";
import { Pagination, Row } from "react-bootstrap";
import CardMovie from "./cardMovie";
import { AmerCard } from "./amerCad";
import AmerPagination from "./pagination";
import { Link } from "react-router-dom";
import "../style.css";
export const MovieList = ({ movies, pageCount, getPage }) => {
  console.log(pageCount);
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
      {movies.length >= 1 ? (
        <AmerPagination pageCount={pageCount} getPage={getPage} />
      ) : (
        <h1></h1>
      )}
    </Row>
  );
};

export default MovieList;
