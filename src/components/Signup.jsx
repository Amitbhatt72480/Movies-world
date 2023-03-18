import React, {useState} from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthProvider';


const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const { createUser } = UserAuth();
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError('')

    if (password !== confirmPassword){
      setError("Your password does not match")
    }
    else{
      try {
        await createUser(email, password)
        navigate('/main')
      } catch (e) {
        setError(e.message)
      }
    }
  }
 

  return (
    <>
      <Navbar />
      <div className="">
        <h1 className="text-3xl font-primary mt-10 text-center">Fill your details to Sign Up</h1>
        <p className="text-center font-xl mt-1 font-secondary mb-4">Create your account with one easy click</p>
        <div className="bg-gradient-to-r from-purple-100 via-green-100 to-cyan-100 shadow-xl rounded-xl px-10 mx-auto lg:w-[60%] md:[w-80%]  w-[90%] py-10">
          <form onSubmit={handleSubmit}>
            <div className="text-xl py-2 flex flex-col">
              <label className='mb-1'>Email:</label>
              <input onChange={(e)=>{setEmail(e.target.value)}} className='px-3 bg-gray-100  md:w-[60%] rounded-xl py-1 shadow-inner' type="email" />
            </div>
            <div className="text-xl py-2 flex flex-col">
              <label className='mb-1'>Password:</label>
              <input onChange={(e)=>{setPassword(e.target.value)}} className='px-3 bg-gray-100  md:w-[60%] rounded-xl py-1 shadow-inner' type="password" />
            </div>
            <div className="text-xl py-2 flex flex-col">
              <label className='mb-1'>Confirm Password:</label>
              <input onChange={(e)=>{setConfirmPassword(e.target.value)}} className='px-3 bg-gray-100  md:w-[60%] rounded-xl py-1 shadow-inner' type="password" />
            </div>
            <p className="mt-1">Already have an account? <Link to="/" className='text-blue-500 ml-1'>Login</Link> </p>
            <div className="flex items-center mt-8">
              <button className="bg-[#4285F4] font-secondary font-semibold text-white px-5 py-2 rounded-full mr-7 hover:bg-blue-600 hover:text-white ">Login</button>
            </div>
          </form>
        </div>
        {error ? <p className='text-red-500 mt-5 ml-9'>{error}</p> : null}
      </div>
    </>
  )
}

export default Signup