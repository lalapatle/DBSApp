import React, { Component } from "react";
import "../Component/Home.css";
class Home extends Component {
  render() {
    return (
      <>
        <div className="row list">
          <div className="ListDropdown">
            <div class="dropdown">
              <button class="dropbtn">Select option</button>
              <div class="dropdown-content">
              <a href="/superAdmin">Super Admin</a>
              <a href="/employee">Operation Team</a>
              <a href="/personalinfo">Associate</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
