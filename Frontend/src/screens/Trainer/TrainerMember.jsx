import { useParams, useHistory, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Logout from "../../screens/common/Logout";
import axios from "axios";
import { url } from "../../common/constant";

const Report = () => {
  const history = useHistory();
  const isSignin = useSelector((state) => state.isSignin);
  const location = useLocation();
  const TrainerData = location.state.trainerId;

  const [members, setMember] = useState([]);

  useEffect(() => {
    getMember();
  }, []);

  const getMember = () => {
    axios.get(url + "/member/trainmembers/" + TrainerData).then((response) => {
      const result = response.data;
      if (result.status === "OK") {
        setMember(result.response);
      } else {
        alert("Members not found");
      }
    });
  };

  return (
    <>
      <Logout />
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h1>My Members</h1>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Report</th>
              </tr>
            </thead>
            <tbody>
              {members.length >= 1 ? (
                members.map((member) => (
                  <tr key={member.id}>
                    <td className="text-black">{member.id}</td>
                    <td className="text-black">{member.firstName}</td>
                    <td className="text-black">{member.lastName}</td>
                    <td className="text-black">{member.email}</td>
                    <td className="text-black">{member.phoneNo}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          history.push('/updateReport', { member: member });
                        }}
                      >
                        View Report
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No members found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="card-footer text-right">
          <Link to="/trainerpage" className="btn btn-info">
            Back
          </Link>
        </div>
      </div>
    </div>
</>
  );
};

export default Report;
