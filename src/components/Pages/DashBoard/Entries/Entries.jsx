import React, { useState } from "react";
import "./Entries.css";
import axios from "axios";
import Sidebar from "../../../Sidebar/Sidebar";
import Zoom from 'react-reveal/Zoom';

const Entries = () => {
  const [entry, setEntry] = useState({});
  const [imageURL, setImageURL] = useState(null);

  const handleBlur = (e) => {
    const newData = { ...entry };
    newData[e.target.name] = e.target.value;
    setEntry(newData);
  };
  

  const handleSubmit = (e) => {
    const formData = {
      car: entry.car,
      carModel: entry.carModel,
      location: entry.location,
      year: entry.year,
      ans: entry.ans,
      imageURL: imageURL,

    };

    fetch("http://localhost:8000/addEntry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data) {
          alert("Entry added successfully!");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "b86c0ab7beeb42c384775d3b62a113c0");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="entries">


<div className="row w-100">
      <div >
        <Sidebar></Sidebar>
      </div>
      <Zoom top>
      <div className="col-md-12 cardComponent">
          <div class="card">
            <h5 class="text-center mb-4">Powering world-class car enthusiasm</h5>
            <form class="form-card" onSubmit={handleSubmit}>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Car Make<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    name="car"
                    placeholder="Enter car maker name"
                    onBlur={handleBlur}
                  />{" "}
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Car Model<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    name="carModel"
                    placeholder="Enter car model name"
                    onBlur={handleBlur}
                  />{" "}
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Map Location<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    name="location"
                    placeholder=""
                    onBlur={handleBlur}
                  />{" "}
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Year<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="number"
                    name="year"
                    placeholder=""
                    onBlur={handleBlur}
                  />{" "}
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Upload Car images<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="file"
                    multiple
                    name="image"
                    placeholder=""
                    onChange={handleImageUpload}
                  />{" "}
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Tell about your enthusiasm
                    <span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    name="ans"
                    placeholder=""
                    onBlur={handleBlur}
                  />{" "}
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="form-group col-sm-6">
                  {" "}
                  <br />
                  <button type="submit" class="btn-block btn-primary">
                    Request an entry
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
      </div>
      </Zoom>
    </div>


    </div>
  );
};

export default Entries;
