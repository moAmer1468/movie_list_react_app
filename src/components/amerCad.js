import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Col } from "react-bootstrap";
export const AmerCard = () => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="my-1">
      <div className="amer-card-style">
        <img src="4.jpg" />
        <div className="content-style">
          <h2>This is the ehading </h2>
          <p>Thi8s is just </p>
        </div>
      </div>
    </Col>
  );

  {
    /* <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="4.jpg" alt="Card image cap"/>
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div> */
  }
};
