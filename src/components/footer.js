import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moAmerLogo from "../images/moAmerLogo.png";
import "../style.css";
function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        boxSizing: "border-box",
        padding: "0px",
        marginTop: "4px",
        position: "relative",
        bottom: "0px",
      }}
    >
      <Container>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Col
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "0px",
            }}
          >
            <a href="/">
              <img
                style={{
                  width: "80px",
                  height: "50px",
                  margin: "2px",
                  boxSizing: "border-box",
                }}
                src={moAmerLogo}
                alt="ImageNot Found"
              />
            </a>
            <div> Mohamed Alaa amer &copy; 2023 </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
