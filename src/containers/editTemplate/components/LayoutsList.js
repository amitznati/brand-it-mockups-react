import React from 'react';
//import Sortable from 'react-jquery-sortable';
import {Box, BoxHeader, BoxBody, SortableContainer} from '../../../components/core';
// const layouts = [
// 	'hi hi1', 'hi2', 'sdfsdf'
// ];

export default function LayoutsList({ title, small, onChange }) {
	return (
		<Box className="border-radius-none">
			<BoxHeader title="Layouts" boxTool={{collapse: true}} />
			<BoxBody>
				<SortableContainer tag="ul" className="todo-list"
					onChange={console.log}>
					<li data-layout-type="image"	className="layout-item" data-id={1}>
						
						<span className="handle">
							<i className="fa fa-reorder"></i>
						</span>
						
						<i className="fa fa-eye"></i>
						
						<span className="product-img">
							<img style={{height: '30px'}} src="https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg" alt="Product Image"/>
						</span>
						
						
						<div className="tools">
							<i className="fa fa-trash-o"></i>
						</div>
						<div className="text">image-stam.png</div>
					</li>
					<li data-layout-type="image"	className="layout-item active-layout" data-id={2}>
						
						<span className="handle">
							<i className="fa fa-reorder"></i>
						</span>
						
						<i className="fa fa-eye"></i>
						
						<span className="product-img">
							<img style={{height: '30px'}} src="https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg" alt="Product Image"/>
						</span>
						
						
						<div className="tools">
							<i className="fa fa-trash-o"></i>
						</div>
						<div className="text">default-50x50.gif</div>
					</li>
					<li data-layout-type="text" className="layout-item" data-id={3}>
						
						<span className="handle">
							<i className="fa fa-reorder"></i>
						</span>
						
						<i className="fa fa-eye"></i>
						
						<i className="fa fa-font"></i>
						
						
						<div className="tools">
							<i className="fa fa-trash-o"></i>
						</div>
						<div className="text">This is the text</div>
					</li>
					<li data-layout-type="shape" className="layout-item" data-id={4}>
							
						<span className="handle">
							<i className="fa fa-reorder"></i>
						</span>
						
						<i className="fa fa-eye"></i>
						
						<i className="fa fa-cubes"></i>
						
						
						<div className="tools">
							<i className="fa fa-trash-o"></i>
						</div>
						<div className="shape"></div>
					</li>
				</SortableContainer>
			</BoxBody>
		</Box>
	);
}