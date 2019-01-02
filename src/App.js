import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import EditTemplate from './containers/editTemplate/EditTemplate';

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<SideBar />
				<EditTemplate />
			</div>
		);
	}
}

export default App;
