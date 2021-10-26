import Button, { ButtonProps } from '@mui/material/Button';
import { useFormikContext } from 'formik';
import React from 'react';

interface SubmitButtonProps {
	title: string;
	loading?: boolean;
}

const AppFormSubmitButton: React.FC<SubmitButtonProps & ButtonProps> = ({ title, loading, disabled, ...props }) => {
	const { handleSubmit } = useFormikContext();
	return (
		<Button disabled={disabled || loading} onClick={handleSubmit as any} {...props}>
			{title}
		</Button>
	);
};

export default AppFormSubmitButton;
