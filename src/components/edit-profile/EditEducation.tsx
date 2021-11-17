import { Divider, Slide, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEditProfilePageStyles } from 'src/styles/edit-profile';
import AppFormSubmitButton from '../shared/form/AppFormSubmitButton';
import SectionItem from './SectionItem';
import * as Yup from 'yup';
import useDisplayError from 'src/hooks/useDisplayError';
import { Education, useAddEducationMutation } from 'src/generated/graphql';
import AppFormField from '../shared/form/AppFormField';
import AppDateTimePicker from '../shared/form/AppDateTimePicker';
import AppSwitch from '../shared/form/AppSwitch';
import { Formik } from 'formik';
import { errorAlert } from 'src/utils/swal/errorAlert';
import EducationItemsAccordion from './EducationItemsAccordion';
import { addEducationItem } from 'src/utils/apollo-cache/me.query';

interface FormValues {
	field: string;
	school: string;
	degree: string;
	from: string;
	to: string;
	current: boolean;
	description: string;
}

const validationSchema = Yup.object({
	field: Yup.string().required(),
	school: Yup.string().required(),
	degree: Yup.string().required(),
	from:
		Yup.string().required().test({
			message: 'Please select the valid start date of education info!',
			test:
				(date: any) => {
					const today = new Date();
					const enteredDate = new Date(date);
					return enteredDate <= today;
				}
		}),
	to:
		Yup.string().nullable(true).test({
			message: 'Please select the valid end date of education info!',
			test:
				(date: any) => {
					const today = new Date();
					const enteredDate = new Date(date);
					return enteredDate <= today;
				}
		}),
	current: Yup.boolean(),
	description: Yup.string().required()
});

const initialValues: FormValues = {
	current: true,
	degree: '',
	description: '',
	field: '',
	school: '',
	from: new Date().toISOString(),
	to: null as any
};

interface EditEducationProps {
	educationItems?: Education[];
}

const EditEducation: React.FC<EditEducationProps> = ({ educationItems = [] }) => {
	const classes = useEditProfilePageStyles();
	const [
		addEducation,
		{ loading, error }
	] = useAddEducationMutation();
	const [
		open,
		setOpen
	] = useState(false);

	useDisplayError([
		error
	]);

	async function handleSubmit(values: FormValues, actions: any) {
		const { current, degree, description, field, from, school, to } = values;
		if (!current && !to) {
			errorAlert('Please mention the end date of education info!');
			return;
		}
		await addEducation({
			variables: { addEducationInput: { degree, description, field, from, school, current, to } },
			update: addEducationItem
		});
		setOpen(true);
		actions.resetForm();
	}

	return (
		<section className={classes.container}>
			<Typography variant="h5" style={{ textAlign: 'center', marginBottom: 20 }}>
				Add Education Info
			</Typography>
			<Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
				{({ values }) => {
					return (
						<div className={classes.form}>
							<SectionItem name="school" text="School" />
							<SectionItem name="degree" text="Degree" />
							<SectionItem name="field" text="Field" />
							<div className={classes.sectionItem}>
								<aside>
									<Typography className={classes.typography}>Description</Typography>
								</aside>
								<div style={{ width: '100%' }}>
									<AppFormField
										fieldName="description"
										variant="outlined"
										multiline
										fullWidth
										rows={4}
									/>
								</div>
							</div>
							<div className={classes.sectionItem}>
								<aside>
									<Typography className={classes.typography}>Start Date</Typography>
								</aside>
								<div>
									<AppDateTimePicker label="Start Date" dateOnly fieldName="from" />
								</div>
							</div>
							<div className={classes.sectionItem}>
								<aside>
									<Typography className={classes.typography}>Currently Persuing</Typography>
								</aside>
								<div>
									<AppSwitch fieldName="current" />
								</div>
							</div>
							{!values.current && (
								<div className={classes.sectionItem}>
									<aside>
										<Typography className={classes.typography}>End Date</Typography>
									</aside>
									<div>
										<AppDateTimePicker label="End Date" dateOnly fieldName="to" />
									</div>
								</div>
							)}
							<div className={classes.sectionItem}>
								<div />

								<AppFormSubmitButton
									type="submit"
									variant="contained"
									color="primary"
									className={classes.justifySelfStart}
									title="Add"
									disabled={loading}
								/>
							</div>
						</div>
					);
				}}
			</Formik>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				TransitionComponent={Slide}
				message={<span>Social Links updated</span>}
				onClose={() => setOpen(false)}
			/>
			<Divider />
			<EducationItemsAccordion educationItems={educationItems} />
		</section>
	);
};

export default EditEducation;
