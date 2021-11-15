import { Hidden, Typography } from '@mui/material';
import React from 'react';
import { useEditProfilePageStyles } from 'src/styles/edit-profile';
import AppFormField from '../shared/form/AppFormField';

interface SectionItemProps {
	type?: string;
	text: string;
	name: string;
	inputRef?: any;
}

const SectionItem: React.FC<SectionItemProps> = ({ type = 'text', text, name, inputRef }) => {
	const classes = useEditProfilePageStyles();

	return (
		<div className={classes.sectionItemWrapper}>
			<aside>
				<Hidden xsDown>
					<Typography className={classes.typography} align="right">
						{text}
					</Typography>
				</Hidden>
				<Hidden smUp>
					<Typography className={classes.typography}>{text}</Typography>
				</Hidden>
			</aside>
			<AppFormField
				fieldName={name}
				inputRef={inputRef}
				// helperText={error?.type === name && error.message}
				variant="outlined"
				fullWidth
				// defaultValue={formItem}
				type={type}
				className={classes.textField}
				inputProps={{
					className: classes.textFieldInput
				}}
			/>
		</div>
	);
};

export default SectionItem;
