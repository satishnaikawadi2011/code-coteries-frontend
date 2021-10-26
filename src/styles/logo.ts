import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LogoProps } from 'src/components/shared/Logo';

export const useLogoStyles = makeStyles<Theme, LogoProps>((theme: Theme) => ({
	logoContainer:
		{
			display: 'flex',
			flex:
				({ centre }) =>

						centre ? '1 1 1' :
						'1 9999 0%',
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
