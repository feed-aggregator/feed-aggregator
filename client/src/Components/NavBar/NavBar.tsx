import React, {useState, useEffect} from 'react'
import './NavBar.scss'

export default function NavBar() {
	return (
		<nav className='NavBar-container'>
			<ul>
				<li>Home</li>
				<li>Filter</li>
				<li>Log out</li>
			</ul>
		</nav>
	)
}
