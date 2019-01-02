import React from 'react';

export default function ContentWrapper({ className, children }) {
	return (
		<div className="content-wrapper">
			{children}
		</div>
	);
}