import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import AppApolloProvider from './utils/ApolloProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

ReactDOM.render(
	<React.StrictMode>
		<AppApolloProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<App />
				</LocalizationProvider>
			</ThemeProvider>
		</AppApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
