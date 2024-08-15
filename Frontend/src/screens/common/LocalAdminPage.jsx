import React from 'react';
import {Link, useHistory } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import { useSelector } from 'react-redux';

const LocalAdminPage = () => {
  const history = useHistory();
  const isSignin = useSelector((state) => state.isSignin);

  const loginStatus = sessionStorage.getItem('LoginStatus');
  if (loginStatus != 1) {
    alert('please sign in first!');
    history.push('/login');
  }

  return (
    <>
      <Logout />
    <div className="container mt-4">
    <div className="text-center mb-4">
        <h2>Manager Dashboard</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <Link onClick={() => { history.push('/mybranchpage', { branchId: isSignin.user.branch.id }) }}>
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Branch Page</h5>
                <p className="card-text">Manage all branch members.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link onClick={() => { history.push('/packageslist', { branchId: isSignin.user.branch.id }) }}>
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Packages</h5>
                <p className="card-text">Manage all package.</p>
              </div>
            </div>
          </Link>
        </div>
        </div>
        </div>

      
  
    </>

  );
}

export default LocalAdminPage;
