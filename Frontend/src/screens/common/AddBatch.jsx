import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import { url } from "../../common/constant";

const AddBatch = () => {
  const [branch, setBranch] = useState("");
  const [batchTime, setTime] = useState("");
  const [batchType, setType] = useState("");
  const history = useHistory();

  const addBatch = () => {
    if (batchTime === "" || batchType === "" || branch === "") {
      alert("All fields must be filled out");
    } else {
      const data = {
        batchTime: batchTime,
        batchType: batchType,
      };

      axios.post(url + "/batches/add/" + branch, data)
        .then((response) => {
          const result = response.data;
          if (result.status === "OK") {
            alert("Batch successfully registered");
            history.push("/localadminpage");
          } else {
            alert("Error: Unable to add batch");
          }
        });
    }
  };

  const onChangeValue = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <Logout />
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Add New Batch</h4>
            </div>
            <div className="card-body">
              <div className="form-group mb-3">
                <label>Branch ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Branch ID"
                  value={branch}
                  onChange={(event) => setBranch(event.target.value)}
                  required
                  />
              </div>
              <div className="form-group mb-3">
                <label>Batch Time</label>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Enter Batch Time"
                  value={batchTime}
                  onChange={(event) => setTime(event.target.value)}
                  required
                  />
              </div>
              <div className="form-group mb-4">
                <label>Batch Type</label>
                <div className="custom-control custom-radio">
                  <input type="radio" id="yoga" name="batchType" value="YOGA" className="custom-control-input" onChange={onChangeValue} />
                  <label className="custom-control-label" htmlFor="yoga">YOGA</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="zumba" name="batchType" value="ZUMBA" className="custom-control-input" onChange={onChangeValue} />
                  <label className="custom-control-label" htmlFor="zumba">ZUMBA</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="aerobics" name="batchType" value="AEROBICS" className="custom-control-input" onChange={onChangeValue} />
                  <label className="custom-control-label" htmlFor="aerobics">AEROBICS</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="crossfit" name="batchType" value="CROSSFIT" className="custom-control-input" onChange={onChangeValue} />
                  <label className="custom-control-label" htmlFor="crossfit">CROSSFIT</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="weight" name="batchType" value="WEIGHT_TRAINING" className="custom-control-input" onChange={onChangeValue} />
                  <label className="custom-control-label" htmlFor="weight">WEIGHT TRAINING</label>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary mr-2" onClick={addBatch}>Add Batch</button>
                <Link to="/localadminpage">
                  <button className="btn btn-secondary">Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                  </>
  );
};

export default AddBatch;
