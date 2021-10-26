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
		}
}));
