import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import Logout from '../../screens/common/Logout';

const UpdateBranch = () => {
  const [locality, setLocality] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const location = useLocation();
  const branchData = location.state.branches;
  const history = useHistory();
  const [branchName, setbranchName] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
       
     const [phone, setPhone] = useState(0);
  useEffect(() => {
    setLocality(branchData.locality);
    setZipCode(branchData.zipCode);
  }, [branchData]);

  const handleUpdate = () => {
    const data = {
      id: branchData.id,
      branchName: branchData.branchName,
      locality: locality,
      city: branchData.city,
      state: branchData.state,
      zipCode: zipCode,
      phone: branchData.phone,
    };

    axios.put(url + "/branches/update/" + branchData.id, data).then((response) => {
      const result = response.data;
      if (result.status === "OK") {
        alert("Branch Updated");
        history.push("/allbranches");
      } else {
        alert("Branch not updated");
      }
    });
  };

  return (
    <>
      <Logout />
    <div className="container mt-4">
      <h2 className="text-center mb-4">Update Branch</h2>
      <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="branchId">Branch Id</label>
              <input type="number" className="form-control" value={branchData.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="branchName">Branch Name</label>
              <input
                type="text"
                className="form-control"
                value={branchData.branchName}
                onChange={(e) => setbranchName(e.target.value)}
                required
                readOnly
                />
            </div>
            <div className="form-group">
              <label htmlFor="locality">Locality</label>
              <input
                type="text"
                className="form-control"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                value={branchData.city}
                onChange={(e) => setCity(e.target.value)}
                required
                readOnly
                />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                value={branchData.state}
                onChange={(e) => setState(e.target.value)}
                required
                readOnly
                />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zipcode</label>
              <input
                type="number"
                className="form-control"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                className="form-control"
                value={branchData.phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                readOnly
                />
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                Update
              </button>
              <Link to="/allbranches" className="btn btn-secondary ml-2">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
                </>
  );
};

export default UpdateBranch;
