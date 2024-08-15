import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "../../common/constant";
import Logout from '../../screens/common/Logout';

const AllLocalAdmins = () => {
    const [admins, setAdmin] = useState([]);
    const history = useHistory();

    useEffect(() => {
        console.log("User component is mounted");
        getAdmin();
    }, []);

    const getAdmin = () => {
        axios.get(url + "/manager/managers").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK") {
                setAdmin(result.response);
            } else {
                alert("users not found");
            }
        });
    }

    const deleteAdmin = (admin) => {
        console.log(admin.id);
        axios.delete(url + "/manager/delete/manager/" + admin.id).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                getAdmin();
            } else {
                alert("error while user deletion");
            }
        })
    }

    return (
        <>
            <Logout />
        <div className="container my-4">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-center text-black">All Gym Manager</h1>
                <Link to="/addlocaladmin" className="btn btn-warning">Add Gym Manager</Link>
            </div>

            <table className="table table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Phone No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.length >= 1 ? admins.map(admin => {
                        return (
                            <tr key={admin.id} className="text-black">
                                <td className="text-black">{admin.id}</td>
                                <td className="text-black">{admin.firstName}</td>
                                <td className="text-black">{admin.lastName}</td>
                                <td className="text-black">{admin.phoneNo}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => { deleteAdmin(admin) }}>
                                        Delete
                                    </button>&nbsp;&nbsp;
                                    {/* <button type="button" className="btn btn-light" onClick={() => {
                                        history.push('/updatelocaladmin', { admins: admin })
                                    }}>
                                        Edit
                                    </button> */}
                                </td>
                            </tr>
                        )
                    }) : <tr><td colSpan="5" className="text-center text-black">No local admins found</td></tr>}
                </tbody>
            </table>
            <div className="text-end">
                <Link to="/adminpage" className="btn btn-info">Back</Link>
            </div>
        </div>
                    </>
    )
}

export default AllLocalAdmins;
