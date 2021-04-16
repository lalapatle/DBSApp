import React, { Component } from "react";
import PersonalService from "../Services/PersonalService";
import "../App.css";
class AssociatePortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cgGroupId: this.props.match.params.cgGroupId,
      employee: {},
    };
    this.editPersonal = this.editPersonal.bind(this);
    this.addPersonal = this.addPersonal.bind(this);
    this.changeback = this.changeback.bind(this);
  }
  componentDidMount() {
    PersonalService.getById(this.state.cgGroupId).then((response) => {
      this.setState({ employee: response.data });
    });
  }
  addPersonal() {
    if (!this.state.employee.cgUserName) {
      this.props.history.push("/add-employee");
    } else alert("Information is Already Present");
  }
  editPersonal(cgGroupId) {
    this.props.history.push(`/update/${cgGroupId}`);
  }
  viewemployee(cgGroupId) {
    this.props.history.push(`/view/${cgGroupId}`);
  }
  gotoProfile(cgGroupId) {
    this.props.history.push(`/profile/${cgGroupId}`);
  }
  changeback() {
    this.props.history.push(`/login`);
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center headingtitle">AssociateDetails</h2>
        <div className="row">
          <button
            id="margin"
            onClick={this.addPersonal}
            class="button"
            style={{ marginLeft: "20px" }}
          >
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
          <button
            id="margin"
            style={{ marginLeft: "800px" }}
            onClick={() => this.gotoProfile(this.state.employee.cgGroupId)}
            class="button"
          >
            Profile
          </button>
        </div>
        <br></br>
        <div className="row">
          <table class="table table-striped table-bordered table-hover table-md table-responsive">
            <thead className="thead-dark" style={{ whiteSpace: "nowrap" }}>
              <tr class="table-success text-center">
                <th>CG Group ID</th>
                <th>AssociateFullName</th>
                <th>Gender</th>
                <th>CgUser Name</th>
                <th>Cg Emailid</th>
                <th>Region</th>
                <th>Practice</th>
                <th>Designation</th>
                <th>Cg Supervisor</th>
                <th>Dbs Account Supervisor</th>
                <th>Dbs Client Lead</th>
                <th>Tower</th>
                <th>ShortTower</th>
                <th>Reason Resignation</th>
                <th>Associtae Location</th>
                <th>DOj Dbs Account</th>
                <th>DOj Capgemini Company</th>
                <th>Dbs Billable start DateOfBirth</th>
                <th>Bank Id</th>
                <th>Dbs MAil Id </th>
                <th>Primary Skill</th>
                <th>Overall Experience before joining cg</th>
                <th>Total Experience</th>
                <th>sowNumber</th>
                <th>mandatory Training</th>
                <th>Onboarding Docs</th>
                <th>pancard</th>
                <th>passport</th>
                <th>passport Expiry date</th>
                <th>DOB</th>
                <th>Foreign Employement Experience</th>
                <th>Contact</th>
                <th>Emergency Contact</th>
                <th>Temporary Addresss</th>
                <th>Permanant Addresss</th>
                <th>CSB Form</th>
                <th>Cg laptop slno</th>
                <th>dbs Laptop slno</th>
                <th>date of laptop taken</th>
                <th>date of laptop return</th>
                <th>Spoc</th>
                <th colSpan="2" style={{ textAlign: "center" }}>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="table-info text-center">
              <th scope="row">{this.state.employee.cgGroupId}</th>
              <td>{this.state.employee.associateFullName}</td>
              <td>{this.state.employee.gender}</td>
              <td>{this.state.employee.cgUserName}</td>
              <td>{this.state.employee.cgMailId}</td>
              <td>{this.state.employee.region}</td>
              <td>{this.state.employee.practice}</td>
              <td>{this.state.employee.designation}</td>
              <td>{this.state.employee.cgSupervisor}</td>
              <td>{this.state.employee.cgDBSAccountSupervisor}</td>
              <td>{this.state.employee.dbsClientLead}</td>
              <td>{this.state.employee.tower}</td>
              <td>{this.state.employee.shortTower}</td>
              <td>{this.state.employee.reasonResignation}</td>
              <td>{this.state.employee.associateLocation}</td>
              <td>{this.state.employee.dateOfJoiningDBSAccount}</td>
              <td>{this.state.employee.dateOfJoiningCGCompany}</td>
              <td>{this.state.employee.dbsBillableStartDate}</td>
              <td>{this.state.employee.bankId}</td>
              <td>{this.state.employee.dbsMailId}</td>
              <td>{this.state.employee.primarySkill}</td>
              <td>{this.state.employee.overallExperienceBeforeJoiningCg}</td>
              <td>{this.state.employee.totalExperience}</td>
              <td>{this.state.employee.sowNumber}</td>
              <td>{this.state.employee.mandatoryTraining}</td>
              <td>{this.state.employee.onboardingDocs}</td>
              <td>{this.state.employee.panCard}</td>
              <td>{this.state.employee.passport}</td>
              <td>{this.state.employee.passportExpiryDate}</td>
              <td>{this.state.employee.dateOfBirth}</td>
              <td>{this.state.employee.foreignEmploymentExperience}</td>
              <td>{this.state.employee.contact}</td>
              <td>{this.state.employee.emergencyContact}</td>
              <td>{this.state.employee.temporaryAddress}</td>
              <td>{this.state.employee.permanentAddress}</td>
              <td>{this.state.employee.csbForm}</td>
              <td>{this.state.employee.cgLaptopSlno}</td>
              <td>{this.state.employee.dbsLaptopSlno}</td>
              <td>{this.state.employee.dateOfLaptopTaken}</td>
              <td>{this.state.employee.dateOfLaptopReturn}</td>
              <td>{this.state.employee.spoc}</td>
              <td>
                <div className="actions">
                  <button
                    id="margin"
                    onClick={() =>
                      this.editPersonal(this.state.employee.cgGroupId)
                    }
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
                    onClick={() =>
                      this.viewemployee(this.state.employee.cgGroupId)
                    }
                    class="button"
                  >
                    View
                  </button>
                </div>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AssociatePortal;
