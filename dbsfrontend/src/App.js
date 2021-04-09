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

function App() {
  return (
    <Router>
      <>
        <Header />
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
        <Footer />
      </>
    </Router>
  );
}

export default App;
