import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './EntryDetails.css';

const EntryDetails = () => {
    const { entryId } = useParams();
  const [entry, setEntry] = useState([]);

//   const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/entry/${entryId}`)
      .then((res) => res.json())
      .then((data) => {
        setEntry(data)
        // setSpinner(false)
      });
  }, [entryId]);
    return (
        <div>
            <h1>{entry.carModel}</h1>
            <p>{entry.ans}</p>
        </div>
    );
};

export default EntryDetails;