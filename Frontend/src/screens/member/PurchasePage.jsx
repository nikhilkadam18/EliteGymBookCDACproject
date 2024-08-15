import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal, Button, Form } from 'react-bootstrap';
import Logout from '../../screens/common/Logout';
const Purchasepage = () => {

    const isSignin = useSelector((state) => state.isSignin);
    const member = localStorage.getItem('myData');
    const history = useHistory(); 

    const [selectedPackage, setSelectedPackage] = useState("");
    const [packages, setPackages] = useState([]);

    const [selectedTrainer, setSelectedTrainer] = useState("");
    const [trainers, setTrainers] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState("");
    const [branches, setBranches] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');

    const loginStatus = sessionStorage.getItem('LoginStatus');
    if (loginStatus != 1) {
        alert('Please sign in first!!')
        history.push('/login')
    }

    useEffect(() => {
        axios.get(url + "/branch/branch").then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                setBranches(result.response);
            } else {
                alert("There are no gym branches");
            }
        })
    }, []);

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    const getTrainersFromBranch = () => {
        axios.get(url + "/trainer/trainers/" + selectedBranch).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                setTrainers(result.response);
            } else {
                alert("There are no Trainers");
            }
        })
    }

    const handleTrainerChange = (event) => {
        setSelectedTrainer(event.target.value);
    };

    const getPackagesFromBranch = () => {
        axios.get(url + "/packages/branch/" + selectedBranch).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                setPackages(result.response);
            } else {
                alert("There are no Packages");
            }
        })
    }

    const handlePackageChange = (event) => {
        setSelectedPackage(event.target.value);
    };

    const handlePurchase = () => {
        if (selectedTrainer === '' || selectedPackage === '' || selectedBranch === '') {
            alert("Fields cannot be empty");
        } else {
            setShowModal(true);
        }
    }

    const handlePaymentSubmit = () => {
        setShowModal(false);

        const data = {
            branchId: selectedBranch,
            trainerId: selectedTrainer,
            packageId: selectedPackage
        }

        axios.post(url + "/payment/add/" + member, data).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
                alert("Payment Done");
                history.push("/memberpage");
            } else {
                alert("Payment not done");
            }
        })
    }

    return (
        <div className="privacydiv">
            <Logout />
            <br /><br />

            <div className="row">
                <div className="mx-auto col-6 col-lg-6 ">
                    <label htmlFor="branch">Branch:</label>
                    <select
                        className="form-control"
                        id="branch"
                        onChange={handleBranchChange}
                    >
                        <option value="">Select Your Nearest Gym</option>
                        {branches.map((Branch) => (
                            <option value={Branch.id}>
                                {Branch.city}  -  {Branch.branchName}
                            </option>
                        ))}
                    </select>

                    <br /><br />

                    <label htmlFor="trainer">Trainer</label>
                    <select
                        className="form-control"
                        id="trainer"
                        onChange={handleTrainerChange}
                        onClick={getTrainersFromBranch}
                    >
                        <option value="">Select Trainer </option>
                        {trainers.map((Trai) => (
                            <option value={Trai.id}>
                                {Trai.firstName} {Trai.lastName}
                            </option>
                        ))}
                    </select>

                    <br /><br />

                    <label htmlFor="package">Select Package</label>
                    <select
                        className="form-control"
                        id="package"
                        onChange={handlePackageChange}
                        onClick={getPackagesFromBranch}
                    >
                        <option value="">Select Package </option>
                        {packages.map((Pack) => (
                            <option value={Pack.id}>
                                {Pack.packageName} - {Pack.price}
                            </option>
                        ))}
                    </select>

                    <br /><br />

                    <div className="mb-3">
                        <Button className="btn btn-primary" onClick={handlePurchase}>Pay Amount</Button>&nbsp;&nbsp;
                    </div>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Payment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formCardNumber">
                                    <Form.Label>Credit Card Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter card number"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formCvv">
                                    <Form.Label>CVV</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter CVV"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handlePaymentSubmit}>
                                Submit Payment
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
export default Purchasepage;
