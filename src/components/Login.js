import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "../store/auth/actions";
import { connect } from "react-redux";

const LoginForm = () => {
  return (
    <Form>
      <label>username</label>
      <Field placeholder="username" name="username" type="text" />
      <label>password</label>
      <Field placeholder="password" name="password" type="text" />
      <button type="submit">Login</button>
    </Form>
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
