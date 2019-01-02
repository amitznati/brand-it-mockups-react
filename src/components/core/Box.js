import React from 'react';

export default function Box({ children, className, dataWidget }) {
	let cn = 'box ';
	if(className) {
		cn += className;
	}
	return (
		<div className={cn} data-widget={dataWidget}>
			{children}
		</div>
	);
}