import { useFormikContext } from 'formik';
import React, { CSSProperties, useState } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useFormStyles } from '../../../styles/form';
import AppErrorMessage from './AppFormErrorMessage';
import { InputAdornment, InputLabel, TextareaAutosize } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import Picker, { IEmojiData } from 'emoji-picker-react';

interface FormFieldProps {
	fieldName: string;
	textarea?: boolean;
}

const AppFormFieldWithEmoji: React.FC<FormFieldProps & TextFieldProps> = ({
	className,
	fieldName,
	textarea,
	label,
	...props
}) => {
	const [
		isEmojiPickerVisisble,
		setIsEmojiPickerVisisble
	] = useState(false);

	const { errors, touched, setFieldTouched, values, setFieldValue } = useFormikContext();
	let formErrors: any = errors;
	let formTouched: any = touched;
	let myValues = values as any;
	const classes = useFormStyles();

	const toggleEmojiPicker = () => {
		setIsEmojiPickerVisisble(!isEmojiPickerVisisble);
	};

	const onEmojiClick = (event: React.MouseEvent<Element, MouseEvent>, data: IEmojiData) => {
		// console.log(event, data);
		setFieldValue(fieldName, myValues[fieldName] + data.emoji);
	};

	let finalCode = (
		<div className={classes.fieldContainer}>
			<TextField
				id="input-with-emoji"
				label={label}
				onChange={(e) => setFieldValue(fieldName, e.target.value)}
				value={myValues[fieldName]}
				onBlur={() => setFieldTouched(fieldName)}
				InputProps={{
					startAdornment: <StartAdornment onClick={toggleEmojiPicker} />
				}}
				className={`${classes.field} ${className}`}
				{...props}
			/>
			<AppErrorMessage errorMessage={formErrors[fieldName]} visible={formTouched[fieldName]} />
			{isEmojiPickerVisisble && <Picker onEmojiClick={onEmojiClick} />}
		</div>
	);

	if (textarea) {
		finalCode = (
			<div className={classes.fieldContainer}>
				<InputLabel className={classes.label}>{label}</InputLabel>
				<TextareaAutosize
					onChange={(e) => setFieldValue(fieldName, e.target.value)}
					value={myValues[fieldName]}
					onBlur={() => setFieldTouched(fieldName)}
					className={`${classes.textarea} ${className}`}
					{...props as any}
				/>
				<StartAdornment style={{ margin: 10 }} onClick={toggleEmojiPicker} />
				<AppErrorMessage errorMessage={formErrors[fieldName]} visible={formTouched[fieldName]} />
				{isEmojiPickerVisisble && <Picker onEmojiClick={onEmojiClick} />}
			</div>
		);
	}

	return finalCode;
};

interface StartAdornmentProps {
	onClick?: React.MouseEventHandler<SVGSVGElement>;
	style?: CSSProperties;
}

const StartAdornment: React.FC<StartAdornmentProps> = ({ onClick, style }) => {
	return (
		<InputAdornment position="start" style={style}>
			<MoodIcon onClick={onClick} style={{ cursor: 'pointer' }} />
		</InputAdornment>
	);
};

export default AppFormFieldWithEmoji;
