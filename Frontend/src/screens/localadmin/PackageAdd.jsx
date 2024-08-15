import React, { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from '../../screens/common/Logout';
import { url } from "../../common/constant";

const AddPackage = () => {
  const history = useHistory();
  const isSignin = useSelector((state) => state.isSignin);
  const location = useLocation();
  const branchData = location.state.branchId;

  const [packageName, setPackageName] = useState("");
  const [packagePrice, setPrice] = useState("");
  const [packageDescription, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const loginStatus = sessionStorage.getItem('LoginStatus');
  if (loginStatus != 1) {
    alert('Please sign in first!');
    history.push('/login');
  }

  const addPackage = () => {
    if (packageName === '') {
      alert("Package name cannot be empty");
      return;
    }

    setLoading(true);

    const data = {
      packageName: packageName,
      price: packagePrice,
      description: packageDescription
    };

    axios.post(url + "/packages/add/" + branchData, data)
      .then((response) => {
        setLoading(false);
        const result = response.data;
        if (result.status === "OK") {
          alert("Package added successfully");
          history.push("/localadminpage");
        } else {
          alert("Error: Unable to add package");
        }
      })
      .catch((error) => {
        setLoading(false);
        alert("Error: " + error.message);
      });
  };

  return (
    <>
      <Logout />
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Add New Package</h4>
            </div>
            <div className="card-body">
              <div className="form-group mb-3">
                <label>Package Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter package name"
                  value={packageName}
                  onChange={(event) => setPackageName(event.target.value)}
                  required
                  />
              </div>
              <div className="form-group mb-3">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter package price"
                  value={packagePrice}
                  onChange={(event) => setPrice(event.target.value)}
                  required
                  />
              </div>
              <div className="form-group mb-4">
                <label>Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter package description"
                  value={packageDescription}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                  />
              </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={addPackage} disabled={loading}>
                  {loading ? "Adding..." : "Add Package"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                  </>
  );
};

export default AddPackage;

