import { errorAlert } from './../utils/swal/errorAlert';
import { useState } from 'react';
import { MY_CARBON_API_BASE_URL } from 'src/constants';

const useCarbonAPI = () => {
	const [
		data,
		setData
	] = useState<any>();

	const generateImage = async (code: string, theme: string, language: string) => {
		try {
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
				// mode: 'no-cors'
			});
			const resData = await res.json();
			setData(resData);
			return resData;
		} catch (error) {
			console.log(error);
			errorAlert('Image generation failed , try again !');
		}
	};

	return { generateImage, data };
};

export default useCarbonAPI;
