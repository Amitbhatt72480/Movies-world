import React, { useState } from 'react'
import BgImg from '../images/bg.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthProvider';

const WelcomeContent = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate()

	const {signin} = UserAuth()

	const handleSubmit = async (e) =>{
		e.preventDefault()
		setError('')
		try {
			await signin(email, password)
			navigate('/main')
		} catch (e) {
			setError(e.message)
		}
	}



	
	return (
		<>
			<div
				style={{ backgroundImage: `url(${BgImg})` }}
				className="relative h-[720px] md:h-[650px] w-full bg-cover">
				<div className="text-black font-secondary p-7 md:ml-10 pt-14">
					<h1 className="text-4xl font-bold">Welcome to the Movie Database</h1>
					<p className="my-2 text-sm">Check Out all the latest, trending, New shows and movies and add it to your watchlist!</p>
					<h1 className="text-xl font-semibold">Join us to get all the latest Updates</h1>
				</div>
				<div className="p-7 ml-5 md:ml-10 text-black font-primary border-2 rounded-3xl shadow-2xl md:w-[70%] lg:w-[50%]  w-[90%]">
					<h1 className="text-3xl pb-6">Log In  to our Website</h1>
					<form onSubmit={handleSubmit}>
						{error ? <p>{error}</p> :null}
						<div className="text-xl py-2 flex flex-col">
							<label className=''>Email:</label>
							<input onChange={(e)=>{setEmail(e.target.value)}} className='px-3 md:w-[60%] rounded-xl py-1 shadow-inner' type="email" />
						</div>
						<div className="text-xl py-2 flex flex-col">
							<label className=''>Password:</label>
							<input onChange={(e)=>{setPassword(e.target.value)}} className='px-3 md:w-[60%] rounded-xl py-1 shadow-inner' type="password" />
						</div>
						<p className="mt-1">New here? Click to <Link to="/signup" className='text-blue-500 ml-1'>Sign up</Link> </p>
						<div className="flex items-center mt-8">
						<button className="bg-[#4285F4] font-secondary font-semibold text-white px-5 py-2 rounded-full mr-7 hover:bg-blue-600 hover:text-white ">Login</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default WelcomeContent