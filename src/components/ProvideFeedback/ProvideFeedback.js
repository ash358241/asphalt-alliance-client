import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import "./ProvideFeedback.css";

const ProvideFeedback = () => {

    const [feedback, setFeedback] = useState({});

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const handleBlur = (e) => {
        const newData = { ...feedback };
        newData[e.target.name] = e.target.value;
        setFeedback(newData);
      };

    const handleSubmit = (e) => {
        const formData = {
        name: feedback.name,
        email: feedback.email,
        address: feedback.address,
        txtMsg: feedback.txtMsg,
        };
    
        fetch("https://shrouded-inlet-53966.herokuapp.com/addFeedback", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (!data) {
              alert("Feedback Provided successfully !!!")
            }
          })
          .catch((error) => {
            console.error(error);
            alert(error);
          });
    
        e.preventDefault();
        e.target.reset();
      };
    return (
        <div className="provideFeedback" >
           <div className="row w-100">
               <div className="col-md-2">
                   <Sidebar></Sidebar>
               </div>
               <div className="col-md-10">
               <div className="container contact-form">
               <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
               <form onSubmit={handleSubmit}>
                <h3>Drop Us a Feedback</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <input
                        className="form-control"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      onBlur={handleBlur}
                      required
                    />
                        </div>
                        <br />
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" name="email" className="form-control" value={loggedInUser.email} placeholder="Your Email *" />
                        </div>
                        <br />
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" name="address" className="form-control" placeholder="Your Address *" required />
                        </div>
                        <br />
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea onBlur={handleBlur} name="txtMsg" className="form-control" placeholder="Provide Feedback *" required ></textarea>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Submit" />
                        </div>
                    </div>
                </div>
            </form>
               </div>
               </div>
           </div>
        </div>
    );
};

export default ProvideFeedback;