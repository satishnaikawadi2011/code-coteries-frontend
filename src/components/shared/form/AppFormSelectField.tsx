import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectProps } from '@mui/material/Select';
import { useFormikContext } from 'formik';
import { useFormStyles } from '../../../styles/form';
import AppFormErrorMessage from './AppFormErrorMessage';

export interface OptionType {
	value: any;
	label: string;
}

interface ISelectProps {
	label: string;
	fieldName: string;
	options: OptionType[];
}

const AppFormSelectField: React.FC<ISelectProps & SelectProps> = ({
	label,
	fieldName,
	options,
	className,
	...props
}) => {
	const [
		open,
		setOpen
	] = React.useState(false);
	const classes = useFormStyles();
	const { errors, touched, setFieldTouched, values, setFieldValue } = useFormikContext();
	let formErrors: any = errors;
	let formTouched: any = touched;
	let myValues = values as any;

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
				<Select
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					label={label}
					onChange={(e) => setFieldValue(fieldName, e.target.value)}
					value={myValues[fieldName]}
					onBlur={() => setFieldTouched(fieldName)}
					className={`${classes.select} ${className}`}
					{...props}
				>
					{options.map((option) => {
						return (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						);
					})}
				</Select>
				<AppFormErrorMessage errorMessage={formErrors[fieldName]} visible={formTouched[fieldName]} />
			</FormControl>
		</div>
	);
};

export default AppFormSelectField;
