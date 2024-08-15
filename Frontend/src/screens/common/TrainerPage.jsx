import React from 'react';
import { Link } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrainerPage = () => {
  const history = useHistory();
  const isSignin = useSelector((state) => state.isSignin);

  const loginStatus = sessionStorage.getItem('LoginStatus');
  if (loginStatus != 1) {
    alert('Please sign in first!');
    history.push('/login');
  }

  return (
    <>
      <Logout />
    <div className="container mt-5">
      <hr />
      <div className="text-center">
        <h2>Trainer Page</h2>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-3">
          <Link onClick={() => { history.push('/trainermember', { trainerId: isSignin.user.id }) }}>
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Trainer Memeber</h5>
                <p className="card-text">Manage all members.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link to="/profilelocal">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Profile</h5>
                <p className="card-text">View Profile.</p>
              </div>
            </div>
          </Link>
        </div>
        </div>
        </div>
     
      </>
  );
}

export default TrainerPage;
