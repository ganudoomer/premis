import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';
import Candidte from './views/Candidate/Candidate';
import CandidateApptitude from './views/Candidate/CandidateQuestion';
import AdminLayout from 'layouts/Admin.jsx';
import CompanyLayout from './layouts/Company.jsx';
import AdminLogin from '../src/components/Login/AdminLogin.jsx';
import ComapnyLogin from '../src/components/Login/CampanyLogin.jsx';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/admin" component={AdminLogin} />
			<Route path="/admin/dashboard" render={(props) => <AdminLayout {...props} />} />
			<Route exact path="/company/login" component={ComapnyLogin} />
			<Route path="/company/dashboard" render={(props) => <CompanyLayout {...props} />} />
			<Route path="/candidate/questions" render={(props) => <CandidateApptitude {...props} />} />
			<Route path="/candidate/:id" render={(props) => <Candidte {...props} />} />
			<Redirect from="/" to="/admin" />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
