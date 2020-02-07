import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "../store/auth/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./login.scss";

const LoginForm = () => {
  return (
    <>
      <div className="intro">
        <h1> Welcome to the Adventure Game!</h1>
        <div>
          <Form className="form">
            <label className="label">username</label>
            <br />
            <Field className="field" name="username" type="text" />
            <label className="label">password</label>
            <Field className="field" name="password" type="password" />
            <button type="submit">Login</button>
          </Form>
        </div>
        <div>
          <p>Not yet registered?</p>
          <Link className="signup" to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter username"),
    password: Yup.string().required("Please enter password")
  }),

  handleSubmit(values, { props }) {
    console.log(props);
    props.signIn(values, props.history);
  }
})(LoginForm);

const mapStateToProps = state => {
  return {
    token: state.token,
    error: state.error
  };
};

export default connect(mapStateToProps, { signIn })(FormikLoginForm);
