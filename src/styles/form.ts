import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useFormStyles = makeStyles((theme: Theme) => ({
	fieldContainer:
		{
			marginBottom: 15
		},
	field:
		{
			maxWidth: 600
		},
	textarea:
		{
			padding: 20,
			borderRadius: 10,
			width: 1000
		},
	label:
		{
			margin: 10,
			fontWeight: 'bold !important' as any
		}
}));
