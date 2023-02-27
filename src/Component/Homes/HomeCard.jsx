import React, { useState } from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from 'axios';
import Loading from './Loading';
export default function HomeCard({item})

{
   const [trailer, settrailer] = useState(false)
   const [loading,setloading]=useState(true)
   const [showtrailer, setshowtrailer] = useState([])
   const Name =localStorage.getItem('tvshow')
  const  watchTrailer=(id)=>{

       settrailer(true)
       
       axios.get(`https://api.themoviedb.org/3/${Name}/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((data)=>{
         setloading(false)
         console.log("datatrailer",data.data.results[0].key)
         setshowtrailer(data.data.results[0].key)
         
       })
  }

  console.log("key",showtrailer)
  const closetrailer=()=>{
   settrailer(false)
  }
  return (
    <>

    <div className='box'>
        <div className="coverImage">
            <img src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}></img>
        </div>
     <div className='content flex'>
     <div className='details row' >
      {
         Name=='tv'?
         <h1>{item?.name}</h1>:
         <h1>{item?.title}</h1>
      }
       
       <div className='rating flex'>
         <i><GradeIcon/></i>
         <i><GradeIcon/></i>
         <i><GradeIcon/></i>
         <i><GradeIcon/></i>
         <i><StarHalfIcon/></i>
       </div>
 
       <span>Popularity:&nbsp;</span>
       <label>{Math.round(item?.popularity)%100}%</label>
      
  {
   item?.overview =="" ?
   <p>Currently Overview For This Series/Movie Not Available.Please Be patient</p>:
   <p>{item?.overview}</p>
  }
     
     <div className='date'>
      {
         Name=='tv'?
         <h4>
         <span>Release Date:&nbsp;</span>
          {item?.first_air_date}
      </h4>:
             <h4>
             <span>Release Date:&nbsp;</span>
              {item?.release_date}
          </h4>
      }

     <button className='btn btn-primary'>
        <i><PlayArrowIcon/></i>&nbsp;Watch On Netflix
     </button>
     </div>
     
 
     </div>
  
     <div className='playButton row'>
        {
         trailer!=true ?
         <button onClick={() => { watchTrailer(item?.id) }}>
         <div className='img'>

         <img src='https://github.com/sunil9813/Netfilx-Clone/blob/master/public/images/play.png?raw=true' className='change'></img>
         </div>
         WATCH TRAILER
      </button>:
        <button > 
        <div className='img1' onClick={closetrailer}>
         {
            loading==true ?
            <div><Loading/></div>:
            <>
       {
         showtrailer?.length!=0 ?
         <iframe width="760" height="415" src={`https://www.youtube.com/embed/${showtrailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>:
           <p>SORRY..TRAILER NOT AVAILABLE</p>
       }
       </>
      }
        
        </div>
       
     </button>
        }

       
     </div>
    </div>
</div>
    
     
    
    
    </>
  )
}
