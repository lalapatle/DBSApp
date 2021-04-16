import "./App.css";
import Personalinfo from "./Component/Personalinfo";
import Employeee from "./Component/Employeee";
import Home from "./Component/Home";
import UpdatePersonal from "./Component/UpdatePersonal";
import AddPersonal from "./Component/AddPersonal";
import "./Component/Home.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewPersonal from "./Component/ViewPersonal";
import ViewEmployee from "./Component/ViewEmployee";
import AddEmploee from "./Component/AddEmploee";
import UpdateEmployee from "./Component/UpdateEmployee";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import SuperAdmin from "./Component/SuperAdmin";
import ViewSuperAdmin from "./Component/ViewSuperAdmin";
import UpdateSuperAdmin from "./Component/UpdateSuperAdmin";
import AddSuperAdmin from "./Component/AddSuperAdmin";
import SearchByCgGroupId from "./Component/SearchByCgGroupId";
import Login from "./Component/Login";
import ForgetPassword from "./Component/ForgetPassword";
import AssociatePortal from "./Component/AssociatePortal";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/associatePortal/:cgGroupId"
            component={AssociatePortal}
          />
          <Route exact path="/login" component={Login} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/superAdmin" component={SuperAdmin} />
          <Route path="/personalinfo" component={Personalinfo} />
          <Route path="/employee" component={Employeee} />
          <Route path="/add-employee" component={AddPersonal} />
          <Route path="/add-superadmin" component={AddSuperAdmin} />
          <Route path="/update/:cgGroupId" component={UpdatePersonal} />
          <Route path="/view/:cgGroupId" component={ViewPersonal} />
          <Route path="/view-emp/:sNo" component={ViewEmployee} />
          <Route path="/view-superadmin/:sNo" component={ViewSuperAdmin} />
          <Route path="/add-emp/:cgGroupId" component={AddEmploee} />
          <Route path="/update-emp/:sNo" component={UpdateEmployee} />
          <Route path="/update-superadmin/:sNo" component={UpdateSuperAdmin} />
          <Route
            path="/search-by-cgGroupId/:cgGroupId"
            component={SearchByCgGroupId}
          />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
