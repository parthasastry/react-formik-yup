import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});

const BasicForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(data) => console.log(data)}
      >
        {(props) => {
          console.log(props);
          return (
            <form onSubmit={props.handleSubmit}>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  values={props.values.email}
                  onChange={props.handleChange}
                  name={"email"}
                  onBlur={props.handleBlur}
                  placeholder="Email...."
                />
                {props.errors.email && props.touched.email && (
                  <p>{props.errors.email}</p>
                )}
              </div>

              <div>
                <label>Password</label>
                <input
                  type="password"
                  values={props.values.password}
                  onChange={props.handleChange}
                  name={"password"}
                  onBlur={props.handleBlur}
                  placeholder="Password...."
                />
                {props.errors.password && props.touched.password && (
                  <p>{props.errors.password}</p>
                )}
              </div>

              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BasicForm;
