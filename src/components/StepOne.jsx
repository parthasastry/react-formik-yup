import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const StepOne = (props) => {
  console.log("in StepOne, data passed ", props.data);
  const stepOneValidationSchema = Yup.object({
    house_address_line_1: Yup.string().required().label("Line 1"),
    house_address_city: Yup.string().required().label("City"),
    house_address_state: Yup.string().required().label("State"),
    house_address_zipcode: Yup.string().required().label("Zipcode"),
  });

  const handleSubmit = (values) => {
    props.next(values, false);
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {(props) => {
        console.log(props);
        return (
          <form onSubmit={props.handleSubmit}>
            <div>
              <input
                type="text"
                values={props.values.house_address_line_1}
                onChange={props.handleChange}
                name={"house_address_line_1"}
                placeholder="Address Line 1...."
              />
              {props.errors.house_address_line_1 && (
                <small className="text-red-500 italic">
                  {props.errors.house_address_line_1}
                </small>
              )}
            </div>

            <div>
              <input
                type="text"
                values={props.values.house_address_line_2}
                onChange={props.handleChange}
                name={"house_address_line_1"}
                placeholder="Address Line 2...."
              />
            </div>

            <div>
              <input
                type="text"
                values={props.values.house_address_city}
                onChange={props.handleChange}
                name={"house_address_city"}
                placeholder="City..."
              />
              {props.errors.house_address_city && (
                <small className="text-red-500 italic">
                  {props.errors.house_address_city}
                </small>
              )}
            </div>

            <div>
              <input
                type="text"
                values={props.values.house_address_state}
                onChange={props.handleChange}
                name={"house_address_state"}
                placeholder="State..."
              />
              {props.errors.house_address_state && (
                <small className="text-red-500 italic">
                  {props.errors.house_address_state}
                </small>
              )}
            </div>

            <div>
              <input
                type="text"
                values={props.values.house_address_zipcode}
                onChange={props.handleChange}
                name={"house_address_zipcode"}
                placeholder="zipcode..."
              />
              {props.errors.house_address_zipcode && (
                <small className="text-red-500 italic">
                  {props.errors.house_address_zipcode}
                </small>
              )}
            </div>

            <button type="submit">Next</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default StepOne;
