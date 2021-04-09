import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";
class UpdateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sno: this.props.match.params.sNo,
      resourceStatus: "",
      billability: "",
      lwdAccount: "",
      lwdReason: "",
      pesStatus: "",
      billRate: "",
      sowStrart: "",
      sowEnd: "",
      poNumbers: "",
      comments: "",
      cgGroupId: "",
    };
    // this.changeSNoHandler=this.changeSNoHandler.bind(this);
    this.changeResourceStatusHandler = this.changeResourceStatusHandler.bind(
      this
    );
    this.changeBillabilityHandler = this.changeBillabilityHandler.bind(this);
    this.changeCurrencyHandler = this.changeCurrencyHandler.bind(this);
    this.changeLwdAccountHandler = this.changeLwdAccountHandler.bind(this);
    this.changeLwdReasonHandler = this.changeLwdReasonHandler.bind(this);
    this.changePesStatusHandler = this.changePesStatusHandler.bind(this);
    this.changeBillRateHandler = this.changeBillRateHandler.bind(this);
    this.changeSowStartHandler = this.changeSowStartHandler.bind(this);
    this.changeSowEndHandler = this.changeSowEndHandler.bind(this);
    this.changepoNumbersHandler = this.changepoNumbersHandler.bind(this);
    this.changeCommentsHandler = this.changeCommentsHandler.bind(this);
    this.changeCgGroupIdHandler = this.changeCgGroupIdHandler.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    EmployeeService.getById(this.state.sno).then((res) => {
      let emp = res.data;
      this.setState({
        //sNo:emp.sNo,
        resourceStatus: emp.resourceStatus,
        billability: emp.billability,
        currency: emp.currency,
        lwdAccount: emp.lwdAccount,
        lwdReason: emp.lwdReason,
        pesStatus: emp.pesStatus,
        billRate: emp.billRate,
        sowStart: emp.sowStart,
        sowEnd: emp.sowEnd,
        poNumbers: emp.poNumbers,
        comments: emp.comments,
        cgGroupId: emp.cgGroupId,
      });
    });
  }

  update = (e) => {
    e.preventDefault();

    let emp = {
      //sNo:this.state.sNo,
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
    console.log("emp => " + JSON.stringify(emp));
    console.log("sNo => " + JSON.stringify(this.state.sno));
    EmployeeService.updateEmployee(this.state.sno, emp).then((response) => {
      this.props.history.push("/employee");
    });
    alert("changed successfully");
  };

  /* changeSNoHandler= (event) =>{
        this.setState({sNo: event.target.value});
    }
*/
  changeResourceStatusHandler = (event) => {
    this.setState({ resourceStatus: event.target.value });
  };

  changeBillabilityHandler = (event) => {
    this.setState({ billability: event.target.value });
  };
  changeCurrencyHandler = (event) => {
    this.setState({ currency: event.target.value });
  };
  changeLwdAccountHandler = (event) => {
    this.setState({ lwdAccount: event.target.value });
  };
  changeLwdReasonHandler = (event) => {
    this.setState({ lwdReason: event.target.value });
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
  changepoNumbersHandler = (event) => {
    this.setState({ poNumbers: event.target.value });
  };
  changeCommentsHandler = (event) => {
    this.setState({ comments: event.target.value });
  };
  changeCgGroupIdHandler = (event) => {
    this.setState({ cgGroupId: event.target.value });
  };

  cancel() {
    this.props.history.push("/employee");
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-10 offset-md-2 offset-md-2">
              <h2 className="text-center">Associate Proffesional</h2>
              <div className="card-body">
                <form>
                  {/* <div className="form-group">
                                    <label>Sno: </label>
                                    <input type="number" name="sNo" className="form-control"
                                    value={this.state.sNo}></input>
                        </div>*/}
                  <div className="form-group">
                    <label for="resourceState">Resource State: </label>
                    <select
                      id="resourceState"
                      name="resourceState"
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
                    <label>LWD reason-Justification</label>
                    <input
                      type="text"
                      name="lwdReason"
                      className="form-control"
                      value={this.state.lwdReason}
                      onChange={this.changeLwdReasonHandler}
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
                    />
                  </div>
                  <div className="form-group">
                    <label>PO Numbers: </label>
                    <input
                      type="text"
                      name="poNumbers"
                      className="form-control"
                      value={this.state.poNumbers}
                      onChange={this.changepoNumbersHandler}
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
                    <label>CG Group Id: </label>
                    <input
                      type="text"
                      name="cgGroupId"
                      className="form-control"
                      value={this.state.cgGroupId}
                      onChange={this.changeCgGroupIdHandler}
                    />
                  </div>

                  <button className="btn btn-success" onClick={this.update}>
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
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
export default UpdateEmployee;
