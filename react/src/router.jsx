import {createBrowserRouter, Navigate} from 'react-router-dom';
import Items from './components/dashboard/Items';
import MembersLayout from './components/MembersLayout';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/register',
		element: <Register />
	},
	{
		path: '/app',
		element: <MembersLayout />,
		children:[
			{
				path: '/app',
				element: <Dashboard />
			},
			{
				path: '/app/dashboard',
				element: <Dashboard />
			},
			{
				path: '/app/products',
				element: <Items />
			},
		]
	},
	
	{
		path: '*',
		element: <NotFound />
	},
]);


export default router;