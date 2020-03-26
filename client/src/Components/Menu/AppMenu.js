import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import {Link} from 'react-router-dom';

import "./AppMenu.scss";

export default class AppMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="financial-menu">
        <Menu secondary>
          <Menu.Item
            name="$ Financial Tracker"
            active={activeItem === "home"}
            as={Link}
            to='/home'
          />
          <Menu.Menu position="right">
            {this.props.loggedIn ? (
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                onClick={this.props.handleLogout}
              />
            ) : (
              <>
                <Menu.Item
                  name="sign-up"
                  active={activeItem === "signup"}
                  as={Link}
                  to='/signup'
                />
                <Menu.Item
                  name="login"
                  active={activeItem === "login"}
                  as={Link}
                  // onClick={this.props.handleLogin}
                  to='/signin'
                />
              </>
            )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
