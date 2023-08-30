// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "../index.css";
// import "../style.css";
// import "bootstrap/dist/css/bootstrap.css";
// import moAmerLogo from "../images/moAmerLogo.png";
// import { useState } from "react";
// export const AmerNavbar = ({ search }) => {
//   const [result, setResultState] = useState("");

//   const handleSearch = (value) => {
//     setResultState(value);
//     search(value);
//   };
//   console.log(result);
//   return (
//     <Navbar expand="lg" style={{ backgroundColor: "black", padding: "10px" }}>
//       <Container style={{ backgroundColor: "" }}>
//         <Navbar.Brand
//           style={{ color: "white", marginLeft: "3px", marginRight: "0px" }}
//           href="/"
//         >
//           MohamedAmer
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           {/* <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav> */}
//           <Form className="d-flex" style={{ width: "100%" }}>
//             <div style={{ flexGrow: "1", display: "flex" }}>
//               {/* <span className='search-icon'></span> */}
//               <Form.Control
//                 style={{ position: "relative" }}
//                 type="search"
//                 placeholder="ابحث"
//                 className="me-2"
//                 aria-label="Search"
//                 onChange={(e) => {
//                   handleSearch(e.target.value);
//                 }}
//               />
//             </div>
//             {/* <Button
//               style={{ position: "absolute", top: "0px", left: "0px" }}
//               variant="outline-danger"
//             >
//               بحث
//             </Button> */}
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// // export const AmerNavbar = ({ search }) => {
// //   const handleSearch = (e) => {
// //     // This is used to prevent the browser From not refreshing the page uaAmer
// //     // Try to use This one you will find a lot of problems uaAmer
// //     search(e);
// //   };

// //   const handleSearchBtn = (e) => {
// //     // This is used to prevent the browser From not refreshing the page uaAmer
// //     e.preventDefault();
// //     // Try to use This one you will find a lot of problems uaAmer
// //     search(e.target.value);
// //     console.log(e.target.value);
// //   };

// //   return (
// //     <div dir="rtl" style={{ backgroundColor: "black", padding: "10px" }}>
// //       <Container>
// //         <nav
// //           class="navbar navbar-dark   d-flex justify-content-start"
// //           style={{ margin: "2px " }}
// //         >
// //           <a class="navbar-brand" style={{ marginLeft: "3px" }} href="/">
// //             <img
// //               style={{
// //                 width: "59px",
// //                 height: "35px",
// //                 margin: "2px",
// //                 boxsizing: "border-box",
// //               }}
// //               src={moAmerLogo}
// //               alt="ImageNot Found"
// //             />
// //           </a>
// //           <form class="d-flex " style={{ flex: "1", position: "relative" }}>
// //             <input
// //               class="form-control mr-sm-2 "
// //               type="text"
// //               placeholder="بحث"
// //               aria-label="Search"
// //               flex="1"
// //               onChange={(e) => {
// //                 handleSearch(e.target.value);
// //               }}
// //             />
// //           </form>
// //         </nav>
// //       </Container>
// //     </div>
// //   );
// // };
import "../style.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../images/moAmerLogo.png";
import { Link } from "react-router-dom";
import { getAllMovies } from "../redux/actions/movieAction";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieByWord } from "../redux/actions/movieAction";
export const AmerNavbar = () => {
  const [pageCount, setPageCountState] = useState(0);
  const dispatch = useDispatch();
  // This method used to search by word
  const search = async (movie_name) => {
    if (movie_name === "") {
      // so here we need to dispatch on all movies uaaemr
      dispatch(getAllMovies());
    } else {
      dispatch(getMovieByWord(movie_name));
    }
  };
  //This method used to search by pageNumber

  /***This Code is made to handle some Errors */
  const getPage = async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3dc757445024fb26b52d90deb04832ab&language=ar&page=${page}`
      );
      // Process the successful response data
      // setMoviesState(response.data.results);
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
  const onSearch = (word) => {
    search(word);
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img
                style={{ width: "50px", height: "50px" }}
                className="logo"
                src={logo}
                alt="dfs"
              />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AmerNavbar;
