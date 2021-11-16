import React from 'react';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import AppErrorMessage from './AppFormErrorMessage';
import { useFormikContext } from 'formik';
import { DesktopDatePicker } from '@mui/lab';

interface Props{
	fieldName: string;
	label?: string;
	dateOnly?: boolean;
}

const AppDateTimePicker:React.FC<Props> = ({fieldName,label='Date and Time Of Event',dateOnly=false,...props}) => {
	const { errors, touched, setFieldTouched, values, setFieldValue } = useFormikContext();
	let formErrors: any = errors;
	let formTouched: any = touched;
	let myValues = values as any;

	const handleChange = (date: Date | null, keyboardInputValue?: string | undefined) => {
		setFieldValue(fieldName, date?.toISOString());
	};

	let component;

	if (dateOnly) {
		component = <DesktopDatePicker
          label={label}
          inputFormat="dd/MM/yyyy"
          value={myValues[fieldName]}
		  onChange={handleChange}
			renderInput={(params) => <TextField {...params} />}
			{...props}
        />
	} else {
		component = <DateTimePicker
				label={label}
				value={myValues[fieldName]}
				onChange={handleChange}
				renderInput={(params) => <TextField {...params} />}
				{...props}
			/>
	}

	return (
		<div>
			{component}
			<AppErrorMessage errorMessage={formErrors[fieldName]} visible={formTouched[fieldName]} />
		</div>
	);
};

export default AppDateTimePicker;
