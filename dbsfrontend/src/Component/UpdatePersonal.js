import React, { Component } from "react";
import PersonalService from "../Services/PersonalService";
class UpdatePersonal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cgGroupId: this.props.match.params.cgGroupId,
      associateFullName: "",
      gender: "",
      cgUserName: "",
      cgMailId: "",
      region: "",
      practice: "",
      designation: "",
      cgSupervisor: "",
      cgDBSAccountSupervisor: "",
      dbsClientLead: "",
      tower: "",
      shortTower: "",
      reasonResignation: "",
      associateLocation: "",
      dateOfJoiningDBSAccount: "",
      dbsBillableStartDate: "",
      bankId: "",
      dbsMailId: "",
      primarySkill: "",
      overallExperienceBeforeJoiningCg: "",
      sowNumber: "",
      mandatoryTraining: "",
      onboardingDocs: "",
      panCard: "",
      passport: "",
      passportExpiryDate: "",
      dateOfBirth: "",
      contact: "",
      emergencyContact: "",
      temporaryAddress: "",
      permanentAddress: "",
      csbForm: "",
      cgLaptopSlno: "",
      dbsLaptopSlno: "",
      dateOfLaptopTaken: "",
      dateOfLaptopReturn: "",
      spoc: "",
    };
    this.changeAssociateFullNameHandler = this.changeAssociateFullNameHandler.bind(
      this
    );
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeCgUserNameHandler = this.changeCgUserNameHandler.bind(this);
    this.changeCgMailIdHandler = this.changeCgMailIdHandler.bind(this);
    this.changeRegionHandler = this.changeRegionHandler.bind(this);
    this.changePracticeHandler = this.changePracticeHandler.bind(this);
    this.changeDesignationHandler = this.changeDesignationHandler.bind(this);
    this.changeCgSupervisorHandler = this.changeCgSupervisorHandler.bind(this);
    this.changeCgDBSAccountSupervisorHandler = this.changeCgDBSAccountSupervisorHandler.bind(
      this
    );
    this.changeDbsClientLeadHandler = this.changeDbsClientLeadHandler.bind(
      this
    );
    this.changeTowerHandler = this.changeTowerHandler.bind(this);
    this.changeShortTowerHandler = this.changeShortTowerHandler.bind(this);
    this.changeReasonResignationHandler = this.changeReasonResignationHandler.bind(
      this
    );
    this.changeAssociateLocationHandler = this.changeAssociateLocationHandler.bind(
      this
    );
    this.changeDateOfJoiningDBSAccountHandler = this.changeDateOfJoiningDBSAccountHandler.bind(
      this
    );
    this.changeDbsBillableStartDateHandler = this.changeDbsBillableStartDateHandler.bind(
      this
    );
    this.changeBankIdHandler = this.changeBankIdHandler.bind(this);
    this.changeDbsMailIdHandler = this.changeDbsMailIdHandler.bind(this);
    this.changePrimarySkillHandler = this.changePrimarySkillHandler.bind(this);
    this.changeOverallExperienceBeforeJoiningCgHandler = this.changeOverallExperienceBeforeJoiningCgHandler.bind(
      this
    );
    this.changeSowNumberHandler = this.changeSowNumberHandler.bind(this);
    this.changeMandatoryTrainingHandler = this.changeMandatoryTrainingHandler.bind(
      this
    );
    this.changeOnboardingDocsHandler = this.changeOnboardingDocsHandler.bind(
      this
    );
    this.changePanCardHandler = this.changePanCardHandler.bind(this);
    this.changePassportHandler = this.changePassportHandler.bind(this);
    this.changePassportExpiryDateHandler = this.changePassportExpiryDateHandler.bind(
      this
    );
    this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
    this.changeForeignEmploymentExperienceHandler = this.changeForeignEmploymentExperienceHandler.bind(
      this
    );
    this.changeContactHandler = this.changeContactHandler.bind(this);
    this.changeEmergencyContactHandler = this.changeEmergencyContactHandler.bind(
      this
    );
    this.changeTemporaryAddressHandler = this.changeTemporaryAddressHandler.bind(
      this
    );
    this.changePermanentAddressHandler = this.changePermanentAddressHandler.bind(
      this
    );
    this.changeCbsFormHandler = this.changeCbsFormHandler.bind(this);
    this.changeCgLaptopSlnoHandler = this.changeCgLaptopSlnoHandler.bind(this);
    this.changeDbsLaptopSlnoHandler = this.changeDbsLaptopSlnoHandler.bind(
      this
    );
    this.changeDateOfLaptopTakenHandler = this.changeDateOfLaptopTakenHandler.bind(
      this
    );
    this.changeDateOfLaptopReturnHandler = this.changeDateOfLaptopReturnHandler.bind(
      this
    );
    this.changeSpocHandler = this.changeSpocHandler.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    PersonalService.getById(this.state.cgGroupId).then((res) => {
      let personal = res.data;
      this.setState({
        associateFullName: personal.associateFullName,
        gender: personal.gender,
        cgUserName: personal.cgUserName,
        cgMailId: personal.cgMailId,
        region: personal.region,
        practice: personal.practice,
        designation: personal.designation,
        cgSupervisor: personal.cgSupervisor,
        cgDBSAccountSupervisor: personal.cgDBSAccountSupervisor,
        dbsClientLead: personal.dbsClientLead,
        tower: personal.tower,
        shortTower: personal.shortTower,
        reasonResignation: personal.reasonResignation,
        associateLocation: personal.associateLocation,
        dateOfJoiningDBSAccount: personal.dateOfJoiningDBSAccount,
        dbsBillableStartDate: personal.dbsBillableStartDate,
        bankId: personal.bankId,
        dbsMailId: personal.dbsMailId,
        primarySkill: personal.primarySkill,
        overallExperienceBeforeJoiningCg:
          personal.overallExperienceBeforeJoiningCg,
        sowNumber: personal.sowNumber,
        mandatoryTraining: personal.mandatoryTraining,
        onboardingDocs: personal.onboardingDocs,
        panCard: personal.panCard,
        passport: personal.passport,
        passportExpiryDate: personal.passportExpiryDate,
        dateOfBirth: personal.dateOfBirth,
        foreignEmploymentExperience: personal.foreignEmploymentExperience,
        contact: personal.contact,
        emergencyContact: personal.emergencyContact,
        temporaryAddress: personal.temporaryAddress,
        permanentAddress: personal.permanentAddress,
        csbForm: personal.csbForm,
        cgLaptopSlno: personal.cgLaptopSlno,
        dbsLaptopSlno: personal.dbsLaptopSlno,
        dateOfLaptopTaken: personal.dateOfLaptopTaken,
        dateOfLaptopReturn: personal.dateOfLaptopReturn,
        spoc: personal.spoc,
      });
    });
  }

  update = (e) => {
    e.preventDefault();
    let personal = {
      cgGroupId: this.state.cgGroupId,
      associateFullName: this.state.associateFullName,
      gender: this.state.gender,
      cgUserName: this.state.cgUserName,
      cgMailId: this.state.cgMailId,
      region: this.state.region,
      practice: this.state.practice,
      designation: this.state.designation,
      cgSupervisor: this.state.cgSupervisor,
      cgDBSAccountSupervisor: this.state.cgDBSAccountSupervisor,
      dbsClientLead: this.state.dbsClientLead,
      tower: this.state.tower,
      shortTower: this.state.shortTower,
      reasonResignation: this.state.reasonResignation,
      associateLocation: this.state.associateLocation,
      dateOfJoiningDBSAccount: this.state.dateOfJoiningDBSAccount,
      dbsBillableStartDate: this.state.dbsBillableStartDate,
      bankId: this.state.bankId,
      dbsMailId: this.state.dbsMailId,
      primarySkill: this.state.primarySkill,
      overallExperienceBeforeJoiningCg: this.state
        .overallExperienceBeforeJoiningCg,
      sowNumber: this.state.sowNumber,
      mandatoryTraining: this.state.mandatoryTraining,
      onboardingDocs: this.state.onboardingDocs,
      panCard: this.state.panCard,
      passport: this.state.passport,
      passportExpiryDate: this.state.passportExpiryDate,
      dateOfBirth: this.state.dateOfBirth,
      foreignEmploymentExperience: this.state.foreignEmploymentExperience,
      csbForm: this.state.csbForm,
      contact: this.state.contact,
      emergencyContact: this.state.emergencyContact,
      temporaryAddress: this.state.temporaryAddress,
      permanentAddress: this.state.permanentAddress,
      cgLaptopSlno: this.state.cgLaptopSlno,
      dbsLaptopSlno: this.state.dbsLaptopSlno,
      dateOfLaptopTaken: this.state.dateOfLaptopTaken,
      dateOfLaptopReturn: this.state.dateOfLaptopReturn,
      spoc: this.state.spoc,
    };
    console.log("personal => " + JSON.stringify(personal));
    console.log("cgGroupId => " + JSON.stringify(this.state.cgGroupId));
    PersonalService.updatePersonal(personal, this.state.cgGroupId).then(
      (res) => {
        this.props.history.push("/personalinfo");
      }
    );
  };

  changeCgGroupIdHandler = (event) => {
    this.setState({ cgGroupId: event.target.value });
  };

  changeAssociateFullNameHandler = (event) => {
    this.setState({ associateFullName: event.target.value });
  };
  changeCgUserNameHandler = (event) => {
    this.setState({ cgUserName: event.target.value });
  };
  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  changeDateOfBirthHandler = (event) => {
    this.setState({ dateOfBirth: event.target.value });
  };
  changeCgMailIdHandler = (event) => {
    this.setState({ cgMailId: event.target.value });
  };
  changeRegionHandler = (event) => {
    this.setState({ region: event.target.value });
  };
  changePracticeHandler = (event) => {
    this.setState({ practice: event.target.value });
  };
  changeDesignationHandler = (event) => {
    this.setState({ designation: event.target.value });
  };
  changeCgSupervisorHandler = (event) => {
    this.setState({ cgSupervisor: event.target.value });
  };
  changeCgDBSAccountSupervisorHandler = (event) => {
    this.setState({ cgDBSAccountSupervisor: event.target.value });
  };
  changeDbsClientLeadHandler = (event) => {
    this.setState({ dbsClientLead: event.target.value });
  };
  changeTowerHandler = (event) => {
    this.setState({ tower: event.target.value });
  };
  changeShortTowerHandler = (event) => {
    this.setState({ shortTower: event.target.value });
  };
  changeReasonResignationHandler = (event) => {
    this.setState({ reasonResignation: event.target.value });
  };
  changeAssociateLocationHandler = (event) => {
    this.setState({ associateLocation: event.target.value });
  };
  changeDateOfJoiningDBSAccountHandler = (event) => {
    this.setState({ dateOfJoiningDBSAccount: event.target.value });
  };
  changeDbsBillableStartDateHandler = (event) => {
    this.setState({ dbsBillableStartDate: event.target.value });
  };
  changeBankIdHandler = (event) => {
    this.setState({ bankId: event.target.value });
  };
  changeDbsMailIdHandler = (event) => {
    this.setState({ dbsMailId: event.target.value });
  };
  changePrimarySkillHandler = (event) => {
    this.setState({ primarySkill: event.target.value });
  };
  changeOverallExperienceBeforeJoiningCgHandler = (event) => {
    this.setState({ overallExperienceBeforeJoiningCg: event.target.value });
  };
  changeSowNumberHandler = (event) => {
    this.setState({ sowNumber: event.target.value });
  };

  changeMandatoryTrainingHandler = (event) => {
    this.setState({ mandatoryTraining: event.target.value });
  };
  changePanCardHandler = (event) => {
    this.setState({ panCard: event.target.value });
  };
  changePassportHandler = (event) => {
    this.setState({ passport: event.target.value });
  };
  changePassportExpiryDateHandler = (event) => {
    this.setState({ passportExpiryDate: event.target.value });
  };

  changeForeignEmploymentExperienceHandler = (event) => {
    this.setState({ foreignEmploymentExperience: event.target.value });
  };
  changeContactHandler = (event) => {
    this.setState({ contact: event.target.value });
  };
  changeEmergencyContactHandler = (event) => {
    this.setState({ emergencyContact: event.target.value });
  };
  changeTemporaryAddressHandler = (event) => {
    this.setState({ temporaryAddress: event.target.value });
  };
  changePermanentAddressHandler = (event) => {
    this.setState({ permanentAddress: event.target.value });
  };

  changeCgLaptopSlnoHandler = (event) => {
    this.setState({ cgLaptopSlno: event.target.value });
  };
  changeDbsLaptopSlnoHandler = (event) => {
    this.setState({ dbsLaptopSlno: event.target.value });
  };
  changeDateOfLaptopTakenHandler = (event) => {
    this.setState({ dateOfLaptopTaken: event.target.value });
  };
  changeOnboardingDocsHandler = (event) => {
    this.setState({ onboardingDocs: event.target.value });
  };
  changeCbsFormHandler = (event) => {
    this.setState({ csbForm: event.target.value });
  };
  changeDateOfLaptopReturnHandler = (event) => {
    this.setState({ dateOfLaptopReturn: event.target.value });
  };
  changeSpocHandler = (event) => {
    this.setState({ spoc: event.target.value });
  };

  cancel() {
    this.props.history.push("/personalinfo");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-10 offset-md-2 offset-md-2">
              <h2 className="text-center">Update Personal Details</h2>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>CG Group ID: </label>
                    <input
                      type="number"
                      placeholder="enter your cg groupId"
                      name="cgGroupId"
                      className="form-control"
                      value={this.state.cgGroupId}
                      onChange={this.changeCgGroupIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>AssociateFullName: </label>
                    <input
                      type="text"
                      placeholder="enter your name"
                      name="associateFullName"
                      className="form-control"
                      value={this.state.associateFullName}
                      onChange={this.changeAssociateFullNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label for="gender">Gender(M/F): </label>
                    <select
                      id="gender"
                      name="gender"
                      value={this.state.gender}
                      onChange={this.changeGenderHandler}
                    >
                      <option value="">-Select Gender-</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>CG UserName: </label>
                    <input
                      type="text"
                      placeholder="enter your username"
                      name="cgUserName"
                      className="form-control"
                      value={this.state.cgUserName}
                      onChange={this.changeCgUserNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>CG MailId: </label>
                    <input
                      type="text"
                      placeholder="enter your cgMaiId"
                      name="cgMailId"
                      className="form-control"
                      value={this.state.cgMailId}
                      onChange={this.changeCgMailIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="region">Region: </label>
                    <select
                      id="region"
                      name="region"
                      value={this.state.region}
                      onChange={this.changeRegionHandler}
                    >
                      <option value="">-Select Option-</option>
                      <option value="IN">IN</option>
                      <option value="SG">SG</option>
                      <option value="HK">HK</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="practice">Entity/Practice: </label>
                    <select
                      id="practice"
                      name="practice"
                      value={this.state.practice}
                      onChange={this.changePracticeHandler}
                    >
                      <option value="">-Select Option-</option>
                      <option value="BCM-CEN">BCM-CEN</option>
                      <option value="GP-INS-GW">GP-INS-GW</option>
                      <option value="GP-DEG">GP-DEG</option>
                      <option value="GP-BIM">GP-BIM</option>
                      <option value="SF">SF</option>
                      <option value="APAC">APAC</option>
                      <option value="ADM-JAVA">ADM-JAVA</option>
                      <option value="GP-INS">GP-INS</option>
                      <option value="GP-DAG">GP-DAG</option>
                      <option value="GP-ADM">GP-ADM</option>
                      <option value="ADM-Agi&PM">ADM-Agi&PM</option>
                      <option value="GP-DGTL">GP-DGTL</option>
                      <option value="DAQE_CT">DAQE_CT</option>
                      <option value="Card-Issng">Card-Issng</option>
                      <option value="ADM-MFAS">ADM-MFAS</option>
                      <option value="ADM-CT">ADM-CT</option>
                      <option value="DAQE-AT&SD">DAQE-AT&SD</option>
                      <option value="DAQE_MANL">DAQE_MANL</option>
                      <option value="GP-Cards">GP-Cards</option>
                      <option value="BDF-CoreB">BDF-CoreB</option>
                      <option value="GP-DAQE">GP-DAQE</option>
                      <option value="INS-GBU-LS">INS-GBU-LS</option>
                      <option value="DGTL-CT">DGTL-CT</option>
                      <option value="GP-BDF">GP-BDF</option>
                      <option value="GP-INS-PM">GP-INS-PM</option>
                      <option value="DAQE-BK&IN">DAQE-BK&IN</option>
                      <option value="SW-APPS">SW-APPS</option>
                      <option value="INS-MU-3">INS-MU-3</option>
                      <option value="INS-MU-6">INS-MU-6</option>
                      <option value="CM-Other">CM-Other</option>
                      <option value="CM-T&CM">CM-T&CM</option>
                      <option value="DGTL-BPM">DGTL-BPM</option>
                      <option value="FSNB_OTH">FSNB_OTH</option>
                      <option value="GP-Paymt">GP-Paymt</option>
                      <option value="INS-MU-4">INS-MU-4</option>
                      <option value="GP-ALL">GP-ALL</option>
                      <option value="GP-M&S">GP-M&S</option>
                      <option value="GP-BDF-OG">GP-BDF-OG</option>
                      <option value="GP-GM">GP-GM</option>
                      <option value="GP-INS-BIT">GP-INS-BIT</option>
                      <option value="EUROCLEA">EUROCLEA</option>
                      <option value="GP-EM">GP-EM</option>
                      <option value="FS-OTHER">FS-OTHER</option>
                      <option value="GP-CM-WA">GP-CM-WA</option>
                      <option value="CE-MANAG">CE-MANAG</option>
                      <option value="GP-INS-DC">GP-INS-DC</option>
                      <option value="DAQE_NFT">DAQE_NFT</option>
                      <option value="NB-P-NN">NB-P-NN</option>
                      <option value="DAQE-TDEM">DAQE-TDEM</option>
                      <option value="VIDELCEN">VIDELCEN</option>
                      <option value="GP-DGL-Sls">GP-DGL-Sls</option>
                      <option value="CHDELCEN">CHDELCEN</option>
                      <option value="PHDELCEN">PHDELCEN</option>
                      <option value="DAQE-API">DAQE-API</option>
                      <option value="BU-FSJP">BU-FSJP</option>
                      <option value="FS_UAE">FS_UAE</option>
                      <option value="GP-BCM-TRNF">GP-BCM-TRNF</option>
                      <option value="INS-MU-7">INS-MU-7</option>
                      <option value="FSNB_OPS">FSNB_OPS</option>
                      <option value="MOTH-FR">MOTH-FR</option>
                      <option value="GP-NGT-CT">GP-NGT-CT</option>
                      <option value="INS-MU-1">INS-MU-1</option>
                      <option value="JP_Pract">JP_Pract</option>
                      <option value="FSJP-Ui-UX">FSJP-Ui-UX</option>
                      <option value="ANZ_Offs">ANZ_Offs</option>
                      <option value="Ins-Others">Ins-Others</option>
                      <option value="BCM">BCM</option>
                      <option value="AXA">AXA</option>
                      <option value="GP-ERP-P">GP-ERP-P</option>
                      <option value="OTH-NB">OTH-NB</option>
                      <option value="JP-MLJ">JP-MLJ</option>
                      <option value="INS-MU-2">INS-MU-2</option>
                      <option value="NB-BANK">NB-BANK</option>
                      <option value="INS-MU-5">INS-MU-5</option>
                      <option value="Card&Pay">Card&Pay</option>
                      <option value="FS-AU">FS-AU</option>
                      <option value="DGTL-Azure">DGTL-Azure</option>
                      <option value="GP-INS-GM">GP-INS-GM</option>
                      <option value="NGT-P">NGT-P</option>
                      <option value="BNPP">BNPP</option>
                      <option value="SOCGEN">SOCGEN</option>
                      <option value="GP-IDMS">GP-IDMS</option>
                      <option value="GP-ADM-LM">GP-ADM-LM</option>
                      <option value="ERP-Oracle">ERP-Oracle</option>
                      <option value="DGTL-Pega">DGTL-Pega</option>
                      <option value="GP-ERP">GP-ERP</option>
                      <option value="BCM-US">BCM-US</option>
                      <option value="BCM-HSBC">BCM-HSBC</option>
                      <option value="CTS">CTS</option>
                      <option value="DGTL-Adobe">DGTL-Adobe</option>
                      <option value="BCM-MS">BCM-MS</option>
                      <option value="NB-B-ABN">NB-B-ABN</option>
                      <option value="GP-XCORPS">GP-XCORPS</option>
                      <option value="FSNB_SLS">FSNB_SLS</option>
                      <option value="FS-SAUDI">FS-SAUDI</option>
                      <option value="GP-TEST-CI">GP-TEST-CI</option>
                      <option value="FS-CACL">FS-CACL</option>
                      <option value="BCM-CAN">BCM-CAN</option>
                      <option value="GP-DG-LH">GP-DG-LH</option>
                      <option value="GP-AUTO">GP-AUTO</option>
                      <option value="BCM-NBE_US">BCM-NBE_US</option>
                      <option value="GP-CM">GP-CM</option>
                      <option value="BCM-BAR">BCM_BAR</option>
                      <option value="DGTL-MKTG">DGTL-MKTG</option>
                      <option value="GP-YTP">GP-YTP</option>
                      <option value="BCM-NBE-UK">BCM-NBE-UK</option>
                      <opton value="FS-ADJ">FS-ADJ</opton>
                      <option value="CEN-IDC">CEN-IDC</option>
                      <option value="BIM">BIM</option>
                      <option value="DGTL-CN">DGTL-CN</option>
                      <option value="ADM-MFLS">ADM-MFLS</option>
                      <option value="DAQE_AT&SD">DAQE_AT&SD</option>
                      <option value="DAQE-NFT">DAQE-NFT</option>
                      <option value="FSNB_TECHNOLOGY_Management">
                        FSNB_TECHNOLOGY_Management
                      </option>
                      <option value="GP-BCM">GP-BCM</option>
                      <option value="FSNB_ Blue_Harvest">
                        FSNB_ Blue_Harvest
                      </option>
                      <option value="FSGE_CSD_PEO">FSGE_CSD_PEO</option>
                      <option value="CE_MANAG">CE_MANAG</option>
                      <option value="FSNB_PENSIONS">FSNB_PENSIONS</option>
                      <option value="FSNB_GTM_Management">
                        FSNB_GTM_Management
                      </option>
                      <option value="PL01F102_FS_Germany">
                        PL01F102_FS_Germany
                      </option>
                      <option value="PL01F103_FS_Services">
                        PL01F103_FS_Services
                      </option>
                      <option value="PL01F105_FS_Head">PL01F105_FS_Head</option>
                      <option value="FS_PEO">FS_PEO</option>
                      <option value="FS_PEO_Management">
                        FS_PEO_Management
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Designation: </label>
                    <input
                      type="text"
                      placeholder="enter your designation"
                      name="designation"
                      className="form-control"
                      value={this.state.designation}
                      onChange={this.changeDesignationHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>CG-Supervisor: </label>
                    <input
                      type="text"
                      placeholder="enter supervisor name"
                      name="cgSupervisor"
                      className="form-control"
                      value={this.state.cgSupervisor}
                      onChange={this.changeCgSupervisorHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>CG-DBS account-supervisor: </label>
                    <input
                      type="text"
                      placeholder="enter dbs-supervisor"
                      name="cgDBSAccountSupervisor"
                      className="form-control"
                      value={this.state.cgDBSAccountSupervisor}
                      onChange={this.changeCgDBSAccountSupervisorHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>DBS Client Lead: </label>
                    <input
                      type="text"
                      placeholder="enter dbs client"
                      name="dbsClientLead"
                      className="form-control"
                      value={this.state.dbsClientLead}
                      onChange={this.changeDbsClientLeadHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="tower">Tower: </label>
                    <select
                      id="tower"
                      name="tower"
                      value={this.state.tower}
                      onChange={this.changeTowerHandler}
                    >
                      <option value="">-Select option-</option>
                      <option value="MOT">MOT</option>
                      <option value="C2E">C2E</option>
                      <option value="ITT">ITT</option>
                      <option value="Overhead">Overhead</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="shortTower">Short Tower: </label>
                    <select
                      id="shortTower"
                      name="shortTower"
                      value={this.state.shortTower}
                      onChange={this.changeShortTowerHandler}
                    >
                      <option value="">-Select option-</option>
                      <option value="Management">Management</option>
                      <option value="C2E_UL">C2E_UL</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="I&I">I&I</option>
                      <option value="Testing">Testing</option>
                      <option value="Mainframe">Mainframe</option>
                      <option value="C2E_100x">C2E_100x</option>
                      <option value="DigiBank">DigiBank</option>
                      <option value="T&O">T&O</option>
                      <option value="CB_Ecosystems">CB_Ecosystems</option>
                      <option value="Customization">Customization</option>
                      <option value="C2E_Big Data & Analytics">
                        C2E_Big Data & Analytics
                      </option>
                      <option value="MOT">MOT</option>
                      <option value="Product support">Product Support</option>
                      <option value="IBG_Employee Services">
                        IBG_Employee Services
                      </option>
                      <option value="Infra">Infra</option>
                      <option value="C2E_BSSB">C2E_BSSB</option>
                      <option value="C2E_Ecosystems">C2E_Ecosystems</option>
                      <option value="MOT_Finanace">MOT_Finanace</option>
                      <option value="Proactive">Proactive</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Reason resignation: </label>
                    <input
                      type="text"
                      name="resonResignation"
                      className="form-control"
                      value={this.state.reasonResignation}
                      onChange={this.changeReasonResignationHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label for="associateLocation">
                      Associate Location(CAPG ODC/DAH2):{" "}
                    </label>
                    <select
                      id="associateLocation"
                      name="associateLocation"
                      value={this.state.associateLocation}
                      onChange={this.changeAssociateLocationHandler}
                    >
                      <option value="">-Select Option-</option>
                      <option value="CAPG ODC">CAPG ODC</option>
                      <option value="DAH2">DAH2</option>
                      <option value="Onsite">Onsite</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date of Joining of DBS Account: </label>
                    <input
                      type="date"
                      name="dateOfJoiningDBSAccount"
                      className="form-control"
                      value={this.state.dateOfJoiningDBSAccount}
                      onChange={this.changeDateOfJoiningDBSAccountHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Billabale start date: </label>
                    <input
                      type="date"
                      name="dbsBillableStartDate"
                      className="form-control"
                      value={this.state.dbsBillableStartDate}
                      onChange={this.changeDbsBillableStartDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Bank Id: </label>
                    <input
                      type="text"
                      name="bankId"
                      className="form-control"
                      value={this.state.bankId}
                      onChange={this.changeBankIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>DBS Mail Id: </label>
                    <input
                      type="email"
                      name="dbsMailId"
                      className="form-control"
                      value={this.state.dbsMailId}
                      onChange={this.changeDbsMailIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Primary skill: </label>
                    <input
                      type="text"
                      name="primarySkill"
                      className="form-control"
                      value={this.state.primarySkill}
                      onChange={this.changePrimarySkillHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Overall Experience before joining CG in months:{" "}
                    </label>
                    <input
                      type="number"
                      name="overallExperienceBeforeJoiningCg"
                      className="form-control"
                      value={this.state.overallExperienceBeforeJoiningCg}
                      onChange={
                        this.changeOverallExperienceBeforeJoiningCgHandler
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>SOW Number/Beeline Assignment Id: </label>
                    <input
                      type="text"
                      name="sowNumber"
                      className="form-control"
                      value={this.state.sowNumber}
                      onChange={this.changeSowNumberHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Mandatory Training: </label>
                    <input
                      type="text"
                      name="mandatoryTraining"
                      className="form-control"
                      value={this.state.mandatoryTraining}
                      onChange={this.changeMandatoryTrainingHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Onboarding Docs: </label>
                    {/* <input type="file" name="onboardingDocs" id="myFile"></input> */}
                    <input
                      type="text"
                      name="onboardingDocs"
                      className="form-control"
                      value={this.state.onboardingDocs}
                      onChange={this.changeOnboardingDocsHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Pan card: </label>
                    <input
                      type="text"
                      name="panCard"
                      className="form-control"
                      value={this.state.panCard}
                      onChange={this.changePanCardHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Passport: </label>
                    <input
                      type="text"
                      name="passport"
                      className="form-control"
                      value={this.state.passport}
                      onChange={this.changePassportHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Passport Expiry Date: </label>
                    <input
                      type="date"
                      name="passportExpiryDate"
                      className="form-control"
                      value={this.state.passportExpiryDate}
                      onChange={this.changePassportExpiryDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth: </label>
                    <input
                      type="date"
                      placeholder="enter date of birth"
                      name="dateOfBirth"
                      className="form-control"
                      value={this.state.dateOfBirth}
                      onChange={this.changeDateOfBirthHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Any foreign Employmeny in 3 years(if yes specify country
                      and duration):{" "}
                    </label>
                    <input
                      type="text"
                      name="foreignEmploymentExperience"
                      className="form-control"
                      value={this.state.foreignEmploymentExperience}
                      onChange={this.changeForeignEmploymentExperienceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact: </label>
                    <input
                      type="tel"
                      placeholder="enter mobile number"
                      name="contact"
                      className="form-control"
                      value={this.state.contact}
                      onChange={this.changeContactHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Emergency Contact: </label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      className="form-control"
                      value={this.state.emergencyContact}
                      onChange={this.changeEmergencyContactHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Temporary Address: </label>
                    <input
                      type="text"
                      placeholder="enter address"
                      name="temporaryAddress"
                      className="form-control"
                      value={this.state.temporaryAddress}
                      onChange={this.changeTemporaryAddressHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Permanent Address: </label>
                    <input
                      type="text"
                      placeholder="enter permanent address"
                      name="permanentAddress"
                      className="form-control"
                      value={this.state.permanentAddress}
                      onChange={this.changePermanentAddressHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>CBS Form(Applicable to Onsite only): </label>
                    {/* <input type="file" name="cbsForm" id="myFile"></input> */}
                    <input
                      type="text"
                      name="csbForm"
                      className="form-control"
                      value={this.state.csbForm}
                      onChange={this.changeCbsFormHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>CG Laptop SIno: </label>
                    <input
                      type="text"
                      name="cgLaptopSlno"
                      className="form-control"
                      value={this.state.cgLaptopSlno}
                      onChange={this.changeCgLaptopSlnoHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>DBS Laptop SIno: </label>
                    <input
                      type="text"
                      name="dbsLaptopSlno"
                      className="form-control"
                      value={this.state.dbsLaptopSlno}
                      onChange={this.changeDbsLaptopSlnoHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Laptop Taken/assigned: </label>
                    <input
                      type="date"
                      name="dateOfLaptopTaken"
                      className="form-control"
                      value={this.state.dateOfLaptopTaken}
                      onChange={this.changeDateOfLaptopTakenHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Laptop Return: </label>
                    <input
                      type="date"
                      name="dateOfLaptopReturn"
                      className="form-control"
                      value={this.state.dateOfLaptopReturn}
                      onChange={this.changeDateOfLaptopReturnHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Spoc to whom laptop was returned: </label>
                    <input
                      type="text"
                      name="spoc"
                      className="form-control"
                      value={this.state.spoc}
                      onChange={this.changeSpocHandler}
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

export default UpdatePersonal;
