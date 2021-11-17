import * as React from 'react';

function JobIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
			<path
				d="M288 307.2h-64A172.8 172.8 0 0051.2 480a32 32 0 0032 32h345.6a32 32 0 0032-32A172.8 172.8 0 00288 307.2z"
				fill="#cad8dd"
			/>
			<path fill="#afc3c9" d="M256 486.4L204.8 448l25.6-89.6h51.2l25.6 89.6-51.2 38.4z" />
			<path
				d="M384 128v38.4a128 128 0 01-64 110.87v55.53l-64 38.4-64-38.4v-55.53a128 128 0 01-64-110.87V128a128 128 0 01256 0z"
				fill="#dde5e8"
			/>
			<path
				d="M256 0a128 128 0 00-128 128v25.6l76.8-51.2s109.43 69.86 179.2 38.4V128A128 128 0 00256 0z"
				fill="#71c6c4"
			/>
			<path
				d="M256 0a127.82 127.82 0 00-32 4.2A127.94 127.94 0 01320 128v38.4a127.94 127.94 0 01-96 123.8 127.55 127.55 0 00160-123.8V128A128 128 0 00256 0z"
				fill="#17292d"
				opacity={0.06}
			/>
		</svg>
	);
}

export default JobIcon;
