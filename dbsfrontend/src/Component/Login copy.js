// import React, { Component } from "react";
// import "../Component/Login.css";
// import { Link } from "react-router-dom";
// import LoginService from "../Services/LoginService";
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cgGroupId: "",
//       password: "",
//       role: "",
//       isLoaded: false,
//     };

//     this.onSubmit = this.onSubmit.bind(this);
//     this.OnRoleChange = this.OnRoleChange.bind(this);
//     this.changeUserId = this.changeUserId.bind(this);
//   }

//   componentDidMount() {}

//   onSubmit = (e) => {
//     e.preventDefault();
//     let login = {
//       cgGroupId: this.state.cgGroupId,
//       password: this.state.password,
//       role: this.state.role,
//     };

//     console.log(this.state.role);
//     LoginService.signIn(login)
//       .then((res) => {
//         alert("Login Successful");
//         let l = res.data;
//         if (l.role === "Associate") {
//           this.props.history.push(`/associatePortal/${this.state.cgGroupId}`);
//         } else if (l.role === "Super-Admin") {
//           this.props.history.push(`/superAdmin`);
//         } else if (l.role === "Operation-Team") {
//           this.props.history.push(`/employee`);
//         }
//         console.log(JSON.stringify(login));
//       })
//       .catch((res) => {
//         alert("Incorrect Credentials :(");
//       });
//   };

//   OnRoleChange = (e) => {
//     this.setState({
//       role: e.target.value,
//     });
//     console.log(this.state.role);
//   };

//   OnRoleChange1 = (e) => {
//     this.setState({
//       role: e.target.value,
//     });
//     console.log(this.state.role);
//   };
//   OnRoleChange2 = (e) => {
//     this.setState({
//       role: e.target.value,
//     });
//     console.log(this.state.role);
//   };
//   changeUserId = (e) => {
//     this.setState({
//       cgGroupId: e.target.value,
//     });
//   };

//   changepassword = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <>
//         <div className="loginmain">
//           <p className="sign" align="center">
//             Sign In
//           </p>
//           <form className="form1">
//             <input
//               className="un"
//               type="text"
//               align="center"
//               placeholder="UserId"
//               onChange={this.changeUserId}
//               value={this.state.cgGroupId}
//             />
//             <input
//               className="pass"
//               type="password"
//               align="center"
//               placeholder="Password"
//               onChange={this.changepassword}
//               value={this.state.password}
//             />
//             <div className="radioGroup">
//               <div className="radiobtn ">
//                 <label>
//                   <input
//                     type="radio"
//                     value="Associate"
//                     checked={this.state.role === "Associate"}
//                     onChange={this.OnRoleChange}
//                   />
//                   Associate
//                 </label>
//               </div>

//               <div className="radiobtn ">
//                 <label>
//                   <input
//                     type="radio"
//                     value="Operation-Team"
//                     checked={this.state.role === "Operation-Team"}
//                     onChange={this.OnRoleChange1}
//                   />
//                   Operation Team
//                 </label>
//               </div>

//               <div className="radiobtn ">
//                 <label>
//                   <input
//                     type="radio"
//                     value="Super-Admin"
//                     checked={this.state.role === "Super-Admin"}
//                     onChange={this.OnRoleChange2}
//                   />
//                   Super Admin
//                 </label>
//               </div>
//             </div>
//             <div className="btnsubmit">
//               <button className="submit" align="center" onClick={this.onSubmit}>
//                 Sign In
//               </button>
//             </div>

//             <div className="forgot" align="center">
//               <Link to="/forgetPassword">Forget Password</Link>
//             </div>
//           </form>
//         </div>
//       </>
//     );
//   }
// }

// export default Login;
