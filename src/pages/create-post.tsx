import React, { useState } from 'react';
import AppForm from 'src/components/shared/form/AppForm';
import AppFormSubmitButton from 'src/components/shared/form/AppFormSubmitButton';
import AppFormTextArea from 'src/components/shared/form/AppFormTextArea';
import Layout from 'src/components/shared/Layout';
import * as Yup from 'yup';

const createPostSchema = Yup.object({
	code: Yup.string().required('Please write the code snippet !')
});

const initialValues = { code: '' };

const CreatePostPage = () => {
	const [
		code,
		setCode
	] = useState('');
	const handlePreview = () => {
		console.log(code);
	};
	return (
		<Layout title={`Create Post`}>
			<AppForm
				initialValues={initialValues}
				validationSchema={createPostSchema}
				onSubmit={(values: any) => {
					console.log(values.code);
				}}
			>
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
