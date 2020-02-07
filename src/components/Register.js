import React from "react";

import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { register } from "../store/auth/actions";
import "./register.scss";

const RegistrationForm = () => {
  return (
    <>
      <div className="intro">
        <h1>Welcome to the Adventure Game!</h1>
        <Form className="form">
          <label className="label">username</label>
          <Field
            className="field"
            type="text"
            placeholder="username"
            name="username"
          />
          <label className="label">password</label>
          <Field
            className="field"
            type="type"
            placeholder="password"
            name="password1"
          />
          <label className="label">confirm password</label>
          <Field
            className="field"
            type="type"
            placeholder="confirm password"
            name="password2"
          />
          <button type="submit">register</button>
        </Form>
      </div>
    </>
  );
};

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ username, password1, password2 }) {
    return {
      username: username || "",
      password1: password1 || "",
      password2: password2 || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username"),
    password1: Yup.string().required("Enter a password"),
    password2: Yup.string().required("Confirm password")
  }),

  handleSubmit(values, { props }) {
    props.register(values, props.history);
  }
})(RegistrationForm);

const mapStateToProps = state => {
  return {
    token: state.token,
    err: state.error
  };
};

export default connect(mapStateToProps, { register })(FormikRegistrationForm);
