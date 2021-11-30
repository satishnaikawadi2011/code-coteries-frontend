import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const iconProps = {
	backgroundRepeat: 'no-repeat',
	height: 12
};

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

const border = '1px solid #e6e6e6';
const marginBottom = '20px !important';
export const useFollowSuggestionsStyles = makeStyles((theme: Theme) => ({
	container:
		{
			maxWidth: '100vw'
		},
	slide:
		{
			padding: '10px 0px 20px 0px !important',
			marginBottom,
			// border,
			borderTop: 'none',
			'& .slick-slide > div':
				{
					background: '#ffffff',
					border,
					margin: '0px 10px !important',
					padding: '20px !important'
				},
			'& .slick-next:before, & .slick-prev:before':
				{
					color: 'rgb(38, 38, 38)',
					fontSize: '24px !important'
				}
		},
	typography:
		{
			borderBottom: 'none !important',
			padding: '0px 0px 0px 12px !important'
		},
	skeleton:
		{
			display: 'grid',
			gridAutoFlow: 'column',
			marginBottom,
			gridGap: 16
		},
	avatar:
		{
			width: 54,
			height: 54
		},
	avatarImg:
		{
			userSelect: 'none'
		},
	text:
		{
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			width: '100%'
		},
	card:
		{
			display: 'grid',
			justifyItems: 'center',
			width: 138,
			[theme.breakpoints.down('xs')]:
				{
					width: 116
				}
		}
}));

export const useOptionsDialogStyles = makeStyles((theme: Theme) => ({
	dialogScrollPaper:
		{
			display: 'grid !important' as any,
			gridTemplateColumns: 'minmax(auto, 496px) !important' as any
		},
	button:
		{
			padding: '12px 8px !important' as any
		},
	redButton:
		{
			color: `${theme.palette.error.main} !important` as any,
			padding: '12px 8px !important' as any,
			fontWeight: 'bold !important' as any
		}
}));

export const useGridPostStyles = makeStyles((theme: Theme) => ({
	image:
		{
			width: '100%',
			userSelect: 'none'
		},
	gridPostContainer:
		{
			position: 'relative'
		},
	gridPostOverlay:
		{
			[theme.breakpoints.down('xs')]:
				{
					gridAutoFlow: 'row',
					alignContent: 'space-evenly'
				},
			position: 'absolute',
			display: 'grid',
			placeItems: 'center',
			gridAutoFlow: 'column',
			width: '100%',
			height: '100%',
			justifyContent: 'space-evenly',
			'&:hover':
				{
					background: 'rgba(0,0,0,0.6)',
					cursor: 'pointer',
					'& > div':
						{
							opacity: 1
						}
				}
		},
	gridPostInfo:
		{
			color: '#ffffff',
			display: 'grid',
			gridAutoFlow: 'column',
			gridGap: 5,
			placeItems: 'center',
			opacity: 0
		},
	likes:
		{
			...iconProps,
			backgroundPosition: '-328px -239px',
			backgroundSize: '355px 344px',
			height: 16,
			width: 16
		},
	comments:
		{
			...iconProps,
			backgroundPosition: '-327px -203px',
			backgroundSize: '355px 344px',
			height: 16,
			width: 18
		}
}));
