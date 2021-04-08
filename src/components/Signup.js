import React, { Component, useState} from "react";

//Using hooks
function Signup() {
  const [fields, setSignupData] = useState({firstName: 'Veerendra', dob: '', email: '', confirmEmail: '', phoneNumber: ''});

  function changeSignupData(e) {
    setSignupData({...fields, [e.target.name]: e.target.value });
  }
    
  return (
    <div>
      <h2> Signup </h2>
      <form name="contactform">
        <p>
          <label>FirstName : </label>
          <input name="firstName" type="text" value={fields.firstName} onChange={changeSignupData}></input>
        </p>
        <p>
          <label>Date Of Birth : </label>
          <input name="dob" type="text" value={fields.dob} onChange={changeSignupData}></input>
        </p>
        <p>
          <label>Email : </label>
          <input name="email" type="text" value={fields.email} onChange={changeSignupData}></input>
        </p>
        <p>
          <label>Confirm Email : </label>
          <input name="confirmEmail" type="text" value={fields.confirmEmail} onChange={changeSignupData}></input>
        </p>
        <p>
          <label>Phone Number : </label>
          <input name="phoneNumber" type="text" value={fields.phoneNumber} onChange={changeSignupData}></input>
        </p>
       
        <button id="submit" value="Submit">Signup</button>
        
        <p>
          Signup details: {fields.firstName}, {fields.dob}
        </p>
      </form>
    </div>
  )
}

export default Signup;