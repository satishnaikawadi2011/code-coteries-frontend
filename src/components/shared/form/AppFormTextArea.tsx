import React from 'react';
import TextareaAutosize, { TextareaAutosizeProps } from '@mui/material/TextareaAutosize';
import { InputLabel } from '@mui/material';
import { useFormikContext } from 'formik';
import AppErrorMessage from './AppFormErrorMessage';
import { useFormStyles } from 'src/styles/form';

interface AppFormTextAreaProps {
	label: string;
	fieldName: string;
}

const AppFormTextArea: React.FC<AppFormTextAreaProps & TextareaAutosizeProps> = ({
	label,
	fieldName,
	className,
	...props
}) => {
	const { errors, touched, setFieldTouched, values, setFieldValue } = useFormikContext();
	let formErrors: any = errors;
	let formTouched: any = touched;
	let myValues = values as any;

	const classes = useFormStyles();

	return (
		<div className={classes.fieldContainer}>
			<InputLabel className={classes.label}>{label}</InputLabel>
			<TextareaAutosize
				onChange={(e) => setFieldValue(fieldName, e.target.value)}
				value={myValues[fieldName]}
				onBlur={() => setFieldTouched(fieldName)}
				className={`${classes.textarea} ${className}`}
				{...props}
			/>
			<AppErrorMessage errorMessage={formErrors[fieldName]} visible={formTouched[fieldName]} />
		</div>
	);
};

export default AppFormTextArea;
