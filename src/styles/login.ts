import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

/* Login page: /pages/login.js */
export const useLoginPageStyles = makeStyles((theme: Theme) => ({
	signUpCard:
		{
			maxWidth: 348,
			padding: '16px 40px',
			marginBottom: 10,
			display: 'grid',
			alignItems: 'center',
			gridTemplateColumns: '2fr 1fr'
		},
	card:
		{
			maxWidth: 348,
			padding: '16px 40px',
			marginBottom: 10
		},
	section:
		{
			display: 'grid',
			placeItems: 'center',
			height: '100vh'
		},
	cardHeader:
		{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
	textField:
		{
			marginBottom: 6
		},
	button:
		{
			margin: '8px 0px'
		},
	typography:
		{
			margin: '10px 0px'
		},
	orContainer:
		{
			margin: '10px 0px',
			display: 'grid',
			gridTemplateColumns: '1fr auto 1fr',
			gridGap: 18,
			placeItems: 'center'
		},
	orLine:
		{
			justifySelf: 'stretch',
			height: 1,
			background: '#e6e6e6'
		},
	facebookIcon:
		{
			height: 16,
			width: 16,
			marginRight: 8
		}
}));
