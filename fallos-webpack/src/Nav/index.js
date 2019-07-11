import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from '../Home';
import Login from '../Login';
import Recently from '../Recently';
import Albums from '../Albums';
import Songs from '../Songs';
import store from '../store';

const nav = document.getElementById('nav');

const Nav = ({name}) =>{

            return ReactDOM.createPortal(
                <Router>
                    <NavLink className="menu" to="/">Home</NavLink>
                    <NavLink className="menu" to="/albums">Albums</NavLink>
                    <NavLink className="menu" to="/songs">Songs</NavLink>
                    <NavLink className="menu" to="/recently">Recently Played</NavLink>
                    <NavLink className="menu" to="/login">{name !== ""  ? 'Profile' : 'Login' }</NavLink>
          
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/albums" exact component={Albums} />
                    <Route path="/songs" exact component={Songs} />
                    {store.getState().user.loged ? (<Route path="/recently" exact component={Recently} />) : (<Route path="/recently" exact component={Login} />)}
                </Router>, nav
            );
}

const mapStateToProps = (state) => {
    return {
      name: state.user.name
    }
  }
  
  export default connect(
    mapStateToProps,
  )(Nav);