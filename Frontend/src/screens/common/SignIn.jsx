// import { useHistory } from "react-router-dom";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import React from "react";
// import Navbar from "../../components/Navbar";
// import axios from "axios";
// import { url } from "../../common/constant";
// import { useDispatch } from "react-redux";
// import { LoginAction } from "../../actions/LoginAction";

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const UserLogin = () => {
//     if (email.length === 0) {
//       alert('Please enter email');
//     } else if (password.length === 0) {
//       alert('Please enter password');
//     } else {
//       let data = {
//         email: email,
//         password: password
//       };
//       console.log(data);
//       //send user info to the API
//       axios.post(`${url}/users/signin`, data).then((response) => {
//         const result = response.data;
//         dispatch(LoginAction(result.response));
//         if (result.status === "OK") {
//           sessionStorage.setItem('LoginStatus', 1);

//           Swal.fire({
//             icon: 'success',
//             title: `Login as ${email} successfully`,
//             showConfirmButton: false,
//             timer: 1500
//           });

//           if (result.role === "ADMIN") {
//             history.push('/adminpage');
//           } else if (result.role === "MANAGER") {
//             history.push('/localadminpage');
//           } else if (result.role === "TRAINER") {
//             history.push('/trainerpage');
//           } else if (result.role === "MEMBER") {
//             history.push('/memberpage');
//           }
//         } else {
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Email or Password Incorrect!',
//             footer: '<a href="/admin/signin">Why do I have this issue?</a>'
//           });
//         }
//       });
//     }
//   };

//   return (
//     <div className="privacydiv">
//       <Navbar />
//       <hr />
//       <div className="form-group row">
//         <label htmlFor="email5" className="col-sm-4 col-form-label" align="right">
//           Email
//         </label>
//         <div className="col-sm-4">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Email"
//             onChange={(event) => { setEmail(event.target.value) }}
//           />
//         </div>
//       </div>
//       <hr />
//       <div className="form-group row">
//         <label htmlFor="password5" className="col-sm-4 col-form-label" align="right">
//           Password
//         </label>
//         <div className="col-sm-4">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             onChange={(event) => { setPassword(event.target.value) }}
//           />
//         </div>
//       </div>
//       <hr />
//       <div className="text-center">
//         <button type="button" className="btn btn-primary" onClick={UserLogin}>
//           Sign in
//         </button>
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <Link to="/register" className="btn btn-success">SignUp</Link>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { url } from "../../common/constant";
import { LoginAction } from "../../actions/LoginAction";
import { Link } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };

      axios.post(`${url}/users/signin`, data).then((response) => {
        const result = response.data;
        dispatch(LoginAction(result.response));
        if (result.status === "OK") {
          sessionStorage.setItem("LoginStatus", 1);

          Swal.fire({
            icon: "success",
            title: `Login as ${values.email} successfully`,
            showConfirmButton: false,
            timer: 1500,
          });

          switch (result.role) {
            case "ADMIN":
              history.push("/adminpage");
              break;
            case "MANAGER":
              history.push("/localadminpage");
              break;
            case "TRAINER":
              history.push("/trainerpage");
              break;
            case "MEMBER":
              history.push("/memberpage");
              break;
            default:
              break;
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email or Password Incorrect!",
            footer: '<a href="/admin/signin">Why do I have this issue?</a>',
          });
        }
      });
    },
  });

  return (
    <div className="privacydiv">
      <Navbar />
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="email5" className="col-sm-4 col-form-label" align="right">
            Email
          </label>
          <div className="col-sm-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email5"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <hr />
        <div className="form-group row">
          <label htmlFor="password5" className="col-sm-4 col-form-label" align="right">
            Password
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password5"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
        </div>
        <hr />
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/register" className="btn btn-success">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
