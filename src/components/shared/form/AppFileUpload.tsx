import React from 'react';
import ImageUploader from 'react-images-upload';

interface Props {
	onChange: ((files: File[], pictures: string[]) => void);
}

const AppFileUpload: React.FC<Props> = ({ onChange }) => {
	const onDrop = (pictureFiles: File[], pictures: string[]) => {
		// console.log(pictureFiles);
		onChange(pictureFiles, pictures);
	};

	return (
		<ImageUploader
			withIcon={true}
			withPreview={true}
			buttonText="Choose Image"
			onChange={onDrop}
			imgExtension={[
				'.jpg',
				'.gif',
				'.png',
				'.gif'
			]}
			maxFileSize={5242880}
			singleImage
		/>
	);
};

export default AppFileUpload;
