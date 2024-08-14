import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "../../common/constant";
import Navbar from "../../components/Navbar";
import Logout from "./Logout";

const AllBranches = () => {
  const [branches, setBranch] = useState([]);
  const history = useHistory();

  useEffect(() => {
    console.log("Branch component is mounted");
    getBranch();
  }, []);

  const getBranch = () => {
    axios.get(url + "/branch/branch").then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "OK") {
        setBranch(result.response);
      } else {
        alert("Branches not found");
      }
    });
  };

  const deleteBranch = (branch) => {
    console.log(branch.id);
    axios.delete(url + "/branches/delete/" + branch.id).then((response) => {
      const result = response.data;
      if (result.status === "OK") {
        getBranch();
      } else {
        alert("Error while deleting branch");
      }
    });
  };

  return (
    <>
      <Logout/>
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="text-center text-black">All Branches</h1>
        <Link to="/addbranch" className="btn btn-warning">
          Add Branch
        </Link>
      </div>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Branch Name</th>
            <th>Locality</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {branches.length >= 1
            ? branches.map((branch) => (
                <tr key={branch.id} className="text-black">
                  <td className="text-black">{branch.id}</td>
                  <td className="text-black">{branch.branchName}</td>
                  <td className="text-black">{branch.locality}</td>
                  <td className="text-black">{branch.city}</td>
                  <td className="text-black">{branch.state}</td>
                  <td className="text-black">{branch.zipCode}</td>
                  <td className="text-black">{branch.phoneNo}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                          deleteBranch(branch);
                        }}
                        >
                      Delete
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-light btn-sm"
                      onClick={() => {
                          history.push("/updatebranch", { branches: branch });
                        }}
                        >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-dark btn-sm"
                      onClick={() => {
                          history.push("/branchpage", { branch: branch });
                        }}
                        >
                      View
                    </button>
                  </td>
                </tr>
              ))
              : ""}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/adminpage" className="btn btn-primary">
          Back
        </Link>
      </div>
    </div>
              </>
  );
};

export default AllBranches;
