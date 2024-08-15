import React, { useState } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { Link,useHistory } from "react-router-dom";
import Logout from '../../screens/common/Logout';

const AddBranch = () => {
  const [branchName, setBranch] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNo, setPhone] = useState("");
  const history = useHistory();

  const addBranch = () => {
    if (branchName === "") {
      alert("Branch name can't be left empty");
    } else {
      const data = {
        branchName: branchName,
        locality: locality,
        city: city,
        state: state,
        zipCode: zipCode,
        phoneNo: phoneNo,
      };

      console.log(data);

      axios.post(url + "/branch/add", data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("Successfully registered");
          history.push("/allbranches");
        } else {
          alert("Error: Branch could not be added");
        }
      });
    }
  };

  return (
    <>
      <Logout />
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add Branch</h2>
      <div className="card shadow">
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label htmlFor="branchName" className="col-sm-2 col-form-label">
                Branch Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="branchName"
                  value={branchName}
                  placeholder="Branch Name"
                  onChange={(event) => setBranch(event.target.value)}
                  required
                  />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="locality" className="col-sm-2 col-form-label">
                Locality
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="locality"
                  value={locality}
                  placeholder="Locality"
                  onChange={(event) => setLocality(event.target.value)}
                  required
                  />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="city" className="col-sm-2 col-form-label">
                City
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={city}
                  placeholder="City"
                  onChange={(event) => setCity(event.target.value)}
                  required
                  />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="state" className="col-sm-2 col-form-label">
                State
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  value={state}
                  placeholder="State"
                  onChange={(event) => setState(event.target.value)}
                  required
                  />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="zipCode" className="col-sm-2 col-form-label">
                Zipcode
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="zipCode"
                  value={zipCode}
                  placeholder="Zipcode"
                  onChange={(event) => setZipCode(event.target.value)}
                  required
                  />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="phoneNo" className="col-sm-2 col-form-label">
                Contact Number
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="phoneNo"
                  value={phoneNo}
                  placeholder="Phone Number"
                  onChange={(event) => setPhone(event.target.value)}
                  required
                  />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 offset-sm-2">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={addBranch}
                  >
                  Add Branch
                </button>
                <Link to="/allbranches" className="btn btn-secondary btn-block mt-2">
                  Back
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
                  </>
  );
};

export default AddBranch;

