import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import axios from 'axios';

export default function Header() {
  const navigate=useNavigate()
  const [Mobile, setMobile] = useState(false)
  const [search, setsearch] = useState([])
  const [Tvshow, setTvshow] = useState([])
  const Tv =localStorage.getItem('tvshow')
console.log("tvget",Tv)
 const tvshow=()=>{   
           localStorage.setItem('tvshow','tv')
      
 }
 const detailpage=(id)=>{
  navigate(`/detailpage/${id}`)
}

 const movie=()=>{
  localStorage.setItem('tvshow','movie')

}
if (Tv==undefined) {
  localStorage.setItem('tvshow','movie')
}

const Search =(event)=>{
  axios.get(`https://api.themoviedb.org/3/search/multi?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${event.target.value}&page=1&include_adult=false`).then((data)=>{
    console.log("search_data",data.data.results)
    setsearch(data.data.results)
  })
}
  return (
   <>
 <header>
   <div className='container flexSB'>
    <nav className='flexSB'>
        <div className='logo'>
               <img src='/majcrz.png'></img>
        </div>
        <ul className={Mobile ?"navMenu-list":'flexSB'} onClick={()=>setMobile(false)} style={{cursor:"pointer"}}>
            
            <a href='' onClick={movie}>Movies</a>
            <a href='' onClick={tvshow}>TV Show</a>
        </ul>
        <button className='toggle'  onClick={()=>setMobile(!Mobile)}>
    {Mobile ?     <i><CloseIcon/></i>:      <i><MoreVertIcon/></i>}
        </button>
    </nav>
    <div className='account flexSB '>
{
  Tv=='tv' ?
  <div className='input_tag'>
  <input type="text" list='states' id='states' placeholder='Search Series Only' onChange={Search}/>
  <datalist id='states'>
           {
            search.slice(0,9)?.map((details)=>
            
           <option className='option' onClick={()=>detailpage(details?.id)}>{details?.title}{details?.name}</option>
            )
           }
  </datalist>
</div>:
         <div className='input_tag'>
         <input type="text" list='states' id='states' placeholder='Search Movie Only' onChange={Search}/>
         <datalist id='states'>
                  {
                   search.slice(0,9)?.map((details)=>
                   
                  <option className='option' onClick={()=>detailpage(details?.id)}>{details?.title}{details?.name}</option>
                   )
                  }
         </datalist>
</div>
}

         <div className='search_icon'><SearchIcon/></div>
    </div>
     <div className='search_bar'>

     </div>
   </div>

 </header>
   
   
   
   
   
   
   
   </>
  )
}
