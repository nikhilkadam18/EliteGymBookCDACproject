import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import Logout from '../../screens/common/Logout';
import { Link } from "react-router-dom";

const AllMembers = () => {
    const [members, setMember] = useState([]);

    useEffect(() => {
        console.log("User component is mounted");
        getMember();
    }, []);

    const getMember = () => {
        axios.get(url + "/member/members").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK") {
                setMember(result.response);
            } else {
                alert("users not found");
            }
        });
    }

    const deleteMember = (member) => {
        console.log(member.id);
        axios.delete(url + "/member/delete/member/" + member.id).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                getMember();
            } else {
                alert("error while user deletion");
            }
        })
    }

    return (
        <>
            <Logout />
        <div className="container mt-4" style={{ backgroundColor: "#000", color: "#fff", padding: "20px", borderRadius: "10px" }}>
            <h1 className="text-center mb-4">All Members</h1>

            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        members.length >= 1 ? members.map(member => {
                            return (
                                <tr key={member.id}>
                                    <td>{member.id}</td>
                                    <td>{member.firstName}</td>
                                    <td>{member.lastName}</td>
                                    <td>{member.phoneNo}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => { deleteMember(member) }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }) : <tr><td colSpan="5" className="text-center">No Members Found</td></tr>
                    }
                </tbody>
            </table>

            <div className="text-center">
                <Link to="/adminpage" className="btn btn-info">Back</Link>
            </div>
        </div>
                        </>
    )
}

export default AllMembers;
