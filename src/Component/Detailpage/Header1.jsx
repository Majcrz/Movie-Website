import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import './Header1.css'
import axios from 'axios';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Header1() {
    const navigate=useNavigate()
    const [search, setsearch] = useState([])
    const [Mobile, setMobile] = useState(false)
    const [Tvshow, setTvshow] = useState([])
    const Tv =localStorage.getItem('tvshow')
  console.log("tvget",Tv)
const Home=()=>{
    navigate('/')
    
}

const detailpage=(id)=>{
    navigate(`/detailpage/${id}`)
    window.location.reload()
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
               <img src='/majcrz.png '></img>
        </div>
        <ul className={Mobile ?"navMenu-list":'flexSB'} onClick={()=>setMobile(false)} style={{cursor:"pointer"}}>
            
            <a href='' onClick={Home}>Home</a>
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
    </div>
     <div className='search_bar'>

     </div>
   </div>

 </header>
 
 
 
 
 </>
  )
}
