import { Slide, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEditProfilePageStyles } from 'src/styles/edit-profile';
import AppForm from '../shared/form/AppForm';
import AppFormSubmitButton from '../shared/form/AppFormSubmitButton';
import SectionItem from './SectionItem';
import * as Yup from 'yup';
import useDisplayError from 'src/hooks/useDisplayError';
import { Social, useEditSocialMutation } from 'src/generated/graphql';

const validationSchema = Yup.object({
	youtube: Yup.string(),
	twitter: Yup.string(),
	instagram: Yup.string(),
	facebook: Yup.string(),
	linkedin: Yup.string()
});

interface EditSocialLinksProps {
	social?: Social | null;
}

const EditSocialLinks: React.FC<EditSocialLinksProps> = ({social}) => {
    const classes = useEditProfilePageStyles();

	
	const socialData = social;
	const [editSocialLinks, {data,error,loading}] = useEditSocialMutation();

    const initialValues = {
        youtube: socialData?.youtube   ? socialData?.youtube :
                '',
	twitter: socialData?.twitter   ? socialData?.twitter :
                '',
	instagram: socialData?.instagram  ? socialData?.instagram :
                '',
	facebook: socialData?.facebook  ? socialData?.facebook :
                '',
	linkedin: socialData?.linkedin  ? socialData?.linkedin :
                ''
    };
    
    const [
		open,
		setOpen
	] = useState(false);

	useDisplayError([error])

     async function handleSubmit(values:any) {
		 const { youtube, twitter, instagram, facebook, linkedin } = values;
		 await editSocialLinks({
			 variables: {
				 editSocialInput: {
					 youtube: youtube === '' ? null : youtube,
					 twitter: twitter === '' ? null : twitter,
					 instagram: instagram === '' ? null : instagram,
					 facebook:facebook===''?null:facebook,
					 linkedin:linkedin===''?null:linkedin,
					 
			 }
		 }})
		  setOpen(true);
	  }

    return (<section className={classes.container}>
        <Typography variant='h5' style={{textAlign:"center",marginBottom:20}}>
            Social Links
        </Typography>
			<AppForm onSubmit={handleSubmit} className={classes.form} initialValues={initialValues} validationSchema={validationSchema}>
				<SectionItem name="youtube" text="Youtube" />
				<SectionItem name="twitter" text="Twitter" />
				<SectionItem name="instagram" text="Instagram" />
				<SectionItem name="linkedin" text="LinkedIn" />
				<SectionItem name="facebook" text="Facebook" />
				<div className={classes.sectionItem}>
					<div />

					<AppFormSubmitButton
						type="submit"
						variant="contained"
						color="primary"
						className={classes.justifySelfStart}
						title="Submit"
						disabled={loading}
					/>
				</div>
			</AppForm>
			<Snackbar
	        open={open}
	        autoHideDuration={6000}
	        TransitionComponent={Slide}
	        message={<span>Social Links updated</span>}
	        onClose={() => setOpen(false)}
	      />
		</section>
	);
};

export default EditSocialLinks;
