import React from 'react';

export default function Content({ className, children }) {
	let cn = 'content ';
	if(className) {
		cn += className;
	}
	return (
		<div className={cn}>{children}</div>
	);
}