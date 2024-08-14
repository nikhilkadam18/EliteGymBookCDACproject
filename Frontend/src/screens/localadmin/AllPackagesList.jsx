import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { url } from "../../common/constant";
import Logout from '../../screens/common/Logout';

const AllPackages = () => {
    const history = useHistory();
    const isSignin = useSelector((state) => state.isSignin);
    const location = useLocation();
    const branchData = location.state.branchId;
    const [packages, setPackage] = useState([]);
    
    const loginStatus = sessionStorage.getItem('LoginStatus');
    if (loginStatus != 1) {
        alert('Please sign in first!');
        history.push('/login');
    }

    useEffect(() => {
        getPackage();
    }, []);

    const getPackage = () => {
        axios.get(`${url}/packages/branch/${branchData}`).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                setPackage(result.response);
            } else {
                alert("Packages not found");
            }
        });
    }

    return (
        <>
            <Logout />
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-center text-black">All Packages</h1>
                <button className="btn btn-warning" onClick={() => { history.push('/packageadd', { branchId: isSignin.user.branch.id }) }}>
                    Add Package
                </button>
            </div>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Package Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.length >= 1 ? packages.map(packag => (
                        <tr key={packag.id}>
                            <td className="text-black">{packag.id}</td>
                            <td className="text-black">{packag.packageName}</td>
                            <td className="text-black">{packag.description}</td>
                            <td className="text-black">{packag.price}</td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="4" className="text-center text-black">No Packages Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <Link to="/localadminpage" className="btn btn-primary">Back</Link>
            </div>
        </div>
                    </>
    );
}

export default AllPackages;
