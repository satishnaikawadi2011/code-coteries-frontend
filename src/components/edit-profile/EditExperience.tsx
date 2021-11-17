import { Divider, Slide, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEditProfilePageStyles } from 'src/styles/edit-profile';
import AppFormSubmitButton from '../shared/form/AppFormSubmitButton';
import SectionItem from './SectionItem';
import * as Yup from 'yup';
import useDisplayError from 'src/hooks/useDisplayError';
import { Experience, useAddExperienceMutation } from 'src/generated/graphql';
import AppFormField from '../shared/form/AppFormField';
import AppDateTimePicker from '../shared/form/AppDateTimePicker';
import AppSwitch from '../shared/form/AppSwitch';
import { Formik } from 'formik';
import { errorAlert } from 'src/utils/swal/errorAlert';
import { addExperienceItem } from 'src/utils/apollo-cache/me.query';
import ExperienceItemsAccordion from './ExperienceAccordion';

interface FormValues {
	title: string;
	company: string;
	location: string;
	from: string;
	to: string;
	current: boolean;
	description: string;
}

const validationSchema = Yup.object({
	title: Yup.string().required(),
	company: Yup.string().required(),
	location: Yup.string().required(),
	from:
		Yup.string().required().test({
			message: 'Please select the valid start date of your time at organization!',
			test:
				(date: any) => {
					const today = new Date();
					const enteredDate = new Date(date);
					return enteredDate <= today;
				}
		}),
	to:
		Yup.string().nullable(true).test({
			message: 'Please select the valid end date of your time at organization!',
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
	title: '',
	description: '',
	location: '',
	company: '',
	from: new Date().toISOString(),
	to: null as any
};

interface EditExperienceProps {
	experienceItems?: Experience[];
}

const EditExperience: React.FC<EditExperienceProps> = ({ experienceItems = [] }) => {
	const classes = useEditProfilePageStyles();
	const [
		addExperience,
		{ loading, error }
	] = useAddExperienceMutation();
	const [
		open,
		setOpen
	] = useState(false);

	useDisplayError([
		error
	]);

	async function handleSubmit(values: FormValues, actions: any) {
		const { current, description, from, to, company, location, title } = values;
		if (!current && !to) {
			errorAlert('Please mention the end date of your time at organization!');
			return;
		}
		await addExperience({
			variables: { addExperienceInput: { title, description, company, from, location, current, to } },
			update: addExperienceItem
		});
		setOpen(true);
		actions.resetForm();
	}

	return (
		<section className={classes.container}>
			<Typography variant="h5" style={{ textAlign: 'center', marginBottom: 20 }}>
				Add Work Experience Info
			</Typography>
			<Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
				{({ values }) => {
					return (
						<div className={classes.form}>
							<SectionItem name="company" text="Organization" />
							<SectionItem name="title" text="Working Role" />
							<SectionItem name="location" text="Location" />
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
				message={<span>Experience Info added successfully !</span>}
				onClose={() => setOpen(false)}
			/>
			<Divider />
			<ExperienceItemsAccordion experienceItems={experienceItems} />
		</section>
	);
};

export default EditExperience;
