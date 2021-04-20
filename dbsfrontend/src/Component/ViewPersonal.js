import React, { Component } from "react";
import PersonalService from "../Services/PersonalService";
import Footer from "./Footer";
class ViewPersonal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cgGroupId: this.props.match.params.cgGroupId,
      employe: {},
    };
  }

  componentDidMount() {
    PersonalService.getById(this.state.cgGroupId).then((res) => {
      this.setState({ employe: res.data });
    });
  }

  cancel() {
    this.props.history.push(`/associatePortal/${this.state.cgGroupId}`);
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3 card">
          <h3 className="text-center headingtitle"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label>Associate Full Name:</label>&nbsp;&nbsp;
              <div> {this.state.employe.associateFullName}</div>
            </div>
            <div className="row">
              <label>Gender:</label>&nbsp;&nbsp;&nbsp;
              <div> {this.state.employe.gender}</div>
            </div>
            <div className="row">
              <label>CG User Name:</label>&nbsp;&nbsp;
              <div> {this.state.employe.cgUserName}</div>
            </div>
            <div className="row">
              <label>CG Mail Id:</label>&nbsp;&nbsp;
              <div> {this.state.employe.cgMailId}</div>
            </div>
            <div className="row">
              <label> Region :</label>&nbsp;&nbsp;
              <div> {this.state.employe.region}</div>
            </div>
            <div className="row">
              <label> Entity/Practise: </label>&nbsp;&nbsp;
              <div> {this.state.employe.practice}</div>
            </div>
            <div className="row">
              <label> Desgnation :</label>&nbsp;&nbsp;
              <div> {this.state.employe.designation}</div>
            </div>
            <div className="row">
              <label> CG Supervisor: </label>&nbsp;&nbsp;
              <div> {this.state.employe.cgSupervisor}</div>
            </div>

            <div className="row">
              <label> CG-DBS Account Supervisor :</label>&nbsp;&nbsp;
              <div> {this.state.employe.cgDBSAccountSupervisor}</div>
            </div>
            <div className="row">
              <label> DBS Client Lead :</label>&nbsp;&nbsp;
              <div> {this.state.employe.dbsClientLead}</div>
            </div>

            <div className="row">
              <label> Tower :</label>&nbsp;&nbsp;
              <div> {this.state.employe.tower}</div>
            </div>

            <div className="row">
              <label> shortTower: </label>&nbsp;&nbsp;
              <div> {this.state.employe.shortTower}</div>
            </div>

            <div className="row">
              <label> Reason-(Roll-off/Resignation): </label>&nbsp;&nbsp;
              <div> {this.state.employe.reasonResignation}</div>
            </div>

            <div className="row">
              <label>Location:</label>&nbsp;&nbsp;
              <div> {this.state.employe.associateLocation}</div>
            </div>
            <div className="row">
              <label>Date of DBS Account Joining :</label>&nbsp;&nbsp;
              <div> {this.state.employe.dateOfJoiningDBSAccount}</div>
            </div>

            <div className="row">
              <label>Date of Joining Capgemini Company :</label>&nbsp;&nbsp;
              <div> {this.state.employe.dateOfJoiningCGCompany}</div>
            </div>

            <div className="row">
              <label>DBS Billable strat date:</label>&nbsp;&nbsp;
              <div> {this.state.employe.dbsBillableStartDate}</div>
            </div>

            <div className="row">
              <label>Bank id:</label>&nbsp;&nbsp;
              <div> {this.state.employe.bankId}</div>
            </div>
            <div className="row">
              <label>DBS MailId:</label>&nbsp;&nbsp;
              <div> {this.state.employe.dbsMailId}</div>
            </div>

            <div className="row">
              <label>Primary skill:</label>&nbsp;&nbsp;
              <div> {this.state.employe.primarySkill}</div>
            </div>

            <div className="row">
              <label>Overall Experience before joining cg in months:</label>
              &nbsp;&nbsp;
              <div> {this.state.employe.overallExperienceBeforeJoiningCg}</div>
            </div>

            <div className="row">
              <label>Total Experience in months:</label>
              &nbsp;&nbsp;
              <div> {this.state.employe.totalExperience}</div>
            </div>

            <div className="row">
              <label>Sow Number:</label>&nbsp;&nbsp;
              <div> {this.state.employe.sowNumber}</div>
            </div>

            <div className="row">
              <label>Mandatory Training:</label>&nbsp;&nbsp;
              <div> {this.state.employe.mandatoryTraining}</div>
            </div>

            <div className="row">
              <label>onbording docs:</label>&nbsp;&nbsp;
              <div> {this.state.employe.onboardingDocs}</div>
            </div>

            <div className="row">
              <label>Pancard:</label>&nbsp;&nbsp;
              <div> {this.state.employe.panCard}</div>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href={`http://localhost:8080/dbsoApp/file/download-pancard/${this.state.employe.cgGroupId}`}
              >
                {this.state.employe.fileName}
              </a>
            </div>

            <div className="row">
              <label>Passport:</label>&nbsp;&nbsp;
              <div> {this.state.employe.passport}</div>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href={`http://localhost:8080/dbsoApp/file1/download1/${this.state.employe.cgGroupId}`}
              >
                {this.state.employe.fileName1}
              </a>
            </div>

            <div className="row">
              <label>Passport Expiry Date:</label>&nbsp;&nbsp;
              <div> {this.state.employe.passportExpiryDate}</div>
            </div>

            <div className="row">
              <label>DOB:</label>&nbsp;&nbsp;
              <div> {this.state.employe.dateOfBirth}</div>
            </div>

            <div className="row">
              <label>Foreign Employment Experience:</label>&nbsp;&nbsp;
              <div> {this.state.employe.foreignEmploymentExperience}</div>
            </div>

            <div className="row">
              <label>Contact:</label>&nbsp;&nbsp;
              <div> {this.state.employe.contact}</div>
            </div>
            <div className="row">
              <label>Emergency Contact:</label>&nbsp;&nbsp;
              <div> {this.state.employe.emergencyContact}</div>
            </div>

            <div className="row">
              <label>Temporary Address:</label>&nbsp;&nbsp;
              <div> {this.state.employe.temporaryAddress}</div>
            </div>

            <div className="row">
              <label>Permanant Address:</label>&nbsp;&nbsp;
              <div> {this.state.employe.permanentAddress}</div>
            </div>

            <div className="row">
              <label>CSB Form:</label>&nbsp;&nbsp;
              <div> {this.state.employe.csbForm}</div>
            </div>

            <div className="row">
              <label>CG laptop slNo:</label>&nbsp;&nbsp;
              <div> {this.state.employe.cgLaptopSlno}</div>
            </div>

            <div className="row">
              <label>DBS Laptop slno:</label>&nbsp;&nbsp;
              <div> {this.state.employe.dbsLaptopSlno}</div>
            </div>

            <div className="row">
              <label>Date of laptop Taken:</label>&nbsp;&nbsp;
              <div> {this.state.employe.dateOfLaptopTaken}</div>
            </div>

            <div className="row">
              <label>Date of laptop Return:</label>&nbsp;&nbsp;
              <div> {this.state.employe.dateOfLaptopReturn}</div>
            </div>

            <div className="row">
              <label>Spoc to whom laptop wasReturned:</label>&nbsp;&nbsp;
              <div> {this.state.employe.spoc}</div>
            </div>
            <div className="row">
              <label>Cv Resume :</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href={`http://localhost:8080/dbsoApp/cvr/downloadCv/${this.state.employe.cgGroupId}`}
              >
                {this.state.employe.cvresume}
              </a>
            </div>

            <button className="button cancel" onClick={this.cancel.bind(this)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPersonal;
