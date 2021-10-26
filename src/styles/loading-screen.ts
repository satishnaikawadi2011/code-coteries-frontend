// import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

/* LoadingScreen component: /components/shared/LoadingScreen.js */
export const useLoadingScreenStyles = makeStyles({
	section:
		{
			height: '100%',
			position: 'absolute',
			width: '100%',
			top: 0,
			zIndex: 9999,
			background: '#fafafa',
			display: 'grid',
			placeItems: 'center'
		}
});
