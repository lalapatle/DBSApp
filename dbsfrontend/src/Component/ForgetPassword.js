import React, { Component } from "react";
import "../Component/ForgetPassword.css";
import { Link } from "react-router-dom";
import LoginService from "../Services/LoginService";
class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cgGroupId: "",
    };
  }

  changeUserId = (e) => {
    this.setState({
      cgGroupId: e.target.value,
    });
  };

  // sendMail = (e) => {
  //   LoginService.getCredetialById(this.state.cgGroupId).then((res) => {
  //     let user = res.data;
  //     alert("Mail Sent successfully---");
  //   });
  // };
  render() {
    return (
      <>
        <div className="secondmain">
          <input
            className="username"
            type="text"
            align="center"
            placeholder="UserId"
            onChange={this.changeUserId}
            value={this.state.cgGroupId}
            required
          />

          <div className="btnsubmit">
            <button className="submit" align="center" onClick={this.sendMail}>
              Send Mail
            </button>
          </div>
          <Link to="/login">
            <button className="Back" align="center">
              Back
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default ForgetPassword;
