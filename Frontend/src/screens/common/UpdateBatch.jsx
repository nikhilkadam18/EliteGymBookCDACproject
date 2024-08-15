import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logout from '../../screens/common/Logout';

const UpdateBatch = () => {
  const [batchTime, setBatchTime] = useState("");
  const location = useLocation();
  const batchData = location.state.batchess;
  const history = useHistory();

  useEffect(() => {
    setBatchTime(batchData.batchTime);
  }, [batchData]);

  const handleUpdate = () => {
    const data = {
      id: batchData.id,
      batchType: batchData.batchType,
      batchTime: batchTime,
      branch: batchData.branch,
    };

    axios.put(url + "/batches/update/" + batchData.id, data).then((response) => {
      const result = response.data;
      if (result.status === "OK") {
        alert("Batch Updated");
        history.push("/localadminpage");
      } else {
        alert("Batch not updated");
      }
    });
  };

  return (
    <>
      <Logout />
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Update Batch</h4>
            </div>
            <div className="card-body">
              <div className="form-group mb-3">
                <label htmlFor="batchId">Batch ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="batchId"
                  value={batchData.id}
                  readOnly
                  />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="batchType">Batch Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="batchType"
                  value={batchData.batchType}
                  readOnly
                  />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="batchTime">Batch Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="batchTime"
                  value={batchTime}
                  onChange={(e) => setBatchTime(e.target.value)}
                  required
                  />
              </div>
              <div className="text-center">
                <button className="btn btn-primary mr-2" onClick={handleUpdate}>
                  Update
                </button>
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

export default UpdateBatch;
