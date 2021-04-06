import React, { Component, useState} from "react";

//Using hooks
function Signup() {
  const [fields, setSignupData] = useState({
    firstName: 'Veerendra', dob: '', email: '',
    confirmEmail: '', phoneNumber: ''
  });

  const errors = {};

  function signupData(e) {
    setSignupData({ ...fields, [e.target.name]: e.target.value });
    if (!fields["email"]) {
      errors.email = 'Email can not be empty!';
      alert(errors.email);
    }
  }
    
  return (
    <div>
      <h2> Signup </h2>
      <form name="contactform">
        <p>
          <label>FirstName : </label>
          <input name="firstName" type="text" value={fields.firstName} onChange={signupData}></input>
        </p>
        <p>
          <label>Date Of Birth : </label>
          <input name="dob" type="text" value={fields.dob} onChange={signupData}></input>
        </p>
        <p>
          <label>Email : </label>
          <input name="email" type="text" value={fields.email} onBlur={signupData}></input> //TODO
          <span>{errors["email"]}</span>
        </p>
        <p>
          <label>Confirm Email : </label>
          <input name="confirmEmail" type="text" value={fields.confirmEmail} onChange={signupData}></input>
        </p>
        <p>
          <label>Phone Number : </label>
          <input name="phoneNumber" type="text" value={fields.phoneNumber} onChange={signupData}></input>
        </p>
       
        <button id="submit" value="Submit">Signup</button>
        <p>
          Suginup Details : {fields["firstName"]}, {fields["dob"]} //Todo
        </p>
      </form>
    </div>
  )
}

export default Signup;