import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// [#E50914] color red
import { UserAuth } from '../context/AuthProvider'
const Navbar = () => {

	const {user, logout} = UserAuth()
	const navigate = useNavigate()
	const handleLogout = async () =>{
		try {
			await logout()
			navigate('/')
		} catch (e) {
			console.log(e.message);
		}
	}

  return (
	<div className='shadow-xl bg-gray-200 text-black p-6 flex items-center justify-between'>
		<h1 className=" font-primary text-xl md:text-3xl md:ml-4"><Link to="/">Movies World</Link></h1>
		<div className="">
			{user? <button className="bg-black mr-5 text-white px-4 py-2 rounded-2xl font-bold text-lg font-secondary">
				<Link to='/account'>Account</Link></button>:<button className="bg-black mr-5 text-white px-4 py-2 rounded-2xl font-bold text-lg font-secondary">
				<Link to='/signup'>Sign In</Link></button>}
			{user ? <button onClick={handleLogout} className="mr-3 font-bold text-lg font-secondary">Log Out</button> : 
			<button className="mr-3 font-bold text-lg font-secondary">Developer</button>}		</div>
	</div>
  )
}

export default Navbar