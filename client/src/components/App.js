import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './../components/PrivateRoute';
import * as actions from './../actions';

import Header from './Header';
import Dashboard from './Dashboard';
import AnimePage from './AnimePage';

const Landing = () => <h2>Landing</h2>;
const NotFound404 = () => <h2>PAGE NOT FOUND</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Header />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <PrivateRoute exact path="/searchAnime" component={Dashboard} />
                  <Route path="/view/:id" component={AnimePage} />
                  <Route exact path="*" component={NotFound404} />
                </Switch>
              </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
