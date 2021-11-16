import { Hidden, TextFieldProps, Typography } from '@mui/material';
import React from 'react';
import { useEditProfilePageStyles } from 'src/styles/edit-profile';
import AppFormField from '../shared/form/AppFormField';

interface SectionItemProps {
	type?: string;
	text: string;
	name: string;
	inputRef?: any;
}

const SectionItem: React.FC<SectionItemProps & TextFieldProps> = ({
	type = 'text',
	text,
	name,
	inputRef,
	...props
}) => {
	const classes = useEditProfilePageStyles();

	return (
		<div className={classes.sectionItemWrapper}>
			<aside>
				<Hidden xsDown>
					<Typography className={classes.typography} align="right">
						{text}
					</Typography>
				</Hidden>
				{/* <Hidden smUp>
					<Typography className={classes.typography}>{text}</Typography>
				</Hidden> */}
			</aside>
			<div style={{ width: '100%' }}>
				<AppFormField
					fieldName={name}
					inputRef={inputRef}
					variant="outlined"
					fullWidth
					type={type}
					className={classes.textField}
					inputProps={{
						className: classes.textFieldInput
					}}
					{...props}
				/>
			</div>
		</div>
	);
};

export default SectionItem;
