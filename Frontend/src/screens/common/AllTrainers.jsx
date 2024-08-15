import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { Link } from "react-router-dom";
import Logout from '../../screens/common/Logout';

const AllTrainers = () => {
    const [trainers, setTrainer] = useState([]);

    useEffect(() => {
        console.log("User component is mounted");
        getTrainer();
    }, []);

    const getTrainer = () => {
        axios.get(url + "/trainer/trainers").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK") {
                setTrainer(result.response);
            } else {
                alert("users not found");
            }
        });
    }

    const deleteTrainer = (trainer) => {
        console.log(trainer.id);
        axios.delete(url + "/trainer/delete/trainer/" + trainer.id).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                getTrainer();
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
                <h1 className="text-center text-black">All Trainers</h1>
                
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
                    {trainers.length >= 1 ? trainers.map(trainer => {
                        return (
                            <tr key={trainer.id} className="text-black">
                                <td>{trainer.id}</td>
                                <td>{trainer.firstName}</td>
                                <td>{trainer.lastName}</td>
                                <td>{trainer.phoneNo}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => { deleteTrainer(trainer) }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }) : <tr><td colSpan="5" className="text-center text-black">No trainers found</td></tr>}
                </tbody>
            </table>
            <div className="text-end">
                <Link to="/adminpage" className="btn btn-info">Back</Link>
            </div>
        </div>
                    </>
    )
}

export default AllTrainers;
