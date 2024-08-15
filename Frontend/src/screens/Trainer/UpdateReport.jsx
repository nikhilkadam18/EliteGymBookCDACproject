import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import Logout from '../../screens/common/Logout';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateReport = () => {
  const isSignin = useSelector((state) => state.isSignin);
  const location = useLocation();
  const memberData = location.state.member;
  const history = useHistory();

  const [id, setId] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [workout, setWorkout] = useState("");
  const [diet, setDiet] = useState("");
  const [report, setReport] = useState("");

  useEffect(() => {
    axios.get(url + "/report/get/" + memberData.id).then((response) => {
      const result = response.data;
      if (result.status === "OK") {
        setReport(result.response);
        setId(result.response.id);
        setHeight(result.response.height);
        setWeight(result.response.weight);
        setWorkout(result.response.workout);
        setDiet(result.response.diet);
      } else {
        alert("Report not found");
      }
    });
  }, [memberData.id]);

  const handleUpdate = () => {
    if (height === '') {
      alert("Fields cannot be empty");
    } else {
      const data = {
        id: id,
        height: height,
        weight: weight,
        workout: workout,
        diet: diet,
      };

      axios.put(url + "/report/update/" + memberData.id, data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("Report Updated");
          history.push("/trainerpage");
        } else {
          alert("Report not updated");
        }
      });
    }
  };

  return (
    <>
      <Logout />
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="text-center mb-4">{memberData.firstName} Report</h2>

        <div className="mb-3">
          <label htmlFor="reportId" className="form-label">Report Id</label>
          <input type="number" id="reportId" className="form-control" value={id} readOnly />
        </div>

        <div className="mb-3">
          <label htmlFor="height" className="form-label">Height</label>
          <input type="text" id="height" className="form-control" value={height}
           disabled onChange={(e) => setHeight(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="weight" className="form-label">Weight</label>
          <input type="text" id="weight" className="form-control" value={weight}
          disabled  onChange={(e) => setWeight(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="workout" className="form-label">Workout</label>
          <textarea id="workout" className="form-control" rows="4" value={workout}
            onChange={(e) => setWorkout(e.target.value)} required></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="diet" className="form-label">Diet</label>
          <textarea id="diet" className="form-control" rows="4" value={diet}
            onChange={(e) => setDiet(e.target.value)} required></textarea>
        </div>

        <div className="text-center">
          <button className="btn btn-primary me-2" onClick={handleUpdate}>Update</button>
          <Link to="/trainerpage">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default UpdateReport;
