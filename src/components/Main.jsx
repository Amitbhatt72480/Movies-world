import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Card from '../Movies/Card';
import { TfiSearch } from 'react-icons/tfi';
// import { UserAuth } from '../context/AuthProvider'


const Main = () => {

	const API = 'c7c7a846b9a72f55d3f713fb7f6435a1';
	const [toprated, setToprated] = useState();
	const [upcoming, setUpcoming] = useState();
	const [nowplaying, setNowplaying] = useState();
	const [searchdata, setSearchdata] = useState();
	const [popular, setPopular] = useState();
	const [search, setSearch] = useState("")
	const [showcontent, setshowcontent] = useState(false)


	const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US&page=1`
	const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API}&language=en-US&page=1`
	const nowplayingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API}&language=en-US&page=1`
	const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`
	const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${search}&page=1`


	useEffect(() => {
		axios.get(topRatedURL).then((response) => {
			setToprated(response.data.results.slice(0, 10))
		}).catch((error) => {
			console.log(error);
		})
	}, [])

	useEffect(() => {
		axios.get(upcomingURL).then((response) => {
			setUpcoming(response.data.results.slice(0, 10))
		}).catch((error) => {
			console.log(error);
		})
	}, [])

	useEffect(() => {
		axios.get(nowplayingURL).then((response) => {
			setNowplaying(response.data.results.slice(0, 10))
		}).catch((error) => {
			console.log(error);
		})
	}, [])

	useEffect(() => {
		axios.get(popularURL).then((response) => {
			setPopular(response.data.results.slice(0, 10))
		}).catch((error) => {
			console.log(error);
		})
	}, [])

	useEffect(() => {
		axios.get(searchURL).then((response) => {
			setSearchdata(response.data.results.slice(0, 10))
		}).catch((error) => {
			console.log(error);
		})
	}, [search])

	const handleSearch = () => {
		if (search != null){
		setshowcontent(true)
		}
	}

	return (
		<>
			<Navbar />
			<div className="h-[300px] bg-black  pt-28 ">
				<h1 className="font-secondary text-5xl text-center text-white">Search Your Movie</h1>
				<div className="flex justify-center py-3">
					<input 
					className='mr-3 rounded-lg px-3 font-semibold font-secondary tracking-wide  py-1' onChange={(e) => { setSearch(e.target.value) }} type="text" />
					<TfiSearch onClick={handleSearch} className='text-white cursor-pointer  hover:scale-105' size={31} />
				</div>
			</div>
			
			{search && showcontent ? <div className='bg-black text-white'>
				<h1 className="text-4xl p-10">Search result for {search}</h1>
				<div className="relative ">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full">
						{searchdata && searchdata.map((item) => {
							return <Card id={item.id}  title={item.title} image={item.backdrop_path} />
						})}
					</div>
				</div>
			</div> :<div className="bg-black text-white p-4">
				<div className="relative ">
					<h1 className="text-2xl font-primary p-4 tracking-widest">Now Playing</h1>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  w-full h-full  ">
						{nowplaying && nowplaying.map((item) => {
							return <Card id={item.id}  title={item.title} image={item.backdrop_path} />
						})}
					</div>
				</div>
				<div className="relative ">
					<h1 className="text-2xl font-primary p-4 tracking-widest">Top Rated Shows</h1>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full  ">
						{toprated && toprated.map((item) => {
							return <Card id={item.id}  title={item.title} image={item.backdrop_path} />
						})}
					</div>
				</div>
				<div className="relative ">
					<h1 className="text-2xl font-primary p-4 tracking-widest">Upcoming Shows</h1>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full  ">
						{upcoming && upcoming.map((item) => {
							return <Card  id={item.id} title={item.title} image={item.backdrop_path} />
						})}
					</div>
				</div>
				<div className="relative ">
					<h1 className="text-2xl font-primary p-4 tracking-widest">Popular</h1>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full  ">
						{popular && popular.map((item) => {
							return <Card  id={item.id} title={item.title} image={item.backdrop_path} />
						})}
					</div>
				</div>
			</div>}
		</>
	)
}

export default Main