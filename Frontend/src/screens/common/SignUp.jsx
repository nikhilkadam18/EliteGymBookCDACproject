// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { url } from "../../common/constant";
// import { useHistory } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   const [firstName, setFname] = useState("");
//   const [lastName, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [dob, setDob] = useState("");
//   const [address, setAddress] = useState("");
//   const [role, setRole] = useState("MANAGER");
//   const history = useHistory();

//   const addUser = () => {
//     if (
//       firstName === "" ||
//       lastName === "" ||
//       email === "" ||
//       password === "" ||
//       address === "" ||
//       dob === "" ||
//       phone === ""
//     ) {
//       alert("Fields cannot be empty");
//     } else {
//       let data = {
//         firstName,
//         lastName,
//         email,
//         dob,
//         phoneNo: phone,
//         address,
//         password,
//         role,
//       };
//       console.log(data);

//       axios.post(url + "/manager/add/", data).then((response) => {
//         const result = response.data;
//         if (result.status === "OK") {
//           alert("Successfully registered");
//           history.push("/login");
//         } else {
//           alert("Email already exists");
//         }
//       });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//     <div className="container mt-5">
//       <div className="card shadow p-4">
//         <h2 className="text-center mb-4">Sign Up</h2>
//         <form>
//           <div className="form-group row mb-3">
//             <label htmlFor="fname" className="col-sm-2 col-form-label">
//               First Name
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="fname"
//                 placeholder="First Name"
//                 onChange={(event) => setFname(event.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-group row mb-3">
//             <label htmlFor="lname" className="col-sm-2 col-form-label">
//               Last Name
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="lname"
//                 placeholder="Last Name"
//                 onChange={(event) => setLname(event.target.value)}
//                 required
//                 />
//             </div>
//           </div>

//           <div className="form-group row mb-3">
//             <label htmlFor="dob" className="col-sm-2 col-form-label">
//               DOB
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="date"
//                 className="form-control"
//                 id="dob"
//                 onChange={(event) => setDob(event.target.value)}
//                 required
//                 />
//             </div>
//           </div>

//           <div className="form-group row mb-3">
//             <label htmlFor="email" className="col-sm-2 col-form-label">
//               Email
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="Email"
//                 onChange={(event) => setEmail(event.target.value)}
//                 required
//                 />
//             </div>
//           </div>

//           <div className="form-group row mb-3">
//             <label htmlFor="password" className="col-sm-2 col-form-label">
//               Password
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="Password"
//                 onChange={(event) => setPassword(event.target.value)}
//                 required
//                 />
//             </div>
//           </div>

//           <div className="form-group row mb-3">
//             <label htmlFor="address" className="col-sm-2 col-form-label">
//               Address
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address"
//                 placeholder="Address"
//                 onChange={(event) => setAddress(event.target.value)}
//                 required
//                 />
//             </div>
//           </div>

//           <div className="form-group row mb-3">
//             <label htmlFor="phone" className="col-sm-2 col-form-label">
//               Contact Number
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="number"
//                 className="form-control"
//                 id="phone"
//                 placeholder="Phone Number"
//                 onChange={(event) => setPhone(event.target.value)}
//                 required
//                 />
//             </div>
//           </div>

//           <div className="form-group row mb-4">
//             <label htmlFor="role" className="col-sm-2 col-form-label">
//               Role
//             </label>
//             <div className="col-sm-10">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="role"
//                 value="MANAGER"
//                 disabled
//                 /> 

//             {/* <label htmlFor="role">Choose the role:</label>
//             <select id="role" value={role} onChange={handleChange}>
//                 <option value="">--Select a role--</option>
//                 <option value="MANAGER">MANAGER</option>
//                 <option value="TRAINER">TRAINER</option>
//                 <option value="USER">USER</option>
//             </select> */}
//             </div>
//           </div>

//           <div className="text-center">
//             <button type="button" className="btn btn-primary me-2" onClick={addUser}>
//               Register
//             </button>
//             <Link to="/login">
//               <button type="button" className="btn btn-secondary">
//                 Back
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//                 </>
//   );
// };

// export default SignUp;



import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();

  // Formik validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    phone: Yup.number()
      .required("Contact Number is required")
      .typeError("Phone number must be a valid number")
      .test(
        "length",
        "Phone number must be exactly 10 digits",
        (val) => val && val.toString().length === 10
      ),
    dob: Yup.date().required("Date of Birth is required"),
    address: Yup.string().required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      dob: "",
      address: "",
      role: "MEMBER", // Default role set to MANAGER
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Convert phone to double format
      const data = {
        ...values,
        phoneNo: parseFloat(values.phone),
      };

      axios.post(url + "/member/add/", data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("Successfully registered");
          history.push("/login");
        } else {
          alert("Email already exists");
        }
      });
    },
  });

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group row mb-3">
              <label htmlFor="firstName" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-danger">{formik.errors.firstName}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="lastName" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-danger">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="dob" className="col-sm-2 col-form-label">
                DOB
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  {...formik.getFieldProps("dob")}
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <div className="text-danger">{formik.errors.dob}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="address" className="col-sm-2 col-form-label">
                Address
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-danger">{formik.errors.address}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="phone" className="col-sm-2 col-form-label">
                Contact Number
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-danger">{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group row mb-4">
              <label htmlFor="role" className="col-sm-2 col-form-label">
                Role
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="role"
                  value="MEMBER"
                  disabled
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary me-2">
                Register
              </button>
              <Link to="/login">
                <button type="button" className="btn btn-secondary">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
