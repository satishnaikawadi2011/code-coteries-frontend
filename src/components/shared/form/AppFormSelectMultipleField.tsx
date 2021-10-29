import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectProps } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useFormStyles } from 'src/styles/form';
import { useFormikContext } from 'formik';
import AppFormErrorMessage from './AppFormErrorMessage';

export interface OptionType {
	value: any;
	label: string;
}

interface ISelectMultipleProps {
	label: string;
	fieldName: string;
	options: OptionType[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps:
		{
			style:
				{
					maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
					width: 250
				}
		}
};

function getStyles(currentOption: any, allOptions: any, theme: any) {
	return {
		fontWeight:

				allOptions.indexOf(currentOption) === -1 ? theme.typography.fontWeightRegular :
				theme.typography.fontWeightMedium
	};
}

const getLabel = (value: any, options: OptionType[]) => {
	const option = options.find((o) => o.value === value);
	return option!.label;
};

const AppFormSelectMultipleField: React.FC<ISelectMultipleProps & SelectProps> = ({
	fieldName,
	label,
	options,
	className,
	...props
}) => {
	const theme = useTheme();

	const classes = useFormStyles();
	const { errors, touched, setFieldTouched, values, setFieldValue } = useFormikContext();
	let formErrors: any = errors;
	let formTouched: any = touched;
	let myValues = values as any;

	return (
		<div style={{ marginTop: 40, marginBottom: 40 }}>
			<FormControl sx={{ m: 1, width: 500 }}>
				<InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
				<Select
					labelId="demo-multiple-chip-label"
					id="demo-multiple-chip"
					multiple
					value={myValues[fieldName]}
					onChange={(e) => setFieldValue(fieldName, e.target.value)}
					input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
					renderValue={(selected) => (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
							{selected.map((value: any) => <Chip key={value} label={getLabel(value, options)} />)}
						</Box>
					)}
					onBlur={() => setFieldTouched(fieldName)}
					className={`${className}`}
					MenuProps={MenuProps}
				>
					{options.map((o) => (
						<MenuItem key={o.value} value={o.value} style={getStyles(o.value, myValues[fieldName], theme)}>
							{o.label}
						</MenuItem>
					))}
				</Select>
				<AppFormErrorMessage errorMessage={formErrors[fieldName]} visible={formTouched[fieldName]} />
			</FormControl>
		</div>
	);
};

export default AppFormSelectMultipleField;
