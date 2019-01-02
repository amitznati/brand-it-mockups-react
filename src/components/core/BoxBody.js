import React from 'react';

export default function BoxBody({ className, children }) {
	let cn = 'box-body ';
	if(className) {
		cn += className;
	}
	return (
		<div className={cn}>{children}</div>
		
	);
}