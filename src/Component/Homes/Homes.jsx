import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './Home'
import './homes.css'
export default function Homes() {
    const [items, setItems] = useState([])
    const Name =localStorage.getItem('tvshow')

    useEffect(()=>{

  if (Name=='tv') {
    
  
     axios.get(`https://api.themoviedb.org/3/${Name}/on_the_air?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1&adult=false`)  .then((dta)=>{
      console.log("upcomming data",dta.data.results)
  
      setItems(dta.data.results)
  
     })}
     else{
      axios.get(`https://api.themoviedb.org/3/${Name}/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1&adult=false`).then((dta)=>{
        console.log("movie data",dta.data.results)
        setItems(dta.data.results)
      })
     }
    },[])


  return (
   <>
   
   <section className='home'>
    <Home items={items}/>
    <div className="margin"></div>
   </section>
   
   </>

  )
}
