import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ShowEntry from "../ShowEntry/ShowEntry";
import Fade from 'react-reveal/Fade';
import './Pagination.css';

const renderData = entries => {
  return(
    <div className="showEntries" id="allEntries">
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center mb-4">Featured Entries</h1>
          {entries.map((entry) => (
            <ShowEntry entry={entry} key={entry._id}></ShowEntry>
          ))}
        </div>
      </div>
    </div>
  )
}

const ShowEntries = () => {
  const [entries, setEntries] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("https://shrouded-inlet-53966.herokuapp.com/entries")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data);
        setSpinner(false);
      });
  }, []);



    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(8);

    const [pageNumberLimit, setpageNumberLimit] = useState(3);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
      };
    
      const pages = [];
      for (let i = 1; i <= Math.ceil(entries.length / itemsPerPage); i++) {
        pages.push(i);
      }
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = entries.slice(indexOfFirstItem, indexOfLastItem);

      const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={currentPage === number ? "active" : null}
            >
              {number}
            </li>
          );
        } else {
          return null;
        }
      });
    
    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);
    
        if (currentPage + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
      };
    
      const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);
    
        if ((currentPage - 1) % pageNumberLimit == 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
      };
    
      let pageIncrementBtn = null;
      if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
      }
    
      let pageDecrementBtn = null;
      if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
      }
    
      const handleLoadMore = () => {
        setitemsPerPage(itemsPerPage + 5);
      };

  return (
    <Fade bottom duration={2000}>
    <div className="pt-5">
    {spinner ? <LoadingSpinner /> : renderData(currentItems)}
    <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button>
    </div>
    </Fade>
  );
};

export default ShowEntries;
