import React, { useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';

const Card = ({key, title, image}) => {

	const [like, setLike] = useState(false);

	const handleLike = ()=>{
		setLike((prev)=>{
			return !prev
		})
	}

  return (
	<>
		<div className="relative w-[160px] sm:w-[200px] lg:w-[280px] pb-4">
			<img className='w-full h-auto' src={`https://image.tmdb.org/t/p/w500/${image}`} alt="img" />
			<div className="lg:absolute h-full w-full top-0 left-0 lg:hover:bg-black/80 lg:opacity-0 hover:opacity-75">
				<p className="text-white text-sm font-secondary font-bold text-center lg:mt-16">{title}</p>
				<p className="absolute top-3 left-2 ">
				{like ? <AiFillHeart onClick={handleLike}/> :<AiOutlineHeart onClick={handleLike} />}</p>
			</div>
			
		</div>
	</>
  )
}

export default Card