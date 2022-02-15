import React, { useContext } from 'react';
// import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import '../../Theme/Background/Background.scss';

import Landing from '../Landing/Landing';

export default function App() {
	return (
		<div className={'bg'}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Landing />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
