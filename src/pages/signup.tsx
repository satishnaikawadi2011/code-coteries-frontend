import { Button, Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AppForm from 'src/components/shared/form/AppForm';
import AppErrorMessage from 'src/components/shared/form/AppFormErrorMessage';
import AppFormField from 'src/components/shared/form/AppFormField';
import AppFormSubmitButton from 'src/components/shared/form/AppFormSubmitButton';
import Logo from 'src/components/shared/Logo';
import SEO from 'src/components/shared/Seo';
import { useRegisterUserMutation } from 'src/generated/graphql';
import { useSignupPageStyles } from 'src/styles/signup';
import * as Yup from 'yup';

const initialValues = {
	username: '',
	password: '',
	fullName: '',
	email: ''
};

const authSchema = Yup.object({
	username: Yup.string().required('Username is required').min(3),
	password: Yup.string().required('Password is required').min(6).max(12),
	fullName: Yup.string().required('Full name of the user is required.'),
	email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
});

const SignupPage = () => {
	const classes = useSignupPageStyles();

	const [
		registerUser,
		{ loading, data, error }
	] = useRegisterUserMutation();

	console.log('Error => ', error?.message, 'Data => ', data);

	const submitHandler = async (values: any,actions:any) => {
		const { username, password, fullName, email } = values;
		await registerUser({ variables: { createUserInput: { email, fullName, password, username } } });
		actions.resetForm();
	};

	return (
		<React.Fragment>
			<SEO title="Sign Up" />
			<section className={classes.section}>
				<article>
					<Card className={classes.card}>
						<div className={classes.cardHeader}>
							<Logo centre={true} size={30} />
						</div>
						<Typography style={{ marginBottom: 20 }} className={classes.cardHeaderSubHeader}>
							Sign up to see interesting code snippets and exciting events from your friends and
							colleagues.
						</Typography>
						<AppForm initialValues={initialValues} validationSchema={authSchema} onSubmit={submitHandler}>
							<AppFormField
								className={classes.textField}
								fieldName="email"
								label="Email"
								placeholder="Enter your email ..."
								variant="outlined"
								fullWidth
								autoComplete="email"
							/>
							<AppFormField
								className={classes.textField}
								fieldName="fullName"
								label="Full Name"
								placeholder="Enter your name ..."
								variant="outlined"
								fullWidth
								autoComplete="name"
							/>
							<AppFormField
								className={classes.textField}
								fieldName="username"
								label="Username"
								placeholder="Enter your username ..."
								variant="outlined"
								fullWidth
								autoComplete="username"
							/>
							<AppFormField
								className={classes.textField}
								fieldName="password"
								label="Password"
								placeholder="Enter your password ..."
								variant="outlined"
								fullWidth
								type="password"
								autoComplete="current-password"
							/>
							<AppErrorMessage visible={!!error} errorMessage={error?.message as any} />
							{
								// loading ? <AppLoader height={100} width={100} /> :
								<AppFormSubmitButton
									className={classes.button}
									fullWidth
									variant="contained"
									color="primary"
									disabled={loading}
									title="Sign Up"
								/>
							}
						</AppForm>
					</Card>
					<Card className={classes.loginCard}>
						<Typography align="right" variant="body2">
							Already have an account?
						</Typography>
						<Link to="/accounts/login">
							<Button color="primary">Login</Button>
						</Link>
					</Card>
				</article>
			</section>
		</React.Fragment>
	);
};

export default SignupPage;
