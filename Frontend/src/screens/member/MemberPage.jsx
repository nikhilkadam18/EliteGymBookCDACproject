import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import { useSelector } from 'react-redux';

const MemberPage = () => {
  const loginStatus = sessionStorage.getItem('LoginStatus');
  const history = useHistory();

  if (loginStatus != 1) {
    alert('Please sign in first!');
    history.push('/login');
  }

  const isSignin = useSelector((state) => state.isSignin);
  localStorage.setItem('myData', isSignin.user.id);

  return (
    <>
      <Logout />
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>Member Page</h1>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-4">
          <Link onClick={() => { history.push('/purchasepage') }}>
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Purchase Membership</h5>
                <p className="card-text">Members Purchase pacakges.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link onClick={() => { history.push('/addreport') }}>
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Add Report View Report</h5>
                <p className="card-text">User View diet and workout plan.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link to="/profilemember">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h5 className="card-title">Profile</h5>
                <p className="card-text">View own Profile .</p>
              </div>
            </div>
          </Link>
        </div>

      
      </div>
    </div>
    </>
  );
};

export default MemberPage;
