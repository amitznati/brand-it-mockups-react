import React from 'react';

export default function ContentHeader({ title, small }) {
	return (
		<section className="content-header">
			<h1>
				{title}
				<small>{small}</small>
			</h1>
			<ol className="breadcrumb">
				<li><a href="/"><i className="fa fa-dashboard"></i> Home</a></li>
				<li className="active">{title}</li>
			</ol>
		</section>
	);
}