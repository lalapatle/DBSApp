import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="row main">
          <div className="col-md-3">
            <img
              src={
                "https://mms.businesswire.com/media/20200116005802/en/768027/22/Capgemini_Logo_Color_Print_highres.jpg"
              }
            />
          </div>
          <div className="col-md-9">
            <h2 className="title">DBS PROCESS INFORMATION MANAGEMENT SYSTEM</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
