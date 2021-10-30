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
import AppFormSelectMultipleField from 'src/components/shared/form/AppFormSelectMultipleField';
import { Tag, useGetAllTagsQuery } from 'src/generated/graphql';
import LoadingScreen from 'src/components/shared/LoadingScreen';
import useDisplayError from 'src/hooks/useDisplayError';
import useCloudinaryUpload from 'src/hooks/useCloudinaryUpload';

const createPostSchema = Yup.object({
	code: Yup.string().required('Please write the code snippet !'),
	language: Yup.string(),
	theme: Yup.string(),
	caption: Yup.string(),
	tags:
		Yup.array().of(Yup.string()).test({
			message: 'You can select maximum of 5 tags. Attach most relevant ones !',
			test: (arr) => arr!.length <= 5
		})
});

const initialValues = { code: '', language: 'auto', theme: 'material', caption: '', tags: [] };

const buildOptions = (obj: ThemeObjType | LanguageObjType): OptionType[] => {
	let myObj = obj as any;
	let options: OptionType[] = [];
	Object.keys(myObj).forEach((k: any) => {
		options.push({ label: myObj[k], value: k });
	});
	return options;
};

const mapTagsToOptions = (tags: any[]) => {
	let options: OptionType[] = [];
	tags.forEach((tag) => {
		options.push({ label: tag.name, value: tag.id });
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

	const { data: fetchedTags, loading: tagsLoading, error: tagsError } = useGetAllTagsQuery();

	useDisplayError([
		tagsError
	]);

	const { data, upload } = useCloudinaryUpload();
	console.log(data?.url);
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
		await upload(`data:image/png;base64,${data.encodedImage}`);
		setLoading(false);
	};

	const sharePostHandler = async (values: any) => {
		const { code, language, theme, caption } = values;
		const transformedCaption = caption.replaceAll('\n', '<br/>');
		// TODO: Mutation for createPost
		console.log('Share', values);
	};

	const handleSubmit = async (values: any) => {
		if (mode === 'preview') {
			previewImageHandler(values);
		}
		else if (mode === 'share') {
			sharePostHandler(values);
		}
	};

	if (tagsLoading) {
		return <LoadingScreen />;
	}

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
				<AppFormSelectMultipleField
					label={`Tags`}
					fieldName="tags"
					options={

							fetchedTags ? mapTagsToOptions(fetchedTags!.getAllTags) :
							[]
					}
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
