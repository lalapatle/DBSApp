import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";
import "../App.css";
class SuperAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      cgGroupId: " ",
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.changeback = this.changeback.bind(this);
    this.generateReport = this.generateReport.bind(this);
  }
  generateReport() {
    EmployeeService.getReport().then((res) => {
      alert("Report Genrate");
    });
  }
  componentDidMount() {
    EmployeeService.getAll().then((response) => {
      this.setState({ employees: response.data });
      console.log(this.state.employees);
    });
  }
  addEmployee() {
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

  deleteEmployee(sno){
      EmployeeService.deleteAssociate(sno).then((res)=>{
        this.setState({
          employees: this.state.employees.filter(
            (employee)=> employee.sno !== sno
          ),
        });
      });
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center headingtitle">Operation Team</h2>
        <div className="row">
          <button id="margin" onClick={this.addEmployee} class="button">
            Add
          </button>
          <button
            id="margin"
            style={{ marginLeft: "20px" }}
            onClick={() => this.changeback()}
            class="button"
          >
            Back
          </button>
        </div>
        <br></br>
        <div className="row">
          <table class="table table-striped table-bordered table-hover table-md table-responsive">
            <thead className="thead-dark" style={{ whiteSpace: "nowrap" }}>
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
                <th colSpan="3" style={{ textAlign: "center" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="table-info text-center">
              {this.state.employees.map((emp) => (
                <tr key={emp.sno}>
                  <th scope="row">{emp.sno}</th>
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
                  <td>
                    <div className="actions">
                      <button
                        id="margin"
                        onClick={() => this.deleteEmployee(emp.sno)}
                        class="button"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button class="button report">
          <a href="http://localhost:8080/dbsoApp/generateReport">
            Generate Report
          </a>
        </button>
      </div>
    );
  }
}

export default SuperAdmin;
