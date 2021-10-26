import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useLogoStyles = makeStyles((theme: Theme) => ({
	logoContainer:
		{
			display: 'flex',
			flex: '1 9999 0%',
			minWidth: 40
		},
	logoWrapper:
		{
			flex: '0 0 auto',
			justifyContent: 'flex-start',
			alignItems: 'center',
			alignContent: 'stretch'
		},
	logo:
		{
			marginTop: 10,
			fontFamily: 'Bukhari'
		},
	logoLink:
		{
			textDecoration: 'none',
			color: '#000000'
		}
}));
