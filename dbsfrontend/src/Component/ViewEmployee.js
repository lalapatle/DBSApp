import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";

class ViewEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sno: this.props.match.params.sNo,
      emp: {},
      isLoaded: false,
      // cgGroupId:" ",
    };
  }
  componentDidMount() {
    EmployeeService.getById(this.state.sno).then((res) => {
      this.setState({ emp: res.data, isLoaded: true });
    });
    console.log(this.state.emp);
  }

  cancel() {
    this.props.history.push("/employee");
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Details:</h3>
          {this.state.isLoaded ? (
            <div className="card-body">
              <div className="row">
                <label> Resources status-Onboraded/In progress: </label>
                <div> {this.state.emp.resourceStatus}</div>
              </div>
              <div className="row">
                <label> Bilability(Billable/buffer): </label>
                <div> {this.state.emp.billability}</div>
              </div>

              <div className="row">
                <label> Currency(SGD/INR): </label>
                <div> {this.state.emp.currency}</div>
              </div>

              <div className="row">
                <label> LWD-Account/CG:</label>
                <div> {this.state.emp.lwdAccount}</div>
              </div>
              <div className="row">
                <label>LWD reason-Justification :</label>
                <div> {this.state.emp.lwdReason}</div>
              </div>

              <div className="row">
                <label>PES Status:</label>
                <div> {this.state.emp.pesStatus}</div>
              </div>

              <div className="row">
                <label>Bill rate:</label>
                <div> {this.state.emp.billRate}</div>
              </div>

              <div className="row">
                <label>Sow strat:</label>
                <div> {this.state.emp.sowStart}</div>
              </div>
              <div className="row">
                <label>Sow End:</label>
                <div> {this.state.emp.sowEnd}</div>
              </div>

              <div className="row">
                <label>PO Numbers:</label>
                <div> {this.state.emp.poNumbers}</div>
              </div>

              <div className="row">
                <label>Comments:</label>
                <div> {this.state.emp.comments}</div>
              </div>

              <div className="row">
                <label>CG group Id:</label>
                <div> {this.state.emp.associatePersonal.cgGroupId}</div>
              </div>

              <div className="row">
                <label>Associate Full Name:</label>
                <div> {this.state.emp.associatePersonal.associateFullName}</div>
              </div>
              <div className="row">
                <label>Gender:</label>
                <div> {this.state.emp.associatePersonal.gender}</div>
              </div>
              <div className="row">
                <label>CG User Name:</label>
                <div> {this.state.emp.associatePersonal.cgUserName}</div>
              </div>
              <div className="row">
                <label>CG Mail Id:</label>
                <div> {this.state.emp.associatePersonal.cgMailId}</div>
              </div>
              <div className="row">
                <label> Region :</label>
                <div> {this.state.emp.associatePersonal.region}</div>
              </div>
              <div className="row">
                <label> Entity/Practise: </label>
                <div> {this.state.emp.associatePersonal.practice}</div>
              </div>
              <div className="row">
                <label> Desgnation :</label>
                <div> {this.state.emp.associatePersonal.designation}</div>
              </div>
              <div className="row">
                <label> CG Supervisor: </label>
                <div> {this.state.emp.associatePersonal.cgSupervisor}</div>
              </div>

              <div className="row">
                <label> CG-DBS Account Supervisor :</label>
                <div>
                  {this.state.emp.associatePersonal.cgDBSAccountSupervisor}
                </div>
              </div>
              <div className="row">
                <label> DBS Client Lead :</label>
                <div> {this.state.emp.associatePersonal.dbsClientLead}</div>
              </div>

              <div className="row">
                <label> Tower :</label>
                <div> {this.state.emp.associatePersonal.tower}</div>
              </div>

              <div className="row">
                <label> shortTower: </label>
                <div> {this.state.emp.associatePersonal.shortTower}</div>
              </div>

              <div className="row">
                <label> Reason-(Roll-off/Resignation): </label>
                <div> {this.state.emp.associatePersonal.reasonResignation}</div>
              </div>

              <div className="row">
                <label>Location:</label>
                <div> {this.state.emp.associatePersonal.associateLocation}</div>
              </div>
              <div className="row">
                <label>Date of DBS Account Joining :</label>
                <div>
                  {this.state.emp.associatePersonal.dateOfJoiningDBSAccount}
                </div>
              </div>
              <div className="row">
                <label>DBS Billable strat date:</label>
                <div>
                  {this.state.emp.associatePersonal.dbsBillableStartDate}
                </div>
              </div>

              <div className="row">
                <label>Bank id:</label>
                <div> {this.state.emp.associatePersonal.bankId}</div>
              </div>
              <div className="row">
                <label>DBS MailId:</label>
                <div> {this.state.emp.associatePersonal.dbsMailId}</div>
              </div>

              <div className="row">
                <label>Primary skill:</label>
                <div> {this.state.emp.associatePersonal.primarySkill}</div>
              </div>

              <div className="row">
                <label>Overall Experience before joining cg in months:</label>
                <div>
                  {
                    this.state.emp.associatePersonal
                      .overallExperienceBeforeJoiningCg
                  }
                </div>
              </div>

              <div className="row">
                <label>Sow Number:</label>
                <div> {this.state.emp.associatePersonal.sowNumber}</div>
              </div>

              <div className="row">
                <label>Mandatory Training:</label>
                <div> {this.state.emp.associatePersonal.mandotoryTraining}</div>
              </div>

              <div className="row">
                <label>onbording docs:</label>
                <div> {this.state.emp.associatePersonal.onboardingDocs}</div>
              </div>

              <div className="row">
                <label>Pancard:</label>
                <div> {this.state.emp.associatePersonal.panCard}</div>
              </div>

              <div className="row">
                <label>Passport:</label>
                <div> {this.state.emp.associatePersonal.passport}</div>
              </div>

              <div className="row">
                <label>Passport Expiry Date:</label>
                <div>
                  {" "}
                  {this.state.emp.associatePersonal.passportExpiryDate}
                </div>
              </div>

              <div className="row">
                <label>DOB:</label>
                <div> {this.state.emp.associatePersonal.dateOfBirth}</div>
              </div>

              <div className="row">
                <label>Foreign Employment Experience:</label>
                <div>
                  {this.state.emp.associatePersonal.foreignEmploymentExperience}
                </div>
              </div>

              <div className="row">
                <label>Contact:</label>
                <div> {this.state.emp.associatePersonal.contact}</div>
              </div>
              <div className="row">
                <label>Emergency Contact:</label>
                <div> {this.state.emp.associatePersonal.emergencyContact}</div>
              </div>

              <div className="row">
                <label>Temporary Address:</label>
                <div> {this.state.emp.associatePersonal.temporaryAddress}</div>
              </div>

              <div className="row">
                <label>Permanant Address:</label>
                <div> {this.state.emp.associatePersonal.permanentAddress}</div>
              </div>

              <div className="row">
                <label>CSB Form:</label>
                <div> {this.state.emp.associatePersonal.csbForm}</div>
              </div>

              <div className="row">
                <label>CG laptop slNo:</label>
                <div> {this.state.emp.associatePersonal.cgLaptopSlno}</div>
              </div>

              <div className="row">
                <label>DBS Laptop slno:</label>
                <div> {this.state.emp.associatePersonal.dbsLaptopSlno}</div>
              </div>

              <div className="row">
                <label>Date of laptop Taken:</label>
                <div> {this.state.emp.associatePersonal.dateOfLaptopTaken}</div>
              </div>

              <div className="row">
                <label>Date of laptop Return:</label>
                <div>
                  {" "}
                  {this.state.emp.associatePersonal.dateOfLaptopReturn}
                </div>
              </div>

              <div className="row">
                <label>Spoc to whom laptop wasReturned:</label>
                <div> {this.state.emp.associatePersonal.spoc}</div>
              </div>

              <button
                className="btn btn-danger"
                onClick={this.cancel.bind(this)}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ViewEmployee;
