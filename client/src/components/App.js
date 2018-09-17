import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './../components/PrivateRoute';
import * as actions from './../actions';

import Header from './Header';
import SearchPage from './SearchPage';
import AnimePage from './AnimePage';
import LandingPage from './LandingPage';
import NotFound404 from './NotFound';

class App extends Component {
	componentDidMount () {
		this.props.fetchUser();
	}

	render () {
		return (
			<div className='container-fluid'>
				<BrowserRouter>
					<div>
						<Header />
						<div>
							<Switch>
								<Route exact path='/' component={LandingPage} />
								<PrivateRoute exact path='/searchAnime' component={SearchPage} />
								<Route path='/view/:id' component={AnimePage} />
								<Route exact path='*' component={NotFound404} />
							</Switch>
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
