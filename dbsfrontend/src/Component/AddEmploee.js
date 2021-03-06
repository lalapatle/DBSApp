import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class AddEmploee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sno: "",
      resourceStatus: "",
      billability: "",
      currency: "",
      lwdAccount: "",
      lwdReason: "",
      pesStatus: "",
      billRate: "",
      sowStart: "",
      sowEnd: "",
      poNumbers: "",
      comments: "",
      cgGroupId: "",

      errors: {
        cgGroupId: "",
      },
    };
    this.changeResourceStatusHandler = this.changeResourceStatusHandler.bind(
      this
    );
    this.changeBillabilityHandler = this.changeBillabilityHandler.bind(this);
    this.changeLwdAccountHandler = this.changeLwdAccountHandler.bind(this);
    this.changeLwdReasonHandler = this.changeLwdReasonHandler.bind(this);
    this.changePesStatusHandler = this.changePesStatusHandler.bind(this);
    this.changeBillRateHandler = this.changeBillRateHandler.bind(this);
    this.changeCurrencyHandler = this.changeCurrencyHandler.bind(this);
    this.changeSowStartHandler = this.changeSowStartHandler.bind(this);
    this.changeSowEndHandler = this.changeSowEndHandler.bind(this);
    this.changePoNumbersHandler = this.changePoNumbersHandler.bind(this);
    this.changeCommentsHandler = this.changeCommentsHandler.bind(this);
    this.changeCgGroupIdHandler = this.changeCgGroupIdHandler.bind(this);
    this.saveProfessional = this.saveProfessional.bind(this);
  }

  saveProfessional = (p) => {
    p.preventDefault();

    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      let personal = {
        sNo: this.state.sNo,
        resourceStatus: this.state.resourceStatus,
        billability: this.state.billability,
        currency: this.state.currency,
        lwdAccount: this.state.lwdAccount,
        lwdReason: this.state.lwdReason,
        pesStatus: this.state.pesStatus,
        billRate: this.state.billRate,
        sowStart: this.state.sowStart,
        sowEnd: this.state.sowEnd,
        poNumbers: this.state.poNumbers,
        comments: this.state.comments,
        cgGroupId: this.state.cgGroupId,
      };
      console.log("personal => " + JSON.stringify(personal));
      EmployeeService.createEmployee(this.state.cgGroupId, personal).then(
        (res) => {
          alert("Details Added Successfully. :)");
          this.props.history.push(`/employee`);
        }
      );
    } else {
      alert("Please check data once again!!");
      console.error("Invalid Form");
    }
  };

  changeResourceStatusHandler = (event) => {
    this.setState({ resourceStatus: event.target.value });
  };
  changeBillabilityHandler = (event) => {
    this.setState({ billability: event.target.value });
  };

  changeLwdAccountHandler = (event) => {
    this.setState({ lwdAccount: event.target.value });
  };
  changeLwdReasonHandler = (event) => {
    this.setState({ lwdReason: event.target.value });
  };
  changeCurrencyHandler = (event) => {
    this.setState({ currency: event.target.value });
  };
  changePesStatusHandler = (event) => {
    this.setState({ pesStatus: event.target.value });
  };
  changeBillRateHandler = (event) => {
    this.setState({ billRate: event.target.value });
  };
  changeSowStartHandler = (event) => {
    this.setState({ sowStart: event.target.value });
  };
  changeSowEndHandler = (event) => {
    this.setState({ sowEnd: event.target.value });
  };
  changePoNumbersHandler = (event) => {
    this.setState({ poNumbers: event.target.value });
  };
  changeCommentsHandler = (event) => {
    this.setState({ comments: event.target.value });
  };

  changeCgGroupIdHandler = (event) => {
    let errors = this.state.errors;
    errors.cgGroupId =
      event.target.value.length < 0 || event.target.value === ""
        ? "*Please specify CG group Id!"
        : "";
    this.setState({ errors, cgGroupId: event.target.value });
  };

  cancel() {
    this.props.history.push(`/employee`);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-10 offset-md-2 offset-md-2">
              <h2 className="text-center">Employee Details</h2>
              <div className="card-body">
                <form onClick={this.saveProfessional}>
                  <div className="form-group">
                    <label for="resourceStatus">Resource State: </label>
                    <select
                      id="resourceStatus"
                      name="resourceStatus"
                      value={this.state.resourceStatus}
                      onChange={this.changeResourceStatusHandler}
                    >
                      <option value="">-Select option-</option>
                      <option value="Onboarded">Onboarded</option>
                      <option value="In-Progress">In-Progress</option>
                      <option value="Yet to join">Yet to join</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="billability">
                      Billability(Billable/Buffer):{" "}
                    </label>
                    <select
                      id="billability"
                      name="billability"
                      value={this.state.billability}
                      onChange={this.changeBillabilityHandler}
                    >
                      <option value="">-Select option-</option>
                      <option value="Billable">Billable</option>
                      <option value="Non-Billable">Non-Billable</option>
                      <option value="Buffer">Buffer</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Curreny(SGD/INR): </label>
                    <input
                      type="text"
                      name="currency"
                      className="form-control"
                      value={this.state.currency}
                      onChange={this.changeCurrencyHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Lwd Account/CG: </label>
                    <input
                      type="date"
                      name="lwdAccount"
                      className="form-control"
                      value={this.state.lwdAccount}
                      onChange={this.changeLwdAccountHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="lwdReason">LWD reason-Justification</label>
                    <input
                      type="text"
                      name="lwdReason"
                      className="form-control"
                      value={this.state.lwdReason}
                      onChange={this.changeLwdReasonHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>PES status: </label>
                    <input
                      type="text"
                      name="pesStatus"
                      className="form-control"
                      value={this.state.pesStatus}
                      onChange={this.changePesStatusHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Bill Rate: </label>
                    <input
                      type="number"
                      name="billRate"
                      className="form-control"
                      value={this.state.billRate}
                      onChange={this.changeBillRateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>SOW Start: </label>
                    <input
                      type="date"
                      name="sowStart"
                      className="form-control"
                      value={this.state.sowStart}
                      onChange={this.changeSowStartHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>SOW End: </label>
                    <input
                      type="date"
                      name="sowEnd"
                      className="form-control"
                      value={this.state.sowEnd}
                      onChange={this.changeSowEndHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>PO Numbers: </label>
                    <input
                      type="text"
                      name="poNumbers"
                      className="form-control"
                      value={this.state.poNumbers}
                      onChange={this.changePoNumbersHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Comments- For PMO team: </label>
                    <input
                      type="text"
                      name="comments"
                      className="form-control"
                      value={this.state.comments}
                      onChange={this.changeCommentsHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>CG Group ID: </label>
                    <input
                      type="number"
                      placeholder="enter your cg groupId"
                      name="cgGroupId"
                      className="form-control"
                      value={this.state.cgGroupId}
                      onChange={this.changeCgGroupIdHandler}
                      onBlur={this.changeCgGroupIdHandler}
                    />
                    {errors.cgGroupId.length > 0 && (
                      <span className="error">{errors.cgGroupId}</span>
                    )}
                  </div>

                  <button className="btn btn-info formbtn">Save</button>
                  <button
                    className="btn btn-danger formbtn"
                    onClick={this.cancel.bind(this)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmploee;
