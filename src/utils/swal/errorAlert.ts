import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const errorAlert = (error: string) => {
	MySwal.fire({
		icon: 'error',
		title: 'Oops...',
		text: error
	});
};
