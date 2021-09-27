import React from "react";
import { cardContainer, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "../ShowEntries/ShowEntries.css";

const ShowEntry = ({ entry }) => {
  // console.log(entry)
  const { _id, car, carModel, location, year, ans, imageURL } = entry;

  const history = useHistory();
  const handleClick = (entryId) => {
    const url = `/entry/${entryId}`;
    history.push(url);
  };
  return (
    <div className="col-md-3">
      <div className="showEntry">
        <div className="wrapper">
          <div className="cardContainer">
            <img src={imageURL} alt="" />
            <div className="descriptions">
              <h1>{car}</h1>
              <p className="enthusiasm">
                {ans}{" "}
              </p>
              <button onClick={() => handleClick(_id)}>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowEntry;
