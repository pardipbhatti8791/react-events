import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";

import EventDashboard from "../../features/event/eventDashboard/eventDashboard";
import EventDetails from "../../features/event/eventDetail/eventDetail";
import PeopleDashboard from "../../features/user/peopleDashboard/peopleDashboard";
import UserDetailed from "../../features/user/userDetailed/userDetailed";
import SettingsDashboard from "../../features/user/settings/settingsDashboard";
import CreateEvent from "../../features/event/eventForm/eventForm";
import Home from "../../features/home/home";
import TestComponent from "../../features/testarea/testComponent";

import NavBar from "../../features/nav/navBar/navBar";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>

        <Route path="/(.+)" render={() => (
            <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/events" component={EventDashboard} />
                <Route path="/test" component={TestComponent} />
                <Route path="/event/:id" component={EventDetails} />
                <Route path="/manage/:id" component={CreateEvent} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailed} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={CreateEvent} />
              </Switch>
            </Container>
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
