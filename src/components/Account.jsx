import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { UserAuth } from '../context/AuthProvider'
import Card from '../Movies/Card'
import { db } from '../firebase'
import { updateDoc,getDocs, doc, onSnapshot } from 'firebase/firestore'

const Account = () => {
  const {user} = UserAuth();
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc)=>{
      setMovies(doc.data()?.savedShows);
      console.log(movies);
    })
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`)
  const handleDelete = async (passedID)=>{
    try {
      const result = movies.filter((item) => item.id !== passedID)
      await updateDoc(movieRef, {
        savedShows : result
      })
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
	<div className='bg-black'>
  <Navbar />
  <h1 className="p-5 text-white">Welcome: {user? `${user?.email}`:'no '}</h1>
  <h1 className="text-4xl font-primary p-5 text-white">My Saved Shows</h1>
  <div className="p-2 grid grid-cols-3">
    {movies.map((item)=>{
      return <div className="">
        <Card title={item?.title} image={item?.img}/>
        <button onClick={()=> handleDelete(item.id)} className="text-xs text-white bg-blue-600 px-2 py-1 mb-10 rounded-full">Remove item</button>
        </div>
    })}
  </div>
   
  </div>
  )
}

export default Account