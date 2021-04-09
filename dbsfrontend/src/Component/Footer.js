import React, { Component } from "react";
import "../App.css";
class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <footer className="footer">
          <span>
            <h4>All right are reserved 2021 @capgemini</h4>
          </span>
        </footer>
      </div>
    );
  }
}

export default Footer;
