import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

/* Login page: /pages/login.js */
export const useSignupPageStyles = makeStyles((theme: Theme) => ({
	loginCard:
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
	cardHeaderSubHeader:
		{
			textAlign: 'center',
			fontWeight: 'bold !important' as any,
			lineHeight: 1.2,
			color: '#999',
			margin: '20 !important' as any
		},
	textField:
		{
			marginBottom: 6
		},
	button:
		{
			margin: '8px 0px'
		}
}));
