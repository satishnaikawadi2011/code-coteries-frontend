import React, { useState } from 'react';
import AppForm from 'src/components/shared/form/AppForm';
import AppFormSelectField, { OptionType } from 'src/components/shared/form/AppFormSelectField';
import AppFormSubmitButton from 'src/components/shared/form/AppFormSubmitButton';
import AppFormTextArea from 'src/components/shared/form/AppFormTextArea';
import Layout from 'src/components/shared/Layout';
import { MY_CARBON_API_BASE_URL } from 'src/constants';
import { LanguageObjType, languages } from 'src/types/language';
import { ThemeObjType, themes } from 'src/types/theme';
import * as Yup from 'yup';
import AppFormFieldWithEmoji from 'src/components/shared/form/AppFormFieldWithEmoji';
import { Paper } from '@mui/material';
import LoadingAnimation from 'src/animations/components/LoadingAnimation';
import { useCreatePostPageStyles } from 'src/styles/create-post';

const createPostSchema = Yup.object({
	code: Yup.string().required('Please write the code snippet !'),
	language: Yup.string(),
	theme: Yup.string(),
	caption: Yup.string()
});

const initialValues = { code: '', language: 'auto', theme: 'material', caption: '' };

const buildOptions = (obj: ThemeObjType | LanguageObjType): OptionType[] => {
	let myObj = obj as any;
	let options: OptionType[] = [];
	Object.keys(myObj).forEach((k: any) => {
		options.push({ label: myObj[k], value: k });
	});
	return options;
};

const CreatePostPage = () => {
	const [
		loading,
		setLoading
	] = useState(false);
	const [
		base64URI,
		setBase64URI
	] = useState('');

	const [
		mode,
		setMode
	] = useState<'preview' | 'share'>('preview');

	const classes = useCreatePostPageStyles();

	const previewImageHandler = async (values: any) => {
		const { code, language, theme } = values;
		const params: any = { code };
		const searchParams = Object.keys(params)
			.map((key: any) => {
				return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
			})
			.join('&');
		setLoading(true);
		const res = await fetch(`${MY_CARBON_API_BASE_URL}?language=${language}&theme=${theme}`, {
			method: 'POST',
			headers:
				{
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
				},
			body: searchParams
		});
		const data = await res.json();
		setBase64URI(data.encodedImage);
		setLoading(false);
	};

	const sharePostHandler = async (values: any) => {
		const { code, language, theme, caption } = values;
		const transformedCaption = caption.replaceAll('\n', '<br/>');
		// TODO: Mutation for createPost
		console.log('Share');
	};

	const handleSubmit = async (values: any) => {
		if (mode === 'preview') {
			previewImageHandler(values);
		}
		else if (mode === 'share') {
			sharePostHandler(values);
		}
	};
	return (
		<Layout title={`Create Post`}>
			<AppForm initialValues={initialValues} validationSchema={createPostSchema} onSubmit={handleSubmit}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<AppFormSelectField
						fieldName="language"
						label={`Programming Language`}
						options={buildOptions(languages)}
					/>
					<AppFormSelectField fieldName="theme" label={`Theme`} options={buildOptions(themes)} />
				</div>
				<AppFormTextArea
					aria-label="code snippet"
					minRows={3}
					placeholder="Write or paste your code snippet here with proper formating"
					fieldName="code"
					label="Code Snippet"
				/>
				<AppFormSubmitButton
					onClick={() => setMode('preview')}
					disabled={loading}
					color="primary"
					variant="contained"
					title="preview"
				/>
				{(loading || base64URI) && (
					<Paper variant="outlined" className={classes.imageContainer}>
						{
							loading ? <LoadingAnimation /> :
							<img
								className={classes.image}
								src={`data:image/png;base64, ${base64URI}`}
								alt="Code Snippet Preview"
							/>}
					</Paper>
				)}
				<AppFormFieldWithEmoji
					textarea
					minRows={3}
					fieldName="caption"
					label="Caption"
					placeholder="Write your caption here ..."
				/>
				<AppFormSubmitButton
					onClick={() => setMode('share')}
					disabled={loading}
					color="primary"
					variant="contained"
					title="share"
				/>
			</AppForm>
		</Layout>
	);
};

export default CreatePostPage;
