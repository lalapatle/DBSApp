import React, { Component } from "react";
import "../Component/Profile.css";
import LoginService from "../Services/LoginService";
import "../App.css";
import { Link } from "react-router-dom";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      showChangePassword: false,
      login: {},
      cgGroupId: this.props.match.params.cgGroupId,
    };
    this.onView = this.onView.bind(this);

    this.OnChangePassword = this.OnChangePassword.bind(this);
    this.onClickShow = this.onClickShow.bind(this);
  }

  changeUserId = (e) => {
    this.setState({
      cgGroupId: e.target.value,
    });
  };

  changeNewpassword = (e) => {
    this.setState({
      newPassword: e.target.value,
    });
  };
  changeOldpassword = (e) => {
    this.setState({
      oldPassword: e.target.value,
    });
  };

  onView(e) {
    console.log(e.target.value);
    e.preventDefault();
    if (this.state.isShow === false) {
      this.setState({
        isShow: true,
        showChangePassword: false,
      });
    } else {
      this.setState({
        isShow: false,
      });
    }

    LoginService.getCredetialById(this.state.cgGroupId).then((res) => {
      this.setState({
        login: res.data,
      });
      console.log(this.state.login);
    });
  }

  OnChangePassword(e) {
    e.preventDefault();
    if (this.state.showChangePassword === false) {
      this.setState({
        showChangePassword: true,
      });
    } else {
      this.setState({
        showChangePassword: false,
      });
    }

    let changeLogin = {
      cgGroupId: this.state.cgGroupId,
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword,
    };
    LoginService.resetPassword(changeLogin).then((res) => {
      alert("Password Changed Successfully");
      console.log(res.data);
    });
  }
  onClickShow(e) {
    this.setState({
      showChangePassword: true,
      isShow: false,
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <h1 className="text-center headingtitle">Profile</h1>
          </div>

          <div className="Content">
            <div className="row">
              <div className="col-sm-4">
                <div className="profilebtn">
                  <button
                    className="pbtn"
                    onClick={this.onView}
                    // onDoubleClick={this.OnisShow}
                  >
                    View Profile
                  </button>
                  <button className="pbtn" onClick={this.onClickShow}>
                    Change Password
                  </button>
                  <Link to={`/associatePortal/${this.state.cgGroupId}`}>
                    <button className="pbtn">Back</button>
                  </Link>
                </div>
              </div>

              <div className="col-sm-8">
                {this.state.isShow ? (
                  <div className="card col-md-6 offset-md-3 card">
                    <div className="row">
                      <label> Cg Group Id </label>&nbsp;&nbsp;
                      <div> {this.state.login.cgGroupId}</div>
                    </div>

                    <div className="row">
                      <label> Email: </label>&nbsp;&nbsp;
                      <div> {this.state.login.email}</div>
                    </div>

                    <div className="row">
                      <label> Password: </label>&nbsp;&nbsp;
                      <div> {this.state.login.password}</div>
                    </div>

                    <div className="row">
                      <label> Role: </label>&nbsp;&nbsp;
                      <div> {this.state.login.role}</div>
                    </div>
                  </div>
                ) : null}

                {this.state.showChangePassword ? (
                  <div className="card col-md-6 offset-md-3 card">
                    <form className="form1">
                      <input
                        className="un comman"
                        type="text"
                        align="center"
                        placeholder="UserId"
                        onChange={this.changeUserId}
                        value={this.state.cgGroupId}
                        required
                      />
                      <input
                        className="pass comman"
                        type="password"
                        align="center"
                        placeholder="oldPassword"
                        onChange={this.changeOldpassword}
                        value={this.state.oldPassword}
                      />
                      <input
                        className="pass comman"
                        type="password"
                        align="center"
                        placeholder="newPassword"
                        onChange={this.changeNewpassword}
                        value={this.state.newPassword}
                      />
                      <div className="btnchange">
                        <button
                          className="changebtn"
                          onClick={this.OnChangePassword}
                        >
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
