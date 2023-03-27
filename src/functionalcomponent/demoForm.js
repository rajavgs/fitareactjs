import React, { useState } from "react";
import PropTypes from "prop-types";

function DemoForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (event) => {
    console.log("I am coming", event.target);
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSbmit = (event) => {
    event.preventDefault();

    if (!values.firstName) {
      alert("please fill the value of F name");
      return;
    }

    if (!values.lastName) {
      alert("please fill the value of L name");
      return;
    }

    if (!validateEmail(values.email)) {
      alert("please fill the valid  email");
      return;
    }

    alert("Value submitted successfully");

    setValues({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  //   const handleFirstNameInputChange = (event) => {
  //     console.log("first", event.target);
  //     setValues((values) => ({
  //       ...values,
  //       firstName: event.target.value,
  //     }));
  //   };
  //   const handleSecondtNameInputChange = (event) => {
  //     console.log("first", event.target);
  //     setValues((values) => ({
  //       ...values,
  //       lastName: event.target.value,
  //     }));
  //   };
  //   const handleEmail = (event) => {
  //     console.log("first", event.target);
  //     setValues((values) => ({
  //       ...values,
  //       email: event.target.value,
  //     }));
  //   };
  return (
    <div>
      <form onSubmit={handleSbmit}>
        <input
          id="first-name"
          name="firstName"
          type="text"
          placeholder="FName"
          value={values.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          id="last-name"
          name="lastName"
          type="text"
          placeholder="LName"
          value={values.lastName}
          onChange={handleInputChange}
        />
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

DemoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default DemoForm;
