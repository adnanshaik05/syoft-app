// SignUp.js
import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_firstname: "",
      user_email: "",
      user_password: "",
      user_phone: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      user_firstname: this.state.user_firstname,
      user_email: this.state.user_email,
      user_password: this.state.user_password,
      user_phone: this.state.user_phone,
      user_lastname: "Doe",
      user_city: "Hyderabad",
      user_zipcode: "500072",
    };
    fetch("https://syoft.dev/Api/user_registeration/api/user_registeration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="sign-up-container">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="user_firstname"
              value={this.state.user_firstname}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="user_email"
              value={this.state.user_email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="user_password"
              value={this.state.user_password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              name="user_phone"
              value={this.state.user_phone}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
