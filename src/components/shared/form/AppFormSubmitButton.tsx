import Button, { ButtonProps } from '@mui/material/Button';
import { useFormikContext } from 'formik';
import React from 'react';

interface SubmitButtonProps {
	title: string;
	loading?: boolean;
}

const AppFormSubmitButton: React.FC<SubmitButtonProps & ButtonProps> = ({
	title,
	loading,
	disabled,
	onClick,
	...props
}) => {
	const { handleSubmit } = useFormikContext();
	return (
		<Button
			disabled={disabled || loading}
			onClick={(e) => {
				if (onClick) {
					onClick(e);
				}
				handleSubmit();
			}}
			{...props}
		>
			{title}
		</Button>
	);
};

export default AppFormSubmitButton;
