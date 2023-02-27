import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Trailer.css'
export default function Trailer() {
    const {id}=useParams()
    const [trailer,settrailer]=useState([])
    const Name =localStorage.getItem('tvshow')
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/${Name}/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((detail)=>{
            console.log("videos",detail.data.results)
            settrailer(detail.data.results)
      })
    },[])



  return (
    <>
    <div className="trailer-watch">
        Trailer & Videos
        {
         
           trailer?.length==0 ?
           <>
           <div className="trailer_watch">
              <p>Trailer Not Available</p>
           </div></>:
                   <div className="trailer_watch">
                   {
                       trailer?.slice(0,5).map((data)=>
           
                       <iframe width="760" height="415" src={`https://www.youtube.com/embed/${data.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           
                       )
                   }
                   </div>
        }

    </div>
    
    
    </>
  )
}
