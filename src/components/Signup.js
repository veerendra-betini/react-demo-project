import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2> Signup </h2>
        <form name="contactform">
          <p>
            <label>FirstName : </label>
            <input ref="firstName" type="text" size="30" placeholder="First Name"/>
          </p>
          <p>
            <label>DateOfBirth : </label>
            <input ref="dob" type="text" size="30" placeholder="mm/dd/yyy"/>
          </p>
          <p>
            <label>Email : </label>
            <input ref="email" type="text" size="30" placeholder="xxx@xxx.com"/>
          </p>
          <p>
            <label>Confirm Email : </label>
            <input ref="confirmEmail" type="text" size="30" placeholder="xxx@xxx.com"/>
          </p>
          <p>
            <label>Phone Number : </label>
            <input ref="phoneNumber" type="text" size="30" placeholder="xxx@xxx.com"/>
          </p>
          <button id="submit" value="Submit">Signup</button>
        </form>
      </div>
    )
  }
}

export default Signup;