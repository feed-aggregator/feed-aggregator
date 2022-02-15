import React, { useContext } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from '../Landing/Landing';

export default function App() {
	return (
		<div className='bg'>
			<BrowserRouter>
				<Switch>
					<Route path='/' element={<Landing />} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}
