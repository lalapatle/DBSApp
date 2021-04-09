import React, { Component } from 'react';
import PersonalService from '../Services/PersonalService'
class ViewPersonal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cgGroupId: this.props.match.params.cgGroupId,
            employe: {}
        }
    }
       
    componentDidMount(){
        PersonalService.getById(this.state.cgGroupId).then( res => {
            this.setState({employe: res.data});
        })
    }


    cancel()
    {
        this.props.history.push('/Personalinfo');
    }
    render() {
        return (
            <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Employee Details</h3>
                <div className = "card-body">
                    <div className = "row">
                    <label>Associate Full Name:</label>
                        <div> { this.state.employe.associateFullName}</div>
                    </div>
                    <div className = "row">
                    <label>Gender:</label>
                        <div> { this.state.employe.gender}</div>
                    </div>
                    <div className = "row">
                    <label>CG User Name:</label>
                        <div> { this.state.employe.cgUserName}</div>
                    </div>
                    <div className = "row">
                    <label>CG Mail Id:</label>
                        <div> { this.state.employe.cgMailId}</div>
                    </div>
                    <div className = "row">
                    <label> Region :</label>
                        <div> { this.state.employe.region }</div>
                    </div>
                    <div className = "row">
                    <label> Entity/Practise: </label>
                        <div> { this.state.employe.practice }</div>
                    </div>
                    <div className = "row">
                    <label> Desgnation :</label>
                        <div> { this.state.employe.designation }</div>
                    </div>
                    <div className = "row">
                    <label> CG Supervisor: </label>
                        <div> { this.state.employe.cgSupervisor }</div>
                    </div>
                    
                    <div className = "row">
                    <label> CG-DBS Account Supervisor :</label>
                        <div> { this.state.employe.cgDBSAccountSupervisor }</div>
                    </div>
                    <div className = "row">
                    <label> DBS Client Lead :</label>
                        <div> { this.state.employe.dbsClientLead }</div>
                    </div>

                    <div className = "row">
                    <label> Tower :</label>
                        <div> { this.state.employe.tower }</div>
                    </div>
                    
                    <div className = "row">
                    <label> shortTower: </label>
                        <div> { this.state.employe.shortTower }</div>
                    </div>
                    
                    <div className = "row">
                    <label> Reason-(Roll-off/Resignation): </label>
                        <div> { this.state.employe.reasonResignation}</div>
                    </div>

                    <div className = "row">
                    <label>Location:</label>
                        <div> { this.state.employe.associateLocation}</div>
                    </div>
                    <div className = "row">
                    <label>Date of DBS Account Joining :</label>
                        <div> { this.state.employe.dateOfJoiningDBSAccount}</div>
                    </div>
                    <div className = "row">
                    <label>DBS Billable strat date:</label>
                        <div> { this.state.employe.dbsBillableStartDate}</div>
                    </div>

                    <div className = "row">
                    <label>Bank id:</label>
                        <div> { this.state.employe.bankId}</div>
                    </div>
                    <div className = "row">
                    <label>DBS MailId:</label>
                        <div> { this.state.employe.dbsMailId}</div>
                    </div>

                    <div className = "row">
                    <label>Primary skill:</label>
                        <div> { this.state.employe.primarySkill}</div>
                    </div>

                    <div className = "row">
                    <label>Overall Experience before joining cg in months:</label>
                        <div> { this.state.employe.overallExperienceBeforeJoiningCg}</div>
                    </div>

                   
                    <div className = "row">
                    <label>Sow Number:</label>
                        <div> { this.state.employe.sowNumber}</div>
                    </div>

                    <div className = "row">
                    <label>Mandatory Training:</label>
                        <div> { this.state.employe.mandotoryTraining}</div>
                    </div>
                        
                     
                    <div className = "row">
                    <label>onbording docs:</label>
                        <div> { this.state.employe.onboardingDocs}</div>
                    </div>

                    <div className = "row">
                    <label>Pancard:</label>
                        <div> { this.state.employe.panCard}</div>
                    </div>

                    
                    <div className = "row">
                    <label>Passport:</label>
                        <div> { this.state.employe.passport}</div>
                    </div>
                    
                    
                    <div className = "row">
                    <label>Passport Expiry Date:</label>
                        <div> { this.state.employe.passportExpiryDate}</div>
                    </div>

                    <div className = "row">
                    <label>DOB:</label>
                        <div> { this.state.employe.dateOfBirth}</div>
                    </div>
                      
                    <div className = "row">
                    <label>Foreign Employment Experience:</label>
                        <div> { this.state.employe.foreignEmploymentExperience}</div>
                    </div>
                      
                    <div className = "row">
                    <label>Contact:</label>
                        <div> { this.state.employe.contact}</div>
                    </div>
                     <div className = "row">
                    <label>Emergency Contact:</label>
                        <div> { this.state.employe.emergencyContact}</div>
                    </div>
                    
                    <div className = "row">
                    <label>Temporary Address:</label>
                        <div> { this.state.employe.temporaryAddress}</div>
                    </div>
                    
                    <div className = "row">
                    <label>Permanant Address:</label>
                        <div> { this.state.employe.permanentAddress}</div>
                    </div>
                    
                    <div className = "row">
                    <label>CSB Form:</label>
                        <div> { this.state.employe.csbForm}</div>
                    </div>
                    
                    <div className = "row">
                    <label>CG laptop slNo:</label>
                        <div> { this.state.employe.cgLaptopSlno}</div>
                    </div>
                       
                    <div className = "row">
                    <label>DBS Laptop slno:</label>
                        <div> { this.state.employe.dbsLaptopSlno}</div>
                    </div>

                    <div className = "row">
                    <label>Date of laptop Taken:</label>
                        <div> { this.state.employe.dateOfLaptopTaken}</div>
                    </div>

                    <div className = "row">
                    <label>Date of laptop Return:</label>
                        <div> { this.state.employe.dateOfLaptopReturn}</div>
                    </div>
                        
                    <div className = "row">
                    <label>Spoc to whom laptop wasReturned:</label>
                        <div> { this.state.employe.spoc}</div>
                    </div>



                    
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                </div>

            </div>
        </div>
    )
}
}

export default ViewPersonal