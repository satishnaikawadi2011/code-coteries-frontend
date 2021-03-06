import { errorAlert } from './../utils/swal/errorAlert';
import {
	CLOUDINARY_UPLOAD_PRESET,
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_IMAGE_UPLOAD_BASE_URL
} from './../constants/index';
import { useState } from 'react';

const useCloudinaryUpload = () => {
	const [
		data,
		setData
	] = useState<any>();

	const upload = async (image: any, imageDataType: 'file' | 'base64' = 'base64') => {
		try {
			let res;
			if (imageDataType === 'base64') {
				const body = {
					cloud_name: CLOUDINARY_CLOUD_NAME,
					upload_preset: CLOUDINARY_UPLOAD_PRESET,
					file: encodeURI(image)
				};
				res = await fetch(CLOUDINARY_IMAGE_UPLOAD_BASE_URL, {
					method: 'post',
					headers:
						{
							'Content-Type': 'application/json'
						},
					body: JSON.stringify(body)
				});
			}
			else {
				const data = new FormData();
				data.append('file', image);
				data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
				data.append('cloud_name', CLOUDINARY_CLOUD_NAME);
				res = await fetch(CLOUDINARY_IMAGE_UPLOAD_BASE_URL, {
					method: 'POST',
					// headers:
					// 	{
					// 		'Content-Type': 'multipart/formdata'
					// 	},
					body: data
				});
			}

			const imageData = await res.json();
			if (Object.keys(imageData).includes('error')) {
				console.log(imageData.error);
				errorAlert('Image upload failed , try again !');
				return;
			}
			setData(imageData);
			return imageData;
		} catch (error) {
			errorAlert('Image upload failed , try again !');
		}
	};

	return { upload, data };
};

export default useCloudinaryUpload;
