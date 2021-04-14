import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class SearchByCgGroupId extends Component {

    constructor(props) {
        super(props);
        this.state = {
          emp: {},
          cgGroupId: this.props.match.params.cgGroupId,
        };
        this.editEmployee = this.editEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.changeback = this.changeback.bind(this);
        this.changeback = this.changeback.bind(this);

      }
      
      editEmployee(sno) {
        this.props.history.push(`/update-emp/${sno}`);
      }
      viewEmployee(sno) {
        this.props.history.push(`/view-emp/${sno}`);
      }
      changeback() {
        this.props.history.push(`/employee`);
      }

      componentDidMount() {

        EmployeeService.getByCgId(this.state.cgGroupId).then((response) => {
          this.setState({ emp: response.data });
          console.log(this.state.emp);
        });
      }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                    <button
                    id="margin"
                    style={{ margin: "40px auto 40px auto" }}
                    onClick={() => this.changeback()}
                    class="button"
                >
                    Back
                </button>
                    </div>
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
                                <th colSpan="2" style={{ textAlign: "center" }}>
                                Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody className="table-info text-center">
                            
                                <th>{this.state.emp.sno}</th>
                                <td>{this.state.emp.resourceStatus}</td>
                                <td>{this.state.emp.billability}</td>
                                <td>{this.state.emp.currency}</td>
                                <td>{this.state.emp.lwdAccount}</td>
                                <td>{this.state.emp.lwdReason}</td>
                                <td>{this.state.emp.pesStatus}</td>
                                <td>{this.state.emp.billRate}</td>
                                <td>{this.state.emp.sowStart}</td>
                                <td>{this.state.emp.sowEnd}</td>
                                <td>{this.state.emp.poNumbers}</td>
                                <td>{this.state.emp.comments}</td>
                                <td>{this.state.cgGroupId}</td>
                                <td>
                                    <div className="actions">
                                    <button
                                        id="margin"
                                        onClick={() => this.editEmployee(this.state.emp.sno)}
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
                                        onClick={() => this.viewEmployee(this.state.emp.sno)}
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
            </>
        );
    }
}

export default SearchByCgGroupId;