import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

// / ProfilePicture component: /components/shared/ProfilePicture.js
export const useProfilePictureStyles = makeStyles({
	person:
		{
			color: '#ffffff',
			height: ({ size = 150 }: any) => size,
			width: ({ size = 150 }: any) => size
		},
	wrapper:
		{
			background: '#DBDBDB',
			width: ({ size = 150 }: any) => size,
			height: ({ size = 150 }: any) => size,
			borderRadius: '50%',
			display: 'grid',
			position: 'relative',
			placeItems: 'center',
			'&:hover':
				{
					cursor:
						({ isOwner }: any) =>

								isOwner ? 'pointer' :
								'default'
				}
		},
	section:
		{
			display: 'grid',
			justifyContent: 'center'
		},
	image:
		{
			height: ({ size = 150 }: any) => size,
			width: ({ size = 150 }: any) => size,
			borderRadius: '50%'
		}
});
