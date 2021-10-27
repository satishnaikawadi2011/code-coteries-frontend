import React from 'react';
import AppForm from 'src/components/shared/form/AppForm';
import AppFormSelectField, { OptionType } from 'src/components/shared/form/AppFormSelectField';
import AppFormSubmitButton from 'src/components/shared/form/AppFormSubmitButton';
import AppFormTextArea from 'src/components/shared/form/AppFormTextArea';
import Layout from 'src/components/shared/Layout';
import { MY_CARBON_API_BASE_URL } from 'src/constants';
import { LanguageObjType, languages } from 'src/types/language';
import { ThemeObjType, themes } from 'src/types/theme';
import * as Yup from 'yup';

const createPostSchema = Yup.object({
	code: Yup.string().required('Please write the code snippet !'),
	language: Yup.string(),
	theme: Yup.string()
});

const initialValues = { code: '', language: 'auto', theme: 'material' };

const buildOptions = (obj: ThemeObjType | LanguageObjType): OptionType[] => {
	let myObj = obj as any;
	let options: OptionType[] = [];
	Object.keys(myObj).forEach((k: any) => {
		options.push({ label: myObj[k], value: k });
	});
	return options;
};

const CreatePostPage = () => {
	const handleSubmit = async (values: any) => {
		const { code, language, theme } = values;
		const params: any = { code };
		const searchParams = Object.keys(params)
			.map((key: any) => {
				return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
			})
			.join('&');
		const res = await fetch(`${MY_CARBON_API_BASE_URL}?language=${language}&theme=${theme}`, {
			method: 'POST',
			headers:
				{
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
				},
			body: searchParams
		});
		const data = await res.json();
		console.log(data.encodedImage);
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
				<AppFormSubmitButton color="primary" variant="contained" title="preview" />
			</AppForm>
		</Layout>
	);
};

export default CreatePostPage;
