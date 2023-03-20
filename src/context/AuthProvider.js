import { createContext, useContext, useState, useEffect } from "react";
import {createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	signOut, 	
	onAuthStateChanged} from 'firebase/auth'
import {auth, db} from '../firebase';
import {setDoc, doc} from 'firebase/firestore'


const UserContext = createContext()

export const AuthContextProvider = ({children}) =>{

	const [user, setUser] = useState({})

	const createUser = (email, password) =>{
		createUserWithEmailAndPassword(auth, email, password)
		setDoc(doc(db, 'users', email),{
			savedShows: []
		})
	}

	const signin = (email, password) =>{
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logout = () =>{
		return signOut(auth)
	}

	useEffect (()=>{
		const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
			setUser(currentUser)
			console.log(currentUser);
		})
		return ()=>{unsubscribe()}
	}, [])


	return (
		<UserContext.Provider value={{createUser, user, logout, signin}}>
			{children}
		</UserContext.Provider>
	)
}

export const UserAuth = () =>{
	return useContext(UserContext)
}