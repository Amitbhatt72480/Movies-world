import React from 'react'
import Navbar from './Navbar'
import { UserAuth } from '../context/AuthProvider'

const Account = () => {
  const {user} = UserAuth()
  return (
	<>
  <Navbar />
  <h1 className="">Welcome: {user? `${user?.email}`:'no '}</h1>
  </>
  )
}

export default Account