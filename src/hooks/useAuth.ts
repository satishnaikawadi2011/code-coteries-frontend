import { useEffect, useState } from 'react';
import authStorage from '../utils/storage/auth';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
	const [
		isAuthenticated,
		setIsAuthenticated
	] = useState(false);
	const authData = authStorage.get();
	useEffect(
		() => {
			const isAuth =
				!!authData &&
				!!authData.user &&
				!!authData.token &&
				(jwtDecode(authData.token) as any).exp > Date.now() / 1000;
			setIsAuthenticated(isAuth);
		},
		[
			authData
		]
	);
	return { isAuthenticated };
};

export default useAuth;
