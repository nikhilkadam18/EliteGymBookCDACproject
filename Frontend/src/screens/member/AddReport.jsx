
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from '../../screens/common/Logout';
import { url } from "../../common/constant";

const AddReport = () => {
    const isSignin = useSelector((state) => state.isSignin);
    const location = useLocation();
    const memberData = localStorage.getItem('myData');
    const history = useHistory(); 

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [workout, setWorkout] = useState("");
    const [diet, setDiet] = useState("");
    const [report, setReport] = useState("");

    const loginStatus = sessionStorage.getItem('LoginStatus');
    if (loginStatus != 1) {
        alert('Please sign in first!');
        history.push('/login');
    }

    useEffect(() => {
        axios.get(`${url}/report/get/${memberData}`).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                setReport(result.response);
                setHeight(result.response.height);
                setWeight(result.response.weight);
                setWorkout(result.response.workout);
                setDiet(result.response.diet);
            } else {
                alert("Report not updated");
            }
        });
    }, [memberData]);

    const addReport = () => {
        if (height === '' || weight === '') {
            alert("Height and Weight cannot be empty");
        } else {
            let data = {
                height: height,
                weight: weight,
            };

            axios.post(`${url}/report/add/${memberData}`, data).then((response) => {
                const result = response.data;
                if (result.status === "OK") {
                    alert("Report added successfully");
                    history.push("/memberpage");
                } else {
                    alert("Report not added");
                }
            });
        }
    };

    return (
      <>
            <Logout />
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">Report</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="height">Height</label>
                        <input type="text" className="form-control" id="height" placeholder="Height" value={height}
                            onChange={(e) => { setHeight(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">Weight</label>
                        <input type="text" className="form-control" id="weight" placeholder="Weight" value={weight}
                            onChange={(e) => { setWeight(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="workout">Workout</label>
                        <textarea className="form-control" id="workout" rows="5" value={workout} readOnly></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="diet">Diet</label>
                        <textarea className="form-control" id="diet" rows="5" value={diet} readOnly></textarea>
                    </div>
                </div>
                <div className="card-footer text-right">
                    <button className="btn btn-primary" onClick={addReport}>Add</button>
                    &nbsp;&nbsp;
                    <Link to="/memberpage" className="btn btn-secondary">Back</Link>
                </div>
            </div>
        </div>
                            </>
    );
}

export default AddReport;
