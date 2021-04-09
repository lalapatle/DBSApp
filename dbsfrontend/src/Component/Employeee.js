import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";

class Employeee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      cgGroupId: " ",
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.changeback = this.changeback.bind(this);
  }
  componentDidMount() {
    EmployeeService.getAll().then((response) => {
      this.setState({ employees: response.data });
      console.log(this.state.employees);
    });
  }
  addEmployee() {
    // this.setState({ cgGroupId: this.state.cgGroupId });
    this.props.history.push(`/add-emp/${this.state.cgGroupId}`);
  }
  editEmployee(sno) {
    this.props.history.push(`/update-emp/${sno}`);
  }
  viewEmployee(sno) {
    this.props.history.push(`/view-emp/${sno}`);
  }
  changeback() {
    this.props.history.push(`/`);
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Operation Team</h2>
        <div className="row">
          <button id="margin" onClick={this.addEmployee} class="button">
            Add
          </button>
          <button id="margin" onClick={() => this.changeback()} class="button">
            Back
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr class="table-primary">
                <th>Sr No</th>
                <th>Resources status</th>
                <th>Bilability</th>
                <th>Currency(SGD/INR)</th>
                <th>LWD-Account/CG</th>
                <th>LWD reason-Justification</th>
                <th>PES status</th>
                <th>Bill rate</th>
                <th>Sow strat</th>
                <th>Sow End</th>
                <th>PO Numbers</th>
                <th>Comments</th>
                <th>CG Group Id</th>
                <th colSpan="2" style={{ textAlign: "center" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((emp) => (
                <tr key={emp.sno}>
                  <td>{emp.sno}</td>
                  <td>{emp.resourceStatus}</td>
                  <td>{emp.billability}</td>
                  <td>{emp.currency}</td>
                  <td>{emp.lwdAccount}</td>
                  <td>{emp.lwdReason}</td>
                  <td>{emp.pesStatus}</td>
                  <td>{emp.billRate}</td>
                  <td>{emp.sowStart}</td>
                  <td>{emp.sowEnd}</td>
                  <td>{emp.poNumbers}</td>
                  <td>{emp.comments}</td>
                  <td>{emp.associatePersonal.cgGroupId}</td>
                  <td>
                    <div className="actions">
                      <button
                        id="margin"
                        onClick={() => this.editEmployee(emp.sno)}
                        class="button"
                      >
                        Update
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="actions">
                      <button
                        id="margin"
                        onClick={() => this.viewEmployee(emp.sno)}
                        class="button"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Employeee;
