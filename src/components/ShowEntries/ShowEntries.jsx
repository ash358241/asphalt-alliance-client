import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ShowEntry from "../ShowEntry/ShowEntry";
import Fade from 'react-reveal/Fade';

const ShowEntries = () => {
  const [entries, setEntries] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/entries")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data);
        setSpinner(false);
      });

    // axios.get("http://localhost:8000/entries")
    //         .then(response => setEntries(response.data))
    //         .catch(error => console.error(error))
  }, []);
  return (
    <>
    <Fade bottom>
    <div className="showEntries py-5" style={{minHeight: "100vh"}}>
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center mb-4">Featured Entries</h1>
          {entries.map((entry) => (
            <ShowEntry entry={entry} key={entry._id}></ShowEntry>
          ))}

          {spinner && <LoadingSpinner />}
        </div>
      </div>
    </div>
    </Fade>
    </>
  );
};

export default ShowEntries;
