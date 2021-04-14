import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";

// Using useState hook
function ForgotPassword(props) {
  const params = useParams();
  let loginUserName=params.loginUser;

  const [fields, setData] = useState({ userName: loginUserName, dob: '1944-11-22', email:'' });

  function changeData(e) {
    setData({ ...fields, [e.target.name]: e.target.value });
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    alert(JSON.stringify(fields))
  }

  return (
    <div>
      <h2> Forgot Password </h2>
      <form name="contactform">
        <p>
          <label>UserName: </label>
          <input name="userName" type="text" value={fields.userName} onChange={changeData}></input>
        </p>
        <p>
          <label>Date Of Birth: </label>
          <input name="dob" type="date" value={fields.dob} onChange={changeData}></input>
        </p>

        <p>
          <label>Email: </label>
          <input name="email" type="email" value={fields.email} onChange={changeData}></input>
        </p>

        <button id="submit" value="Submit" onClick={handleSubmitClick}>Continue</button>
        <p>
          User details: {fields.userName}, {fields.dob}
        </p>
      </form>
    </div>
  )
}
export default ForgotPassword;
