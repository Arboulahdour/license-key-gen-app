import React from 'react';

import { 
	BrowserRouter as Router, 
	Switch,
	Redirect, 
	Route, 
	Link 
} from "react-router-dom";

import Cookies from 'js-cookie';

import AuthApi from './AuthApp';

function CookiesApp() {

	const [auth,setAuth] = React.useState(false)
	
	const readCookie = () => {
		const user = Cookies.get("username");
		if (user) {
			setAuth(true);
		}
	}

	React.useEffect(() => {
		readCookie();
	}, [])

	return (
		<div>
			<AuthApi.Provider value={{auth, setAuth}}>
				<Router>
					<Routes />
				</Router>
			</AuthApi.Provider>
		</div>
		)
}

const Login = () => {
	const Auth = React.useContext(AuthApi)
	const handleOnClick = () => {
		Auth.setAuth(true);
		Cookies.set('username', 'loginTrue')
	}

	return (
		<div>
			<h1 style={{color: 'white'}}>Welcome to test page!</h1>	
			<button onClick={handleOnClick}>Login</button>
		</div>

		)
}


const Dashboard = () => {
	const Auth = React.useContext(AuthApi)
	const handleOnClick = () => {
		Auth.setAuth(false);
		Cookies.remove("username")
	}
	return (
		<div>
			<h1 style={{color: 'white'}}>Dashboard</h1>
			<button onClick={handleOnClick}>Logout</button>
		</div>

		)
}

const Routes = () => {
	const Auth = React.useContext(AuthApi)
	return (
		<Switch>
			<ProtectedLogin path="/login" auth={Auth.auth} component={Login}/>
			<ProtectedRoute path="/dashboard" auth={Auth.auth} component={Dashboard}/>
		</Switch>

	)
}


const ProtectedRoute = ({auth,component:Component,...rest}) => {
	return (
		<Route 
		{...rest}
		render = {() =>auth? (
				<Component />
			) : (
				<Redirect to="/login"/>
			) 
		}
		/>
	)
}


const ProtectedLogin = ({auth,component:Component,...rest}) => {
	return (
		<Route 
		{...rest}
		render = {() =>!auth? (
				<Component />
			) : (
				<Redirect to="/dashboard"/>
			) 
		}
		/>
	)
}


export default CookiesApp;