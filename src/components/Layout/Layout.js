import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxiliary from '../../hoc/Auxiliary';
import CSS from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerClosedHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  SideDrawerToggleHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.SideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
        <main className={CSS.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
