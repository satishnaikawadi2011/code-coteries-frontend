import React from 'react';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import AppErrorMessage from './AppFormErrorMessage';
import { useFormikContext } from 'formik';

interface Props{
	fieldName: string;
}

const AppDateTimePicker:React.FC<Props> = ({fieldName}) => {
	const { errors, touched, setFieldTouched, values, setFieldValue } = useFormikContext();
	let formErrors: any = errors;
	let formTouched: any = touched;
	let myValues = values as any;

	const handleChange = (date: Date | null, keyboardInputValue?: string | undefined) => {
		setFieldValue(fieldName, date?.toISOString());
	};
	return (
		<div>
			<DateTimePicker
				label="Date and Time Of Event"
				value={myValues[fieldName]}
				onChange={handleChange}
				renderInput={(params) => <TextField {...params} />}
			/>
			<AppErrorMessage errorMessage={formErrors[fieldName]} visible={formTouched[fieldName]} />
		</div>
	);
};

export default AppDateTimePicker;
