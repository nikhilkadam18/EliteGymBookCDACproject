
import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { url } from "../../common/constant";
import 'bootstrap/dist/css/bootstrap.min.css';

const AllBranchesUser = () => {
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
    }

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
    }

    return (
        <div className="container-fluid mt-4">
            <h1 className="text-center mb-4 text-dark">All Gyms</h1>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th className="text-white">Id</th>
                            <th >Branch Name</th>
                            <th >Locality</th>
                            <th >City</th>
                            <th >State</th>
                            <th >Zipcode</th>
                            <th >Phone</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {branches.length >= 1 ? branches.map(branch => (
                            <tr key={branch.id}>
                                <td className="text-dark">{branch.id}</td>
                                <td className="text-dark">{branch.branchName}</td>
                                <td className="text-dark">{branch.locality}</td>
                                <td className="text-dark">{branch.city}</td>
                                <td className="text-dark">{branch.state}</td>
                                <td className="text-dark">{branch.zipCode}</td>
                                <td className="text-dark">{branch.phoneNo}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        onClick={() => {
                                            history.push('/branchpageuser', { branch: branch });
                                        }}>
                                        View
                                    </button>
                                </td>
                            </tr>
                        )) : <tr><td colSpan="8" className="text-center text-dark">No branches found</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllBranchesUser;
