import React from 'react'
import { useNavigate } from 'react-router-dom';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export default function Ucard({item}) {
  const navigate=useNavigate()
  const Name =localStorage.getItem('tvshow')

  const detailpage=(id)=>{
    navigate(`/detailpage/${id}`)
  }
  return (
    <>
    <div className="MovieBox" onClick={()=>detailpage(item?.id)}>
        <div className="img">
            <img src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}></img>
        </div>
        <div className="text">
          {
            Name=='tv'?
            <h3>{item?.name}</h3>:
            <h3>{item?.title}</h3>
          }
      
            <span>Rating:{item?.vote_average}</span><br></br>
            <button className='btn btn-warning newtrailer'>
           <i><PlayCircleFilledIcon/></i>PLAY TRAILER
            </button>
        </div>
    </div>
    
    
    
    
    
    
    
    
    </>
  )
}
