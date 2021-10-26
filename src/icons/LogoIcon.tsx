import * as React from 'react';

function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			id="prefix__Icons"
			xmlns="http://www.w3.org/2000/svg"
			x={0}
			y={0}
			viewBox="0 0 32 32"
			xmlSpace="preserve"
			{...props}
		>
			<style>
				{
					'.prefix__st0{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
				}
			</style>
			<path className="prefix__st0" d="M27 19V6H5v13M30 26H2l2-4h24z" />
			<path className="prefix__st0" d="M11 11l-3 3 3 3M21 11l3 3-3 3M18 10l-4 8" />
		</svg>
	);
}

export default LogoIcon;
