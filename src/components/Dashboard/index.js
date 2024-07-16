// Dashboard.js
import React from "react";

import "./index.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
    };
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <h3>Welcome, {this.state.user.user_firstname}!</h3>
        <p>Email: {this.state.user.user_email}</p>
        <p>Phone: {this.state.user.user_phone}</p>
        <p>Last Name: {this.state.user.user_lastname}</p>
        <p>City: {this.state.user.user_city}</p>
        <p>Zipcode: {this.state.user.user_zipcode}</p>
      </div>
    );
  }
}

export default Dashboard;
