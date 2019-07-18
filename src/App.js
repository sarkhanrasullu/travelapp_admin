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
import FeedbackListPage from "./scenes/feedbacks/FeedbackListPage";
import FeedbackEditPage from "./scenes/feedbacks/FeedbackEditPage";
import LoginService from "./services/LoginService";
import { withRouter } from "react-router-dom";
import HelpListPage from "./scenes/helps/HelpListPage";
import HelpEditPage from "./scenes/helps/HelpEditPage";
import LanguageListPage from "./scenes/languages/LanguageListPage";
import LanguageEditPage from "./scenes/languages/LanguageEditPage";
import CarUtilitiesListPage from "./scenes/car_utilities/CarUtilitiesListPage";
import CarUtilitiesEditPage from "./scenes/car_utilities/CarUtilitiesEditPage";
import DestinationListPage from "./scenes/destinations/DestinationListPage";
import DestinationEditPage from "./scenes/destinations/DestinationEditPage";

class App extends Component {

  service_login = new LoginService(this);

  render() {
    const loggedInUser = this.service_login.getLoggedInUser();
    return (
      <MainPageContainer>
           {loggedInUser?
         <Switch>
            <Route exact path="/users" component={UserListPage} />
            <Route exact path="/users/:entityId" component={UserEditPage} />
            <Route exact path="/drivers" component={DriverListPage} />
            <Route exact path="/drivers/:entityId" component={DriverEditPage} />
            <Route exact path="/guides" component={GuideListPage} />
            <Route exact path="/guides/:entityId" component={GuideEditPage} />
            <Route exact path="/trips/" component={TripListPage} />
            <Route exact path="/trips/:entityId" component={TripEditPage} />
            <Route exact path="/places/" component={DestinationListPage} />
            <Route exact path="/places/:entityId" component={DestinationEditPage} />
            <Route exact path="/feedbacks/" component={FeedbackListPage} />
            <Route exact path="/feedbacks/:entityId" component={FeedbackEditPage} />
            <Route exact path="/helps/" component={HelpListPage} />
            <Route exact path="/helps/:entityId" component={HelpEditPage} />
            <Route exact path="/languages/" component={LanguageListPage} />
            <Route exact path="/languages/:entityId" component={LanguageEditPage} />
            <Route exact path="/carutilities/" component={CarUtilitiesListPage} />
            <Route exact path="/carutilities/:entityId" component={CarUtilitiesEditPage} />
            <Route component={UserListPage} />
          </Switch>:    
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        }
      </MainPageContainer>        
    );
  }
}

export default withRouter(App);
