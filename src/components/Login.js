import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //UserName
    if (!fields["userName"]) {
      formIsValid = false;
      errors["userName"] = "UserName Cannot be empty";
    }

    //password in diff way
    if (!fields.password) {
      formIsValid = false;
      errors.password = "Password Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Login form submitted");
    } else {
      //alert("Form has errors.")
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <h2> Login </h2>
        <form name="contactform" onSubmit={this.contactSubmit.bind(this)}>
          <p>
            <label>UserName : </label>
            <input ref="userName" type="text" size="30" placeholder="UserName"
              onChange={this.handleChange.bind(this, "userName")} value={this.state.fields["userName"]} />
            <span style={{ color: "red" }}>{this.state.errors["userName"]}</span>
          </p>
          <p>
            <label>Password : </label>
            <input refs="password" type="text" size="30" placeholder="Password"
              onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
            <span style={{ color: "red" }}>{this.state.errors["password"]}</span>

            &nbsp;<a style={{ textDecoration: 'none' }}  href="#/forgotPassword">ForgotPassword</a>          
          </p>

          <h4>
            Logging in as : {this.state.fields["userName"]}
          </h4>
          <button id="submit" value="Submit">Login</button>
          <p>
            New User? <a style={{ textDecoration: 'none' }} href="#/signup">Singup</a> Now
          </p>
        </form>
      </div>
    )
  }
}

export default Login;