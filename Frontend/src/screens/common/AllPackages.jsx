import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../../common/constant";
import Logout from '../../screens/common/Logout';

const AllPackages = () => {
    const [packages, setPackage] = useState([]);
    const history = useHistory();
    const isLogIn = useSelector((state) => state.isSignin);

    if (isLogIn.status === false) {
        alert('please sign in first!!');
        history.push('/signin');
    }

    useEffect(() => {
        getPackage();
    }, []);

    const getPackage = () => {
        axios.get(`${url}/packages/package`).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                setPackage(result.response);
            } else {
                alert("Packages not found");
            }
        });
    }

    const deletePackage = (packag) => {
        axios.delete(`${url}/packages/delete/${packag.id}`).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                getPackage();
            } else {
                alert("Error while deleting package");
            }
        });
    }

    return (
        <div className="container mt-5">
            <Logout />
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-center text-black">All Packages</h1>
                <Link to="/addpackage" className="btn btn-warning">Add Package</Link>
            </div>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Package Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.length >= 1 ? packages.map(packag => (
                        <tr key={packag.id}>
                            <td className="text-black">{packag.id}</td>
                            <td className="text-black">{packag.packageName}</td>
                            <td className="text-black">{packag.packageDescription}</td>
                            <td className="text-black">{packag.packagePrice}</td>
                            <td className="text-black">
                                <button type="button" className="btn btn-danger btn-sm mr-2" onClick={() => deletePackage(packag)}>
                                    Delete
                                </button>
                                <button type="button" className="btn btn-light btn-sm" onClick={() => history.push('/updatepackage', { packag })}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="5" className="text-center text-black">No Packages Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <Link to="/localadminpage" className="btn btn-info">Back</Link>
            </div>
        </div>
    );
}

export default AllPackages;
