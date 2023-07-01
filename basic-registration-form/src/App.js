import React, { useState } from 'react'
import "./App.css"
function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
    console.log({ values })
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value })
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value })
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    if (values.firstName && values.firstName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSumbit}>
        {submitted && valid ? <div className="success-message"> Success !! Thank you for registering the Form</div> : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          type='text'
          className="form-field"
          placeholder='First Name'
          name="firstName" />
        {submitted && !values.firstName ? <span>Please enter a First Name</span> : null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          type='text'
          className="form-field"
          placeholder='Last Name'
          name="lastName" />
        {submitted && !values.lastName ? <span>Please enter a Last Name </span> : null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          type='text'
          className="form-field"
          placeholder='email'
          name="email" />
        {submitted && !values.email ? <span>Please enter a Email</span> : null}
        <button
          className='form-field'
          type='sumbit'>
          Register
        </button>

      </form>
    </div>
  )
}

export default App