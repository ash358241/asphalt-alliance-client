import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './EntryDetails.css';

const EntryDetails = () => {
    const { entryId } = useParams();
  const [entry, setEntry] = useState([]);

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/entry/${entryId}`)
      .then((res) => res.json())
      .then((data) => {
        setEntry(data)
        setSpinner(false);
      });
  }, [entryId]);
    return (
        <div className="entryDetails">
          {/* {spinner && <LoadingSpinner />} */}
          {spinner ? <LoadingSpinner />
              :
            <div className="contents">
              
              <div className="imgContent">
              <img className="carImg" src={entry.imageURL} alt="" />
              </div>
              <div className="textContent">
                <h3>{entry.car}</h3>
                <h5>{entry.carModel}</h5>
              </div>
              <div className="additionalContent">
                <h6>Location: {entry.location}</h6>
                <h6>Model Year: {entry.year}</h6>
              </div>
              <div className="description">
                <p>{entry.ans}</p>
              </div>
            </div>
}
        </div>
    );
};

export default EntryDetails;