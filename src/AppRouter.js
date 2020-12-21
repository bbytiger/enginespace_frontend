import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Greeting from './components/greeting.js'
import Registration from './components/registration.js';
import Tour from './components/tour.js'

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="app">
      <Route render={({ location }) => {
        return (
          <TransitionGroup>
            <CSSTransition
              timeout={300}
              classNames='fade'
              key={location.key}
            >
            <Switch location={location}>
                <Route exact path="/" component={Greeting}/>
                <Route exact path="/tour" component={Tour}/>
                <Route exact path="/registration" component={Registration} />
                <Route exact path="/about" />
                <Route exact path="/products"/>
                <Route exact path="/developers"/>
                <Route exact path="/company"/>
                <Route exact path="/pricing"/>
                <Route exact path="/community"/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter