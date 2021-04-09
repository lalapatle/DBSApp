import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";
import "../App.css";
class ViewEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sno: this.props.match.params.sNo,
      emp: {},
      isLoaded: false,
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
        <div className="card col-md-6 offset-md-3 card">
          <h3 className="text-center headingtitle"> View Details:</h3>
          {this.state.isLoaded ? (
            <div className="card-body">
              <div className="row">
                <label> Resources status-Onboraded/In progress: </label>
                &nbsp;&nbsp;
                <div> {this.state.emp.resourceStatus}</div>
              </div>
              <div className="row">
                <label> Bilability(Billable/buffer): </label>&nbsp;&nbsp;
                <div> {this.state.emp.billability}</div>
              </div>

              <div className="row">
                <label> Currency(SGD/INR): </label>&nbsp;&nbsp;
                <div> {this.state.emp.currency}</div>
              </div>

              <div className="row">
                <label> LWD-Account/CG:</label>&nbsp;&nbsp;
                <div> {this.state.emp.lwdAccount}</div>
              </div>
              <div className="row">
                <label>LWD reason-Justification :</label>&nbsp;&nbsp;
                <div> {this.state.emp.lwdReason}</div>
              </div>

              <div className="row">
                <label>PES Status:</label>&nbsp;&nbsp;
                <div> {this.state.emp.pesStatus}</div>
              </div>

              <div className="row">
                <label>Bill rate:</label>&nbsp;&nbsp;
                <div> {this.state.emp.billRate}</div>
              </div>

              <div className="row">
                <label>Sow strat:</label>&nbsp;&nbsp;
                <div> {this.state.emp.sowStart}</div>
              </div>
              <div className="row">
                <label>Sow End:</label>&nbsp;&nbsp;
                <div> {this.state.emp.sowEnd}</div>
              </div>

              <div className="row">
                <label>PO Numbers:</label>&nbsp;&nbsp;
                <div> {this.state.emp.poNumbers}</div>
              </div>

              <div className="row">
                <label>Comments:</label>&nbsp;&nbsp;
                <div> {this.state.emp.comments}</div>
              </div>

              <div className="row">
                <label>CG group Id:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.cgGroupId}</div>
              </div>

              <div className="row">
                <label>Associate Full Name:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.associateFullName}</div>
              </div>
              <div className="row">
                <label>Gender:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.gender}</div>
              </div>
              <div className="row">
                <label>CG User Name:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.cgUserName}</div>
              </div>
              <div className="row">
                <label>CG Mail Id:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.cgMailId}</div>
              </div>
              <div className="row">
                <label> Region :</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.region}</div>
              </div>
              <div className="row">
                <label> Entity/Practise: </label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.practice}</div>
              </div>
              <div className="row">
                <label> Desgnation :</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.designation}</div>
              </div>
              <div className="row">
                <label> CG Supervisor: </label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.cgSupervisor}</div>
              </div>

              <div className="row">
                <label> CG-DBS Account Supervisor :</label>&nbsp;&nbsp;
                <div>
                  {this.state.emp.associatePersonal.cgDBSAccountSupervisor}
                </div>
              </div>
              <div className="row">
                <label> DBS Client Lead :</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.dbsClientLead}</div>
              </div>

              <div className="row">
                <label> Tower :</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.tower}</div>
              </div>

              <div className="row">
                <label> shortTower: </label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.shortTower}</div>
              </div>

              <div className="row">
                <label> Reason-(Roll-off/Resignation): </label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.reasonResignation}</div>
              </div>

              <div className="row">
                <label>Location:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.associateLocation}</div>
              </div>
              <div className="row">
                <label>Date of DBS Account Joining :</label>&nbsp;&nbsp;
                <div>
                  {this.state.emp.associatePersonal.dateOfJoiningDBSAccount}
                </div>
              </div>
              <div className="row">
                <label>DBS Billable strat date:</label>&nbsp;&nbsp;
                <div>
                  {this.state.emp.associatePersonal.dbsBillableStartDate}
                </div>
              </div>

              <div className="row">
                <label>Bank id:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.bankId}</div>
              </div>
              <div className="row">
                <label>DBS MailId:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.dbsMailId}</div>
              </div>

              <div className="row">
                <label>Primary skill:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.primarySkill}</div>
              </div>

              <div className="row">
                <label>Overall Experience before joining cg in months:</label>
                &nbsp;&nbsp;
                <div>
                  {
                    this.state.emp.associatePersonal
                      .overallExperienceBeforeJoiningCg
                  }
                </div>
              </div>

              <div className="row">
                <label>Sow Number:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.sowNumber}</div>
              </div>

              <div className="row">
                <label>Mandatory Training:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.mandotoryTraining}</div>
              </div>

              <div className="row">
                <label>onbording docs:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.onboardingDocs}</div>
              </div>

              <div className="row">
                <label>Pancard:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.panCard}</div>
              </div>

              <div className="row">
                <label>Passport:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.passport}</div>
              </div>

              <div className="row">
                <label>Passport Expiry Date:</label>&nbsp;&nbsp;
                <div>
                  {" "}
                  {this.state.emp.associatePersonal.passportExpiryDate}
                </div>
              </div>

              <div className="row">
                <label>DOB:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.dateOfBirth}</div>
              </div>

              <div className="row">
                <label>Foreign Employment Experience:</label>&nbsp;&nbsp;
                <div>
                  {this.state.emp.associatePersonal.foreignEmploymentExperience}
                </div>
              </div>

              <div className="row">
                <label>Contact:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.contact}</div>
              </div>
              <div className="row">
                <label>Emergency Contact:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.emergencyContact}</div>
              </div>

              <div className="row">
                <label>Temporary Address:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.temporaryAddress}</div>
              </div>

              <div className="row">
                <label>Permanant Address:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.permanentAddress}</div>
              </div>

              <div className="row">
                <label>CSB Form:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.csbForm}</div>
              </div>

              <div className="row">
                <label>CG laptop slNo:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.cgLaptopSlno}</div>
              </div>

              <div className="row">
                <label>DBS Laptop slno:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.dbsLaptopSlno}</div>
              </div>

              <div className="row">
                <label>Date of laptop Taken:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.dateOfLaptopTaken}</div>
              </div>

              <div className="row">
                <label>Date of laptop Return:</label>&nbsp;&nbsp;
                <div>
                  {" "}
                  {this.state.emp.associatePersonal.dateOfLaptopReturn}
                </div>
              </div>

              <div className="row">
                <label>Spoc to whom laptop wasReturned:</label>&nbsp;&nbsp;
                <div> {this.state.emp.associatePersonal.spoc}</div>
              </div>

              <button
                className="button cancel"
                onClick={this.cancel.bind(this)}
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
