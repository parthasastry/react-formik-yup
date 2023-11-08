import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const StepTwo = (props) => {
  const stepTwoValidationSchema = Yup.object({
    seller_base_price: Yup.number()
      .required()
      .min(100000)
      .label("Base Price ($)"),
    seller_base_price_comments: Yup.string()
      .required()
      .label("Base Price comments"),
    seller_roof_price: Yup.number().required().min(0).label("Roof Price ($)"),
    seller_roof_price_comments: Yup.string().when("seller_roof_price", {
      is: (price) => price > 0,
      then: () => Yup.string().required().label("Roof comments"),
    }),
    seller_garage_price: Yup.number()
      .required()
      .min(0)
      .label("Garage Price ($)"),
    seller_garage_price_comments: Yup.string().when("seller_garage_price", {
      is: (price) => price > 0,
      then: () => Yup.string().required().label("Garage comments"),
    }),
  });

  const handleSubmit = (values) => {
    props.next(values, false);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {(props) => {
        console.log(props);
        return (
          <form onSubmit={props.handleSubmit}>
            <div>
              <input
                type="number"
                values={props.values.seller_base_price}
                onChange={props.handleChange}
                name={"seller_base_price"}
                placeholder="Base price"
              />
              {props.errors.seller_base_price && (
                <small className="text-red-500 italic">
                  {props.errors.seller_base_price}
                </small>
              )}
            </div>

            <div>
              <input
                type="text"
                values={props.values.seller_base_price_comments}
                onChange={props.handleChange}
                name={"seller_base_price_comments"}
                placeholder="Base price comments"
              />
              {props.errors.seller_base_price_comments && (
                <small className="text-red-500 italic">
                  {props.errors.seller_base_price_comments}
                </small>
              )}
            </div>

            <div>
              <input
                type="number"
                values={props.values.seller_roof_price}
                onChange={props.handleChange}
                name={"seller_roof_price"}
                placeholder="Roof price"
              />
            </div>

            <div>
              <input
                type="text"
                values={props.values.seller_roof_price_comments}
                onChange={props.handleChange}
                name={"seller_roof_price_comments"}
                placeholder="Roof price comments"
              />
              {props.errors.seller_roof_price_comments && (
                <small className="text-red-500 italic">
                  {props.errors.seller_roof_price_comments}
                </small>
              )}
            </div>
            <div>
              <input
                type="number"
                values={props.values.seller_garage_price}
                onChange={props.handleChange}
                name={"seller_garage_price"}
                placeholder="Garage price"
              />
            </div>

            <div>
              <input
                type="text"
                values={props.values.seller_garage_price_comments}
                onChange={props.handleChange}
                name={"seller_garage_price_comments"}
                placeholder="Garage price comments"
              />
              {props.errors.seller_garage_price_comments && (
                <small className="text-red-500 italic">
                  {props.errors.seller_garage_price_comments}
                </small>
              )}
            </div>

            <button type="button" onClick={() => props.prev(props.values)}>
              back
            </button>
            <button type="submit">Submit</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default StepTwo;
