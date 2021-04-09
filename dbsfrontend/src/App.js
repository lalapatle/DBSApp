import logo from "./logo.svg";
import "./App.css";
import Personalinfo from "./Component/Personalinfo";
import Employeee from "./Component/Employeee";
import Home from "./Component/Home";
import UpdatePersonal from "./Component/UpdatePersonal";
import AddPersonal from "./Component/AddPersonal";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ViewPersonal from "./Component/ViewPersonal";
import ViewEmployee from "./Component/ViewEmployee";
import AddEmploee from "./Component/AddEmploee";
import UpdateEmployee from "./Component/UpdateEmployee";
function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/personalinfo" component={Personalinfo} />
          <Route path="/employee" component={Employeee} />
          <Route path="/add-employee" component={AddPersonal} />
          <Route path="/update/:cgGroupId" component={UpdatePersonal} />
          <Route path="/view/:cgGroupId" component={ViewPersonal} />
          <Route path="/view-emp/:sNo" component={ViewEmployee} />
          <Route path="/add-emp/:cgGroupId" component={AddEmploee} />
          <Route path="/update-emp/:sNo" component={UpdateEmployee} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
