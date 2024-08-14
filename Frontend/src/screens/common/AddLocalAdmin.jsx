
import React, { useState } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory, Link } from "react-router-dom";
import Logout from '../../screens/common/Logout';

const AddAdmin = () => {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userBranchId, setUserBranchId] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDOB] = useState("");
  const history = useHistory();

  const addAdmin = () => {
    if (email === "" || password === "" || firstName === "" || lastName === "" || phoneNo === "") {
      alert("Fields cannot be left empty");
    } else {
      const data = {
        firstName,
        lastName,
        email,
        password,
        dob,
        phoneNo,
        address,
        role: "MANAGER"
      };
      console.log(data);

      axios.post(`${url}/manager/add/${userBranchId}`, data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("Successfully registered");
          history.push("/alllocaladmins");
        } else {
          alert("Email already exists");
        }
      });
    }
  };

  return (
    <>
      <Logout />
    <div className="container my-4">

      <h2 className="text-center text-black mb-4">Add Gym Owner</h2>

      <form>
        <div className="form-group row">
          <label htmlFor="fname" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="First Name"
              onChange={(event) => setFname(event.target.value)}
              required
              />
          </div>
          <label htmlFor="lname" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-4">
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
          <label htmlFor="dob" className="col-sm-2 col-form-label">Date Of Birth</label>
          <div className="col-sm-4">
            <input
              type="date"
              className="form-control"
              id="dob"
              onChange={(event) => setDOB(event.target.value)}
              required
              />
          </div>
          <label htmlFor="phone" className="col-sm-2 col-form-label">Contact Number</label>
          <div className="col-sm-4">
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
          <label htmlFor="role" className="col-sm-2 col-form-label">Role</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="role"
              value="MANAGER"
              disabled
              />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="branchId" className="col-sm-2 col-form-label">Branch Id</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="branchId"
              placeholder="Branch Id"
              onChange={(event) => setUserBranchId(event.target.value)}
              required
              />
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="button" className="btn btn-primary" onClick={addAdmin}>
            Add Gym Owner
          </button>
          &nbsp;&nbsp;
          <Link to="/alllocaladmins" className="btn btn-info">Back</Link>
        </div>
      </form>
    </div>
              </>
  );
};

export default AddAdmin;

