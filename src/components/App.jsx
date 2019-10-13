import React from 'react';
import {connect} from 'react-redux';
import { Route} from 'react-router-dom';

import logo from '../logo.svg';
import {Title, CategoryList, Category} from './index';

import '../styles/app.scss';

const App = ({usernameValid}) => {

  return (
    <div className="app">

      <div className="app-head">
        <h1><img className="react-logo" src={logo} alt="logo" /> React Jeopardy</h1>
      </div>

        {/* If the user just opened the application load title screen */}
        <Route exact path="/" render={ props => <Title {...props} /> } />


        {/* After the user has provided a name to start with then display game categories */}
        <Route path="/categories" render ={props => <CategoryList {...props} />} />

        <Route path="/category/:id">
          <Category />
        </Route>

    </div>

  );
};

const mapStateToProps = state =>{
  return{
    usernameValid: state.jeopardyStatsReducer.usernameValid,
  };
};

export default connect(mapStateToProps, {})(App);
