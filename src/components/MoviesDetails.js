import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../style.css";
import axios from "axios";
export function MoviesDetails(props) {
  const linkParams = useParams(); //  This used to get all parameters that are passed to This page
  const [movie, setMovieDetails] = useState({});
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${linkParams.id}?api_key=3dc757445024fb26b52d90deb04832ab&language=ar`
    );
    setMovieDetails(res.data);
  };
  //This will make getMovieDetails be called Just for First rendering of this card
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      {/* This is just the Row That Contains the Info */}
      <Row className="justify-content-center ">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="Image Not Found Here"
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم: {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم :{movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين : {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم :{movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      {/* This is just the Row That contains the overView of the movie uaAmer */}
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">القصة:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      {/* This is the row that contains the Buttons */}
      <Row className="justify-content-around">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-around "
        >
          <Link to="/">
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                padding: "5px",
                fontSize: "20px",
              }}
              className="btn btn-primary mx-2"
            >
              عوده للرئيسيه
            </button>
          </Link>
          <a target="" href={movie.homepage}>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                padding: "5px",
                fontSize: "20px",
              }}
              className="btn btn-primary"
            >
              مشاهده الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
}
