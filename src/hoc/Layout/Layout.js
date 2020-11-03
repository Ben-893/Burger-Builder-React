import React, { useState } from 'react';
import { connect } from 'react-redux';

import Auxiliary from '../Auxiliary/Auxiliary';
import CSS from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
  const [SideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!SideDrawerIsVisible);
  };

    return (
      <Auxiliary>
        <Toolbar
          drawerToggleClicked={sideDrawerToggleHandler}
          isAuth={props.isAuthenticated}
        />
        <SideDrawer
          isAuth={props.isAuthenticated}
          open={SideDrawerIsVisible}
          closed={sideDrawerClosedHandler}
        />
        <main className={CSS.Content}>{props.children}</main>
      </Auxiliary>
    );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(layout);
