import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "must be 15 characters long")
      .required('Required'),

    lastName: Yup.string()
      .max(20, "must be 20 characters long")
      .required("required"),

    email: Yup.string().email("email is invalid").required("required"),

    // password: Yup.string()
    //   .min(6, "password must be at least 6 characters long")
    //   .required("Password is reqired"),

    password: Yup.string()
          .required('Please Enter your password')
          .matches(

            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("confirm Password is reqired"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit = {values=>{
        alert("You are signed up!!");
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4"> Signup</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />

            <TextField label="Email" name="email" type="email" />

            <TextField label="password" name="password" type="password" />

            <TextField
              label="Confirm password"
              name="confirmPassword"
              type="password"
            />
            <button style={{margin: "10px"}} className="btn btn-dark mt-3" type="submit">
              Signup
            </button>
            <button style={{margin: "10px"}} className="btn btn-danger mt-3 ml-3" type="reset">
              reset the form
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
