import React, { Component } from "react";
import PersonalService from "../Services/PersonalService";
import { Link } from "react-router-dom";
import axios from "axios";

class UploadPancardFiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cgGroupId: this.props.match.params.cgGroupId,
      pancardFile: null,
    };
  }

  changePancardFileHandler = (event) => {
    this.setState({ panfile: event.target.files[0] });
  };
  savePancardFile = (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("file", this.state.panfile, this.state.panfile.name);
    let url =
      "http://localhost:8080/dbsoApp/upload-pancard/" + this.state.cgGroupId;
    axios
      .put(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        let file = { id: this.state.id, link: res.data };
        PersonalService.uploadFile(
          this.state.cgGroupId,
          file
        ).then((result) => {});
        console.log(res.data);
        alert("File Upload Successfully");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="photoPage">
              <div className="card col-md-10 offset-md-15 offset-md-10">
                <h3 className="text-center mt-4 headingTitle">Add File</h3>
                <div className="card-body">
                  <fieldset>
                    <form>
                      <div className="form-group">
                        <label>Select File</label>
                        <input
                          type="file"
                          name="pancardFile"
                          id="pancardFile"
                          className="form-control"
                          value={this.state.pacardFile}
                          accept="file/txt, file/pdf, file/img"
                          onChange={this.changePancardFileHandler}
                          required
                        />
                      </div>
                      <br></br>
                      <button className="button" onClick={this.savePancardFile}>
                        Save
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to={`/associatePortal/${this.state.cgGroupId}`}>
                        <input
                          className="button"
                          type="submit"
                          value="Back"
                          style={{ backgroundColor: "black" }}
                        />
                      </Link>
                    </form>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UploadPancardFiles;
