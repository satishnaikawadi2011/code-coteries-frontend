import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useUserCardStyles = makeStyles({
	avatar:
		{
			width: ({ avatarSize = 44 }: any) => avatarSize,
			height: ({ avatarSize = 44 }: any) => avatarSize
		},
	typography:
		{
			textOverflow: 'ellipsis',
			overflow: 'hidden'
		},
	wrapper:
		{
			display: 'grid',
			gridAutoFlow: 'column',
			gridTemplateColumns: 'min-content auto',
			gridGap: 12,
			alignItems: 'center',
			width: '100%'
		},
	nameWrapper:
		{
			overflow: 'hidden',
			whiteSpace: 'nowrap'
		}
});
