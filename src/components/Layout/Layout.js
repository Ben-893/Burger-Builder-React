import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import CSS from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  SideDrawerClosedHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  SideDrawerToggleHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
        <main className={CSS.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
