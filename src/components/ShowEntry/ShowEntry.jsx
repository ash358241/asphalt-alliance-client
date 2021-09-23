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
        <div class="wrapper">
          <div class="cardContainer">
            <img src={imageURL} alt="" />
            <div class="descriptions">
              <h1>{car}</h1>
              <p>
                If you have a problem and there is nowhere else to turn, the
                mysterious and elusive Robert McCall will deliver the vigilante
                justice you seek. This time, however, McCall's past cuts
                especially close to home when thugs kill Susan Plummer -- his
                best friend and former colleague. Now out for revenge, McCall
                must take on a crew of highly trained assassins who'll stop at
                nothing to destroy him.{" "}
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
