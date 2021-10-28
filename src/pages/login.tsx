import { Button, Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AppForm from 'src/components/shared/form/AppForm';
import AppErrorMessage from 'src/components/shared/form/AppFormErrorMessage';
import AppFormField from 'src/components/shared/form/AppFormField';
import AppFormSubmitButton from 'src/components/shared/form/AppFormSubmitButton';
import Logo from 'src/components/shared/Logo';
import SEO from 'src/components/shared/Seo';
import { useSigninUserMutation } from 'src/generated/graphql';
import { useLoginPageStyles } from 'src/styles/login';
import * as Yup from 'yup';

const initialValues = {
	username: '',
	password: ''
};

const authSchema = Yup.object({
	username: Yup.string().required('Username is required').min(3),
	password: Yup.string().required('Password is required').min(6).max(12)
});

const LoginPage = () => {
	const classes = useLoginPageStyles();

	const [signinUser, { loading, data, error }] = useSigninUserMutation()
	
	console.log(data);

	const submitHandler = async(values: any,actions:any) => {
		const { username, password } = values;
		await signinUser({ variables: { signinUserInput: { password, username } } });
		actions.resetForm();
	};

	return (
		<React.Fragment>
			<SEO title="Loign" />
			<section className={classes.section}>
				<article>
					<Card className={classes.card}>
						<div className={classes.cardHeader}>
							<Logo centre={true} size={30} />
						</div>
						<AppForm initialValues={initialValues} validationSchema={authSchema} onSubmit={submitHandler}>
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
									title="login"
								/>
							}
						</AppForm>
					</Card>
					<Card className={classes.signUpCard}>
						<Typography align="right" variant="body2">
							Don't have an account?
						</Typography>
						<Link to="/accounts/signup">
							<Button color="primary">Sign Up</Button>
						</Link>
					</Card>
				</article>
			</section>
		</React.Fragment>
	);
};

export default LoginPage;
