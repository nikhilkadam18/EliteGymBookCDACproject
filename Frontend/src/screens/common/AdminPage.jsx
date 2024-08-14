
import React from 'react';
import { Link } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AdminPage = () => {
  const history = useHistory();
  const isSignin = useSelector((state) => state.isSignin);

  const loginStatus = sessionStorage.getItem('LoginStatus');
  if (loginStatus != 1 || isSignin.status === false) {
    alert('Please sign in first!!');
    history.push('/login');
  }

  return (
    <>
      <Logout />
    <div className="container my-5">

      <div className="text-center mb-4">
        <h2>Admin Dashboard</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-3">
          <Link to="/allmembers">
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Members</h5>
                <p className="card-text">Manage all gym members.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link to="/alltrainers">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Trainers</h5>
                <p className="card-text">Manage all gym trainers.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link to="/alllocaladmins">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h5 className="card-title">Local Manager</h5>
                <p className="card-text">Manage local Manager .</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link to="/allbranches">
            <div className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h5 className="card-title">Branches</h5>
                <p className="card-text">Manage all branches.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default AdminPage;
