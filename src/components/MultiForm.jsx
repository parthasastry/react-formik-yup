import { useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const MultiForm = () => {
  const [data, setData] = useState({
    house_address_line_1: "",
    house_address_line_2: "",
    house_address_city: "",
    house_address_state: "",
    house_address_zipcode: "",
    seller_base_price: 0,
    seller_base_price_comments: "",
    seller_roof_price: 0,
    seller_roof_price_comments: "",
    seller_garage_price: 0,
    seller_garage_price_comments: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const makeAPIRequest = (formData) => {
    console.log("Form submitted, data is: ", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeAPIRequest(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo prev={handlePrevStep} next={handleNextStep} data={data} />,
  ];

  console.log("data: ", data);

  return <div className="App">{steps[currentStep]}</div>;
};

export default MultiForm;
