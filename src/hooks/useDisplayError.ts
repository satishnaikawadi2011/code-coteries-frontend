import { ApolloError } from '@apollo/client';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const useDisplayError = (errors: (ApolloError | undefined)[]) => {
	useEffect(
		() => {
			errors.forEach((e) => {
				if (e) {
                    if (e.graphQLErrors[0]?.extensions?.response?.statusCode === 403) {
                        MySwal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'You are not authenticated to use this action , please login again !'
	});
					} else if (e.graphQLErrors[0]?.extensions?.response?.statusCode === 400) {
						MySwal.fire({
		icon: 'error',
		title: 'Oops...',
							text: e.graphQLErrors[0]?.extensions?.response?.message[0]
						});
					} else {
                        MySwal.fire({
		icon: 'error',
		title: 'Oops...',
		text: e.message
						});
						// console.log(e.graphQLErrors);
                    }
				}
			});
		},
		[
			errors
		]
	);
};

export default useDisplayError;
