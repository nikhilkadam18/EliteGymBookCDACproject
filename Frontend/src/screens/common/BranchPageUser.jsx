import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux';
import { url } from "../../common/constant";
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const BranchPageUser = () => {
    const history = useHistory();
    const isSignin = useSelector((state) => state.isSignin);
    const location = useLocation();
    const branchData = location.state.branch;

    const [members, setMember] = useState([]);
    const [trainers, setTrainer] = useState([]);
    const [batches, setBatch] = useState([]);

    useEffect(() => {
        console.log("BranchPageUser component is mounted");
        getMember();
        getTrainer();
        getBatch();
    }, []);

    const getMember = () => {
        let data = {
            role: "MEMBER"
        };
        axios.post(url + "/manager/members/" + branchData.id, data).then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK") {
                setMember(result.response);
            } else {
                alert("Members not found");
            }
        });
    };

    const getTrainer = () => {
        let data = {
            role: "TRAINER"
        };
        axios.post(url + "/manager/trainers/" + branchData.id, data).then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK") {
                setTrainer(result.response);
            } else {
                alert("Trainers not found");
            }
        });
    };

    const getBatch = () => {
        axios.get(url + "/batches/batchesbyid/" + branchData.id).then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK") {
                setBatch(result.response);
            } else {
                alert("Batches not found");
            }
        });
    };

    return (
        <>
            <Navbar />
        <div className="container-fluid bg-light p-4">

            <div className="container bg-white p-4 rounded shadow">
                <h1 className="text-center text-dark mb-4">Branch Details</h1>

                {/* <div className="mb-4">
                    <h2 className="text-dark">Members</h2>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.length >= 1 ? members.map(member => (
                                <tr key={member.id}>
                                    <td className="text-black">{member.id}</td>
                                    <td className="text-black">{member.firstName}</td>
                                    <td className="text-black">{member.lastName}</td>
                                    <td className="text-black">{member.email}</td>
                                    <td className="text-black">{member.phoneNo}</td>
                                </tr>
                            )) : <tr><td colSpan="5" className="text-center">No members found</td></tr>}
                        </tbody>
                    </table>
                </div> */}

                <div className="mb-4">
                    <h2 className="text-dark">Trainers</h2>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trainers.length >= 1 ? trainers.map(trainer => (
                                <tr key={trainer.id}>
                                    <td className="text-black">{trainer.id}</td>
                                    <td className="text-black">{trainer.firstName}</td>
                                    <td className="text-black">{trainer.lastName}</td>
                                    <td className="text-black">{trainer.email}</td>
                                    <td className="text-black">{trainer.phoneNo}</td>
                                </tr>
                            )) : <tr><td colSpan="5" className="text-center">No trainers found</td></tr>}
                        </tbody>
                    </table>
                </div>

                <div className="mb-4">
                    <h2 className="text-dark">Batches</h2>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Id</th>
                                <th>Batch Time</th>
                                <th>Batch Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {batches.length >= 1 ? batches.map(batch => (
                                <tr key={batch.id}>
                                    <td className="text-black">{batch.id}</td>
                                    <td className="text-black">{batch.batchTime}</td>
                                    <td className="text-black">{batch.batchType}</td>
                                </tr>
                            )) : <tr><td colSpan="3" className="text-center">No batches found</td></tr>}
                        </tbody>
                    </table>
                </div>

                <div className="text-center">
                    <Link to="/" className="btn btn-info">Back</Link>
                </div>
            </div>
        </div>
                            </>
    );
};

export default BranchPageUser;
