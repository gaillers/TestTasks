import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Header from './components/Header/Header.jsx'
import Home from './routes/Home.jsx'

export const App = () => (
  <Fragment>
    <Header/>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Fragment>
)
 