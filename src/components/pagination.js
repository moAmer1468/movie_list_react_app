import React, { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getPage } from "../redux/actions/movieAction";
function AmerPagination() {
  const [pageCount, setpageCount] = useState(0);

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setpageCount(pages);
  }, []);

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };

  console.log("the pageCount is ");
  console.log(pageCount);

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التـالي"
      previousLabel="السـابق"
      renderOnZeroPageCount={null}
      pageRangeDisplayed={2}
      pageCount={`${pageCount}`}
      initialPage={3}
      containerClassName="pagination justify-content-center my-3"
      pageClassName={"page-item"}
      pageLinkClassName="page-link"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      activeClassName={"active"}
      onPageChange={handlePageClick}
    />

    // <Pagination style={{ justifyContent: "center", fontSize: "20px" }}>
    //   <Pagination.First />
    //   <Pagination.Prev />
    //   <Pagination.Item>{1}</Pagination.Item>
    //   <Pagination.Ellipsis />

    //   <Pagination.Item>{10}</Pagination.Item>
    //   <Pagination.Item>{11}</Pagination.Item>
    //   <Pagination.Item active>{12}</Pagination.Item>
    //   <Pagination.Item>{13}</Pagination.Item>
    //   <Pagination.Item disabled>{14}</Pagination.Item>

    //   <Pagination.Ellipsis />
    //   <Pagination.Item>{20}</Pagination.Item>
    //   <Pagination.Next />
    //   <Pagination.Last />
    // </Pagination>
  );
}

export default AmerPagination;

//     // we need to make simple variable with state Because this will be used for rendering
// const [pageCount, setPageCount] = useState(0);
// // Hooks required here

// // we need to get the data From the store and to update the pageCount variable
// const dispatch = useDispatch();

// const pages = useSelector((state) => state.pageCount);
// useEffect(() => {
//   setPageCount(pages); // This line will update the pageCount For the first rendering for the pagination component
// }, []);
// // Then we need to dispatch or send these information to reducer
// //because the reducer will send these information to the store
// // and the store will send all these info to All components and update them
// //This method will be fired on Click on the button
// console.log("The pageCount which is coming from the pagination file : is");
// console.log(pageCount);
// //This is used to get the data of the single page
// const handlePageClick = (data) => {
//   dispatch(getPage(data.selected + 1));
// };
