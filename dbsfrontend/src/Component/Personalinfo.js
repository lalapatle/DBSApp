import React, { Component } from "react";
import PersonalService from "../Services/PersonalService";
class Personalinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: [],
    };
    this.editPersonal = this.editPersonal.bind(this);
    this.addPersonal = this.addPersonal.bind(this);
    this.changeback = this.changeback.bind(this);
  }
  componentDidMount() {
    PersonalService.getAllAssociates().then((response) => {
      this.setState({ employee: response.data });
    });
  }
  addPersonal() {
    this.props.history.push("/add-employee");
  }
  editPersonal(cgGroupId) {
    this.props.history.push(`/update/${cgGroupId}`);
  }
  viewemployee(cgGroupId) {
    this.props.history.push(`/view/${cgGroupId}`);
  }
  changeback() {
    this.props.history.push(`/`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">AssociateDetails</h2>
        <div className="row">
          <button id="margin" onClick={this.addPersonal} class="button">
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
              <tr class="table-success">
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
                <th>Dbs Billable start DateOfBirth</th>
                <th>Bank Id</th>
                <th>Dbs MAil Id </th>
                <th>Primary Skill</th>
                <th>Overall Experience before joining cg</th>
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
            <tbody>
              {this.state.employee.map((employe) => (
                <tr key={employe.cgGroupId}>
                  <td>{employe.cgGroupId}</td>
                  <td>{employe.associateFullName}</td>
                  <td>{employe.gender}</td>
                  <td>{employe.cgUserName}</td>
                  <td>{employe.cgMailId}</td>
                  <td>{employe.region}</td>
                  <td>{employe.practice}</td>
                  <td>{employe.designation}</td>
                  <td>{employe.cgSupervisor}</td>
                  <td>{employe.cgDBSAccountSupervisor}</td>
                  <td>{employe.dbsClientLead}</td>
                  <td>{employe.tower}</td>
                  <td>{employe.shortTower}</td>
                  <td>{employe.reasonResignation}</td>
                  <td>{employe.associateLocation}</td>
                  <td>{employe.dateOfJoiningDBSAccount}</td>
                  <td>{employe.dbsBillableStartDate}</td>
                  <td>{employe.bankId}</td>
                  <td>{employe.dbsMailId}</td>
                  <td>{employe.primarySkill}</td>
                  <td>{employe.overallExperienceBeforeJoiningCg}</td>
                  <td>{employe.sowNumber}</td>
                  <td>{employe.mandatoryTraining}</td>
                  <td>{employe.onboardingDocs}</td>
                  <td>{employe.panCard}</td>
                  <td>{employe.passport}</td>
                  <td>{employe.passportExpiryDate}</td>
                  <td>{employe.dateOfBirth}</td>
                  <td>{employe.foreignEmploymentExperience}</td>
                  <td>{employe.contact}</td>
                  <td>{employe.emergencyContact}</td>
                  <td>{employe.temporaryAddress}</td>
                  <td>{employe.permanentAddress}</td>
                  <td>{employe.csbForm}</td>
                  <td>{employe.cgLaptopSlno}</td>
                  <td>{employe.dbsLaptopSlno}</td>
                  <td>{employe.dateOfLaptopTaken}</td>
                  <td>{employe.dateOfLaptopReturn}</td>
                  <td>{employe.spoc}</td>
                  <td>
                    <div className="actions">
                      <button
                        id="margin"
                        onClick={() => this.editPersonal(employe.cgGroupId)}
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
                        onClick={() => this.viewemployee(employe.cgGroupId)}
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

export default Personalinfo;
