import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';

// layout components
import Navbar from './layout/Navbar';
// import Footer from './layout/Footer';
import Landing from './layout/Landing';
import Experiences from './profiles/Experiences';
import NotFound from './not-found/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-fluid p-0">
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={{ enter: 100000, exit: 100000 }}
                    classNames="page"
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Landing} />
                      <Route
                        exact
                        path="/experiences"
                        component={Experiences}
                      />
                      <Route component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
