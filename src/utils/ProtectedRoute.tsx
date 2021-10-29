import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import authStorage from './storage/auth';

const ProtectedRoute: React.FC<RouteProps> = ({ component, ...props }) => {
	const authData = authStorage.get();
	if (authData && authData.user && authData.token && (jwtDecode(authData.token) as any).exp > Date.now() / 1000) {
		return <Route component={component} {...props} />;
	}
	else {
		return <Redirect to="/accounts/login" />;
	}
};

export default ProtectedRoute;
