import React from "react";

import { Col } from "react-bootstrap";
import "../style.css";
import { Link } from "react-router-dom";
export const CardMovie = ({ singleMovie }) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${singleMovie.id}`}>
        <div className="card">
          {/* The most important thing here is the url of this images uaamer solved potter
        url is consists of Two part uaAmer the static one and the variable image path which is the poster path
        */}
          <img
            src={
              `https://image.tmdb.org/t/p/w500/` + `${singleMovie.poster_path}`
            }
            className="card__image"
            alt="NotFound"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {singleMovie.title}</p>
              <p>تاريخ الاصدار:{singleMovie.release_date}</p>
              <p>عدد المقيمين: {singleMovie.vote_count}</p>
              <p>التقييم:{singleMovie.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
