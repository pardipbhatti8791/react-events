import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";

import LogoutMenu from "../menus/logout-menu";
import LoggedInMenu from "../menus/loggedin-menu";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState({
      authenticated: true
    });
  };

  handleSignOut = () => {
    this.setState({
      authenticated: false
    });

    this.props.history.push("/");
  };
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          {this.state.authenticated && (
            <React.Fragment>
              <Menu.Item as={NavLink} to="/events" name="Events" />
              <Menu.Item as={NavLink} to="/people" name="People" />
            </React.Fragment>
          )}

          <Menu.Item>
            <Button
              floated="right"
              as={Link}
              to="/createEvent"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {this.state.authenticated ? (
            <LoggedInMenu signOut={this.handleSignOut} />
          ) : (
            <LogoutMenu login={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
