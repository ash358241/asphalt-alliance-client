import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./EntryDetails.css";
import Slide from 'react-reveal/Slide';
import { Link } from "react-router-dom";

const EntryDetails = () => {
  const { entryId } = useParams();
  const [entry, setEntry] = useState([]);

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/entry/${entryId}`)
      .then((res) => res.json())
      .then((data) => {
        setEntry(data);
        setSpinner(false);
      });
  }, [entryId]);
  return (
    <div className="entryDetails">
      {spinner ? (
        <LoadingSpinner />
      ) : (
        <div className="contents">
          <div className="imgContent">
            <img className="carImg" src={entry.imageURL} alt="" />
          </div>
          <div className="textContent">
            <span>{entry.car}</span>
            <h5 class="logo-1">{entry.carModel}</h5>
          </div>
          <Slide bottom>
          <div className="additionalContent">
            <h6><strong>Location: {entry.location}</strong></h6>
            <h6><strong>Model Year: {entry.year}</strong></h6>
          </div>
          <div className="description">
            <p>{entry.ans}</p>
            <Link to="/" style={{textDecoration:"none", color:"black"}}><i class="fas fa-angle-double-left"> Back to home</i></Link>
          </div>
          </Slide>
        </div>
      )}
    </div>
  );
};

export default EntryDetails;
