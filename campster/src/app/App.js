import React, { Component, Fragment } from 'react';
import { Main } from './component/Main';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import './css/App.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Main />
				<Footer />
			</Fragment>
		);
	}
}

export default App;
