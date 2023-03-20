import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthProvider'

const ProtectedRoute = ({children}) => {

	const {user} = UserAuth()
	if (user){
		return <Navigate to="/main"/>
	}
	
	else{
		return children
	}
}

export default ProtectedRoute