import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useFollowButtonStyles = makeStyles<Theme>((theme: Theme) => ({
	button:
		{
			height: '30px !important',
			width: '75px !important',
			padding: '0px 16px !important',
			marginTop:
				({ side }: any) =>
					`${
						side ? '0px !important' :
						'10px !important'}`
		}
}));
