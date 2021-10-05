import React, { useEffect, useState } from "react";
import Feedback from "../../components/Feedback/Feedback.jsx";
import "./Feedbacks.css";
import Carousel from "react-elastic-carousel";
import Fade from 'react-reveal/Fade';


const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-inlet-53966.herokuapp.com/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        // setSpinner(false);
      });
  }, []);
  //   console.log(feedbacks)

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="feedbacks">
      <Fade bottom duration={2500}>
    <h1 style={{textAlign:'center', marginBottom: '20px'}}>Feedbacks</h1>
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        {feedbacks.map((feedback) => {
          return <Feedback feedback={feedback}></Feedback>;
        })}
      </Carousel>
    </div>
    </Fade>
    </div>
  );
};

export default Feedbacks;
