import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowEntry from "../ShowEntry/ShowEntry";
import "./ShowEntries.css";

const ShowEntries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/entries')
    .then(res => res.json())
    .then(data => setEntries(data))

    // axios.get("http://localhost:8000/entries")
    //         .then(response => setEntries(response.data))
    //         .catch(error => console.error(error))

  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="text-center mb-3">Featured Entries</h1>
        {entries.map((entry) => (
          <ShowEntry entry={entry} key={entry._id}></ShowEntry>
        ))}
      </div>
    </div>
  );
};

export default ShowEntries;
