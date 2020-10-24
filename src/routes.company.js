import Dashboard from 'views/Company/Dashboard';

const dashboardRoutes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'pe-7s-graph',
		component: Dashboard,
		layout: '/company'
	}
];

export default dashboardRoutes;
