import React, { useEffect, useState } from 'react'
import Homes from '../Component/Homes/Homes'
import Header from '../Component/Header/Header'
import axios from 'axios'
import './Homepage.css'
import Upcomming from '../Component/Upcomming/Upcomming'
export default function Homepage() {
  const Name =localStorage.getItem('tvshow')
const [items, setitems] = useState([])
const [items1, setitems1] = useState([])
const [items2, setitems2] = useState([])
useEffect(()=>{
  if (Name=='tv') {
    axios.get(`https://api.themoviedb.org/3/${Name}/airing_today?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1&adult=false`).then((dta)=>{
      console.log("now palying data",dta.data.results)
      setitems(dta.data.results)

     })
  }
else{
  axios.get(`https://api.themoviedb.org/3/${Name}/now_playing?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1&adult=false`).then((dta)=>{
   console.log("now palying data",dta.data.results)
   setitems(dta.data.results)

  })
}

 },[])

 useEffect(()=>{

    axios.get(`https://api.themoviedb.org/3/${Name}/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1&adult=false`).then((data)=>{
      setitems1(data.data.results)
    })},[])
 useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/${Name}/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1&adult=false`).then((dta)=>{
    setitems2(dta.data.results)
   })

 },[])
  return (
   <>

<Header/>
   <Homes/>
  {
    Name=='tv' ?
    <>
     <Upcomming items={items} title='Now Playing Series'/>
     <Upcomming items={items1} title='Top Rated Series'/>
     <Upcomming items={items2} title='Popular Series'/>
     </>
     :
     <>
     <Upcomming items={items} title='Now Playing Movies'/>
     <Upcomming items={items1} title='Top Rated Movies'/>
     <Upcomming items={items2} title='Popular Movies'/>
     </>
   }

   </>
  )
}
