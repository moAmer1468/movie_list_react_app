import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../index.css";
import "../style.css";
import "bootstrap/dist/css/bootstrap.css";
import moAmerLogo from "../images/moAmerLogo.png";
import { useState } from "react";
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
//           MoAmer
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
//             <div style={{ flexGrow: "1" }}>
//               {/* <span className='search-icon'></span> */}
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//                 onChange={(e) => {
//                   handleSearch(e.target.value);
//                 }}
//               />
//             </div>
//             {/* <Button variant="outline-success">Search</Button> */}
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

export const AmerNavbar = ({ search }) => {
  const [searchVar, changeSearchVarState] = useState("");

  const handleSearch = (e) => {
    // This is used to prevent the browser From not refreshing the page uaAmer
    e.preventDefault();
    // Try to use This one you will find a lot of problems uaAmer
    search(searchVar);
  };

  console.log(searchVar);

  return (
    <div dir="rtl" style={{ backgroundColor: "black", padding: "10px" }}>
      <Container>
        <nav
          class="navbar navbar-dark   d-flex justify-content-start"
          style={{ margin: "2px " }}
        >
          <a class="navbar-brand" style={{ marginLeft: "3px" }} href="/">
            <img
              style={{
                width: "59px",
                height: "35px",
                margin: "2px",
                boxsizing: "border-box",
              }}
              src={moAmerLogo}
              alt="ImageNot Found"
            />
          </a>
          <form class="d-flex " style={{ flex: "1", position: "relative" }}>
            <input
              class="form-control mr-sm-2 "
              type="text"
              placeholder="بحث"
              aria-label="Search"
              flex="1"
              onChange={(e) => {
                changeSearchVarState(e.target.value);
              }}
              value={searchVar}
            />
            <button
              className="btn-search-style"
              onClick={(e) => handleSearch(e)}
            >
              بحث
            </button>
          </form>
        </nav>
      </Container>
    </div>
  );
};
