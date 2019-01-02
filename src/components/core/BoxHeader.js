import React from 'react';

export default function BoxHeader({ className, icon, title, boxTool }) {
	let cn = 'box-header ';
	if (className){
		cn += className;
	}
	return (
		<div className={cn}>
			{icon && <i className={icon}></i>}
			<h3 className="box-title">{title}</h3>
			{boxTool && <div className="box-tools pull-right">
				{boxTool.collapse && <button type="button" className="btn bg-aqua btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
				</button>}
			</div>}
		</div>
	);
}