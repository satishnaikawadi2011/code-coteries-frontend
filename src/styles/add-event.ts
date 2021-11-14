import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

/* Login page: /pages/login.js */
export const useAddEventPageStyles = makeStyles((theme: Theme) => ({
	imageContainer:
		{
			padding: 50,
			marginTop: 30,
			marginBottom: 30
		},
	image:
		{
			objectFit: 'cover',
			width: '100%',
			height: '100%',
			display: 'block'
		}
}));
