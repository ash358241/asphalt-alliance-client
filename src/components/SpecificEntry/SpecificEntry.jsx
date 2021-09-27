import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";
import './SpecificEntry.css';
import Fade from 'react-reveal/Fade';

const SpecificEntry = () => {
  const [entryData, setEntryData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(loggedInUser.email)

  useEffect(() => {
    fetch(`https://shrouded-inlet-53966.herokuapp.com/specificEntry?email=${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEntryData(data);
      });
  }, []);
  // console.log(entryData)

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://shrouded-inlet-53966.herokuapp.com/deleteEntry/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          const newEntryData = entryData.filter(
            (specificEntry) => specificEntry._id !== id
          );
          setEntryData(newEntryData);
        }
      });
  };

  return (
    <div className="specificEntry">
      <div className="specificEntryContent row w-100 h-100">
          <div className="contentOne col-md-2">
              <Sidebar></Sidebar>
          </div>
          <div className="contentTwo col-md-10">
          <Fade left>
          <Table striped bordered hover >
        <thead>
          <tr>
            <th>Car Brand</th>
            <th>Car Model</th>
            <th>Model Year</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entryData.map((entry) => (
            <tr>
              <td>{entry.car}</td>
              <td>{entry.carModel}</td>
              <td>{entry.year}</td>
              <td>{entry.location}</td>
              <td>
                <i
                  class="fas fa-trash-alt"
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => handleDelete(entry._id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
          </Fade>
          </div>
      </div>
    </div>
  );
};

export default SpecificEntry;
