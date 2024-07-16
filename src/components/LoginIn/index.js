// LogIn.js
import React from "react";
import "./index.css";

class LoginIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      user_email: this.state.user_email,
      user_password: this.state.user_password,
    };
    fetch("https://syoft.dev/Api/userlogin/api/userlogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        this.props.history.push("/dashboard");
      })
      .catch((error) => console.error(error));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="log-in-container">
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginIn;
