import React, { useState } from 'react';
import AppDateTimePicker from 'src/components/shared/form/AppDateTimePicker';
import AppFileUpload from 'src/components/shared/form/AppFileUpload';
import AppForm from 'src/components/shared/form/AppForm';
import AppFormField from 'src/components/shared/form/AppFormField';
import { OptionType } from 'src/components/shared/form/AppFormSelectField';
import AppFormSelectMultipleField from 'src/components/shared/form/AppFormSelectMultipleField';
import AppFormSubmitButton from 'src/components/shared/form/AppFormSubmitButton';
import AppFormTextArea from 'src/components/shared/form/AppFormTextArea';
import Layout from 'src/components/shared/Layout';
import LoadingScreen from 'src/components/shared/LoadingScreen';
import { useGetAllTagsQuery, useCreateEventMutation } from 'src/generated/graphql';
import useCloudinaryUpload from 'src/hooks/useCloudinaryUpload';
import useDisplayError from 'src/hooks/useDisplayError';
import { useAddEventPageStyles } from 'src/styles/add-event';
import { errorAlert } from 'src/utils/swal/errorAlert';
import * as Yup from 'yup';

const addEventSchema = Yup.object({
	title: Yup.string().required('Please write the title of the event !'),
	description: Yup.string().required('Please write brief description about the event!'),
	event_url:
		Yup.string()
			.matches(
				/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
				'Please enter the valid url!'
			)
			.required('Please provide the URL for the home page of the event or related resource!'),
	tags:
		Yup.array().of(Yup.string()).test({
			message: 'You can select maximum of 5 tags. Attach most relevant ones !',
			test: (arr) => arr!.length <= 5
		}),
	event_date:
		Yup.string().required().test({
			message: 'Please select the valid date for the event !',
			test:
				(date: any) => {
					const today = new Date();
					const enteredDate = new Date(date);
					return enteredDate > today;
				}
		})
});

const initialValues = { tags: [], title: '', description: '', event_url: '', event_date: new Date().toISOString() };

const mapTagsToOptions = (tags: any[]) => {
	let options: OptionType[] = [];
	tags.forEach((tag) => {
		options.push({ label: tag.name, value: tag.id });
	});
	return options;
};

const AddEventPage = () => {
	const [
		loading,
		setLoading
	] = useState(false);
	const [
		imageData,
		setImageData
	] = useState<string | undefined>(undefined);

	const classes = useAddEventPageStyles();

	const { upload } = useCloudinaryUpload();

	const { data: fetchedTags, loading: tagsLoading, error: tagsError } = useGetAllTagsQuery();
	const [
		createEvent,
		{ data: createEventData, loading: createEventLoading, error: createEventError }
	] = useCreateEventMutation();

	useDisplayError([
		tagsError,
		createEventError
	]);

	const handleSubmit = async (values: any) => {
		if (!imageData) {
			errorAlert('Please select cover image for event!');
			return;
		}
		const { tags, title, description, event_url, event_date } = values;
		setLoading(true);
		const cloudinaryData = await upload(imageData);
		console.log(imageData);
		await createEvent({
			variables:
				{
					addEventInput:
						{ description, event_date, event_url, image_url: cloudinaryData.url, title, tagIds: tags }
				}
		});
		setLoading(false);
	};

	const onImageChange = (...args: any[]) => {
		const data = args[1][0];
		// react-images-upload library creates base64 which is not accepeted by cludinary
		// so convert it accordingly
		const firstColon = data.indexOf(';');
		const secondColon = data.indexOf(';base64');
		const wastedPart = data.slice(firstColon, secondColon);
		const newData = data.replace(wastedPart, '');
		setImageData(newData);
	};

	if (tagsLoading) {
		return <LoadingScreen />;
	}

	return (
		<Layout title={`Add Event`}>
			<AppForm initialValues={initialValues} validationSchema={addEventSchema} onSubmit={handleSubmit}>
				<AppFormField fieldName="title" label="Title" placeholder="Enter the title..." />
				<AppFormField fieldName="event_url" label="Event URL" placeholder="Enter the URL..." />
				<AppFormTextArea
					aria-label="description"
					minRows={3}
					placeholder="Write brief description..."
					fieldName="description"
					label="Description"
				/>
				<AppFormSelectMultipleField
					label={`Tags`}
					fieldName="tags"
					options={

							fetchedTags ? mapTagsToOptions(fetchedTags!.getAllTags) :
							[]
					}
				/>
				<AppDateTimePicker fieldName="event_date" />
				<AppFileUpload onChange={onImageChange} />
				<AppFormSubmitButton disabled={loading} color="primary" variant="contained" title="Share" />
			</AppForm>
		</Layout>
	);
};

export default AddEventPage;
