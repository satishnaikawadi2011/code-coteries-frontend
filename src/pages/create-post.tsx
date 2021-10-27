import React, { useState } from 'react';
import AppForm from 'src/components/shared/form/AppForm';
import AppFormSelectField from 'src/components/shared/form/AppFormSelectField';
import AppFormSubmitButton from 'src/components/shared/form/AppFormSubmitButton';
import AppFormTextArea from 'src/components/shared/form/AppFormTextArea';
import Layout from 'src/components/shared/Layout';
import * as Yup from 'yup';

const createPostSchema = Yup.object({
	code: Yup.string().required('Please write the code snippet !'),
	language: Yup.string(),
	theme: Yup.string()
});

const initialValues = { code: '', language: 'auto', theme: 'mui' };

const CreatePostPage = () => {
	const [
		code,
		setCode
	] = useState('');
	const handleSubmit = (values: any) => {
		console.log(values);
	};
	return (
		<Layout title={`Create Post`}>
			<AppForm initialValues={initialValues} validationSchema={createPostSchema} onSubmit={handleSubmit}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<AppFormSelectField
						fieldName="language"
						label={`Programming Language`}
						options={[
							{ label: 'C', value: 'c' },
							{ label: 'Java', value: 'java' },
							{ label: 'Auto', value: 'auto' }
						]}
					/>
					<AppFormSelectField
						fieldName="theme"
						label={`Theme`}
						options={[
							{ label: 'Material', value: 'mui' }
						]}
					/>
				</div>
				<AppFormTextArea
					aria-label="code snippet"
					minRows={3}
					placeholder="Write or paste your code snippet here with proper formating"
					fieldName="code"
					label="Code Snippet"
				/>
				<AppFormSubmitButton color="primary" variant="contained" title="preview" />
			</AppForm>
		</Layout>
	);
};

export default CreatePostPage;
