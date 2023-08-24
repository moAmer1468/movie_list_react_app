import React from "react";
import Pagination from "react-bootstrap/Pagination";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function AmerPagination({ pageCount, getPage }) {
  //This is used to get the data of the single page
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
    console.log(data.selected + 1);
  };

  return (
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

    <ReactPaginate
      breakLabel="..."
      nextLabel="التـالي"
      previousLabel="السـابق"
      renderOnZeroPageCount={null}
      pageRangeDisplayed={2}
      pageCount={`${pageCount}`}
      initialPage={2}
      containerClassName="pagination justify-content-center my-3"
      pageClassName={"page-item"}
      pageLinkClassName="page-link"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      activeClassName={"active"}
      onPageChange={handlePageClick}
    />
  );
}

export default AmerPagination;
