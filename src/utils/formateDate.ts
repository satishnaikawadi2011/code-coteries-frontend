import { format, isThisYear, formatDistanceStrict, formatDistanceToNow } from 'date-fns';

export function formatPostDate(date: string) {
	const formatShort = format(new Date(date), 'MMMM d').toUpperCase();
	const formatLong = format(new Date(date), 'MMMM d, yyy').toUpperCase();

	const ans =
		isThisYear(new Date(date)) ? formatShort :
		formatLong;
	return ans;
}

export function formatDateToNowShort(date: string) {
	return formatDistanceStrict(new Date(date), new Date(Date.now()))
		.split(' ')
		.map(
			(s, i) =>

					i === 1 ? s[0] :
					s
		)
		.join('');
}

export function formatDateToNow(date: string) {
	return formatDistanceToNow(new Date(date), { addSuffix: true }).toUpperCase();
}
