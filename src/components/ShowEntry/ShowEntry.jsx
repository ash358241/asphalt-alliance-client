import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";

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
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{car}</Card.Title>
          <Card.Text>{ans}</Card.Text>
          <Button variant="primary" onClick={() => handleClick(_id)}>Explore</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowEntry;
