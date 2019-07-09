import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import MainPageContainer from "./containers/mainpage/MainPageContainer";
import UserListPage from "./scenes/users/UserListPage";
import DriverListPage from "./scenes/drivers/DriverListPage";
import GuideListPage from "./scenes/guides/GuideListPage";
import UserEditPage from "./scenes/users/UserEditPage";
import DriverEditPage from "./scenes/drivers/DriverEditPage";
import GuideEditPage from "./scenes/guides/GuideEditPage";
import TripListPage from "./scenes/trips/TripListPage";
import TripEditPage from "./scenes/trips/TripEditPage";
import Login from "./scenes/login/Login";

class App extends Component {
  render() {
    return (
      <MainPageContainer>
         <Switch>
            <Route exact path="/" component={UserListPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/users" component={UserListPage} />
            <Route exact path="/users/:entityId" component={UserEditPage} />
            <Route exact path="/drivers" component={DriverListPage} />
            <Route exact path="/drivers/:entityId" component={DriverEditPage} />
            <Route exact path="/guides" component={GuideListPage} />
            <Route exact path="/guides/:entityId" component={GuideEditPage} />
            <Route exact path="/trips/" component={TripListPage} />
            <Route exact path="/trips/:entityId" component={TripEditPage} />
            <Route component={UserListPage} />
          </Switch>       
      </MainPageContainer>        
    );
  }
}

export default App;
