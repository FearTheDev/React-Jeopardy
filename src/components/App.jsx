import React from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from '../logo.svg';
import Title from './Title';
import CategoryList from './CategoryList';

import '../styles/app.scss';

const App = () => {

  return (
    <div className="app">

      <div className="app-head">
        <h1><img className="react-logo" src={logo} alt="logo" /> React Jeopardy</h1>
      </div>

      <Switch>
        {/* If the user just opened the application load title screen */}
        <Route exact path="/">
          <Title />
        </Route>

        {/* After the user has provided a name to start with then display game categories */}
        <Route path="/categories">
          <CategoryList />
        </Route>
      </Switch>
    </div>

  );
};

export default App;
