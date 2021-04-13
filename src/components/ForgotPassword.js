import React, { Component, useState } from "react";

function ForgotPassword() {
  const [fields, setSignupData] = useState({ userName: '', dob: '11/22/1944' });

  function changeSignupData(e) {
    setSignupData({ ...fields, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2> Forgot Password </h2>
      <form name="contactform">
        <p>
          <label>UserName: </label>
          <input name="userName" type="text" value={fields.userName} onChange={changeSignupData}></input>
        </p>
        <p>
          <label>Date Of Birth: </label>
          <input name="dob" type="date" value={fields.dob} onChange={changeSignupData}></input>
        </p>

        <button id="submit" value="Submit">Continue</button>
        <p>
          User details: {fields.userName}, {fields.dob}
        </p>
      </form>
    </div>
  )
}
export default ForgotPassword;
