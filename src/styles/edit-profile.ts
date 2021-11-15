import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

// EditProfilePage: /pages/edit-profile.js
const sectionItem = {
	display: 'grid',
	gridAutoFlow: 'column',
	gridGap: 30,
	placeItems: 'start end',
	marginBottom: 16,
	gridTemplateColumns: 'minmax(auto, 150px) minmax(auto, 340px)'
};
const typography = {
	fontWeight: '600 !important' as any
};
const justifySelfStart = {
	justifySelf: 'start'
};
const form = {
	display: 'grid'
};

export const useEditProfilePageStyles = makeStyles((theme: Theme) => ({
	section:
		{
			display: 'grid',
			gridAutoFlow: 'column',
			[theme.breakpoints.down('sm')]:
				{
					gridTemplateColumns: 'minmax(48px, max-content) 0px auto'
				},
			[theme.breakpoints.up('sm')]:
				{
					gridTemplateColumns: 'minmax(220px, max-content) auto'
				},
			border: '1px solid #dbdbdb'
		},
	permanentDrawerPaper:
		{
			borderRight: '1px solid #dbdbdb !important' as any,
			left: 'unset !important' as any,
			top: 'unset !important' as any,
			position: 'relative !important' as any
		},
	permanentDrawerRoot:
		{
			height: '100% !important' as any,
			'& div':
				{
					zIndex: 'unset !important' as any
				}
		},
	temporaryDrawer:
		{
			'& div':
				{
					width: '220px !important' as any
				}
		},
	listItemSelected:
		{
			borderLeft: '2px solid black',
			'& span':
				{
					fontWeight: '600 !important' as any
				}
		},
	listItemButton:
		{
			paddingTop: '10px !important' as any,
			paddingBottom: '10px !important' as any
		},
	menuButton:
		{
			[theme.breakpoints.up('sm')]:
				{
					display: 'none !important' as any
				},
			marginLeft: 'unset !important' as any,
			'&:hover':
				{
					background: 'none !important' as any
				}
		},
	container:
		{
			background: '#ffffff',
			display: 'grid',
			justifyContent: 'start',
			padding: '30px !important' as any
		},
	sectionItem:
		{
			...sectionItem,
			[theme.breakpoints.down('xs')]:
				{
					display: 'block'
				}
		},
	form,
	typography,
	justifySelfStart,
	sectionItemWrapper:
		{
			...sectionItem,
			[theme.breakpoints.down('xs')]:
				{
					display: 'unset'
				}
		},
	textFieldInput:
		{
			padding: '10px !important'
		},
	textField:
		{
			alignSelf: 'center'
		},
	pictureSectionItem:
		{
			...sectionItem,
			placeItems: 'center end',
			[theme.breakpoints.down('xs')]:
				{
					gridGap: 20,
					gridTemplateColumns: 'minmax(auto, 38px) minmax(auto, 340px)'
				}
		},
	typographyChangePic:
		{
			'&:hover':
				{
					cursor: 'pointer'
				}
		}
}));
