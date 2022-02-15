import React, {useState, useEffect} from 'react'
import './Dashboard.scss'
import NavBar from '../../Components/NavBar/NavBar'

export default function Dashboard() {
	const [posts, setPosts] = useState([])

	useEffect(() => {

	}, [posts])


	return (
		<>
			<NavBar />

		</>
	)
}
