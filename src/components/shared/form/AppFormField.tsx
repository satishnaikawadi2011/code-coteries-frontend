import { useFormikContext } from 'formik';
import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useFormStyles } from '../../../styles/form';
import AppErrorMessage from './AppFormErrorMessage';

interface FormFieldProps {
	fieldName: string;
}

const AppFormField: React.FC<FormFieldProps & TextFieldProps> = ({ className, fieldName, type, ...props }) => {
	const { errors, touched, setFieldTouched, values, setFieldValue } = useFormikContext();
	let formErrors: any = errors;
	let formTouched: any = touched;
	let myValues = values as any;
	const classes = useFormStyles();
	return (
		<div className={classes.fieldContainer}>
			<TextField
				onChange={(e: any) => {
					if (type === 'file') {
						setFieldValue(fieldName, e.target.files[0]);
					}
					else {
						setFieldValue(fieldName, e.target.value);
					}
				}}
				value={myValues[fieldName]}
				onBlur={() => setFieldTouched(fieldName)}
				className={`${classes.field} ${className}`}
				type={type}
				{...props}
			/>
			<AppErrorMessage errorMessage={formErrors[fieldName]} visible={formTouched[fieldName]} />
		</div>
	);
};

export default AppFormField;
