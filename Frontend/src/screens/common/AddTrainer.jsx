import React, { useState } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import { Link } from "react-router-dom";

const AddTrainer = () => {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role] = useState("TRAINER");
  const [address, setAddress] = useState("");
  const [userBranchId, setUserBranchId] = useState("");
  const history = useHistory();

  const addTrainer = () => {
    if (firstName === "" || lastName === "" || email === "" || password === "" || phone === "") {
      alert("Fields cannot be empty");
    } else {
      let data = {
        firstName,
        lastName,
        email,
        dob,
        phoneNo: phone,
        address,
        password,
        role,
        branch: userBranchId
      };
      console.log(data);

      axios.post(url + "/trainer/add/" + userBranchId, data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("Successfully registered");
          history.push("/localadminpage");
        } else {
          alert("Email already exists");
        }
      });
    }
  };

  return (
    <>
      <Logout />
    <div className="container mt-4" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", color: "#000" }}>

      <h2 className="text-center mb-4">Add New Trainer</h2>

      <div className="form-group row">
        <label htmlFor="fname" className="col-sm-2 col-form-label">First Name</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="First Name"
            onChange={(event) => setFname(event.target.value)}
            required
            />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="lname" className="col-sm-2 col-form-label">Last Name</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="Last Name"
            onChange={(event) => setLname(event.target.value)}
            required
            />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            required
            />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            required
            />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="dob" className="col-sm-2 col-form-label">DOB</label>
        <div className="col-sm-10">
          <input
            type="date"
            className="form-control"
            id="dob"
            onChange={(event) => setDob(event.target.value)}
            required
            />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            onChange={(event) => setAddress(event.target.value)}
            required
            />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="phone" className="col-sm-2 col-form-label">Contact Number</label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            id="phone"
            placeholder="Phone Number"
            onChange={(event) => setPhone(event.target.value)}
            required
            />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="userBranchId" className="col-sm-2 col-form-label">Branch Id</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="userBranchId"
            placeholder="Branch Id"
            onChange={(event) => setUserBranchId(event.target.value)}
            required
            />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="role" className="col-sm-2 col-form-label">Role</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="role"
            value="TRAINER"
            disabled
            />
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success mr-3" onClick={addTrainer}>
          Register
        </button>
        <Link to="/localadminpage">
          <button className="btn btn-secondary">Back</button>
        </Link>
      </div>
    </div>
            </>
  );
};
export default AddTrainer;
