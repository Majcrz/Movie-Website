import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "slick-carousel/slick/slick-theme.css";
import Header from '../Header/Header';
import Header1 from './Header1';



export default function Detail() {
    const Name =localStorage.getItem('tvshow')
    const {id}=useParams()
    const [item, setitem] = useState(null)
    const [genre,setgenre]=useState([])
    const [cast,setcast]=useState([])
    const [fulldetail, setfulldetail] = useState([])

    useEffect(()=>{
                     axios.get(`https://api.themoviedb.org/3/${Name}/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((detail)=>{
                           console.log("fulldetail",detail.data)
                           setfulldetail(detail.data)
                           setgenre(detail.data.genres)
                     })
    },[])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/${Name}/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((detail)=>{
            console.log("credits",detail.data.cast)
            setcast(detail.data.cast)

      })
    },[])

   
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
  
        responsive:[
            {
                breakpoint:800,
                settings:{
                    slidesToShow:7,
                    slidesToScroll:1
                },
            },
        ],
      }


  return (

    <>
        
           
                <div className="banner" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${fulldetail?.backdrop_path})`}}> 
                <Header1/>
                
                </div>
                 <div className="images-and-info">
                  <div className="short-images">
                    <img src={`https://image.tmdb.org/t/p/original${fulldetail?.poster_path}`}></img>
                  </div>
          
                  <div className="fulldetails">
                    {
                        Name=='tv'?
                        <div className="detail-name">{fulldetail?.name}</div>:
                        <div className="detail-name">{fulldetail?.title}</div>
                    }
                   
                    <div className="detail-genre">
                        {
                            genre.map((data)=>
                              <div className="detail-genre-each">{data.name}</div>
                            )
                        }
                    </div>
                    {
                        fulldetail?.overview=="" ?
                        <div className="detail-overview"><p>Currently Overview For This Series/Movie Not Available.Please Be patient</p></div>:
                        <div className="detail-overview">{fulldetail?.overview}</div>
                    }
                  
                    <div className="detail-cast">
                        
                    <Slider {...settings}>
                {
                    cast?.map((dta)=>
                    <>
                    <div className="cast-photo">
                        <img src={`https://image.tmdb.org/t/p/original${dta?.profile_path}`} alt="" />  
                    </div>
                      <div className="cast-name">{dta?.original_name}</div>
                      </>
                    )
                }
                     </Slider>
                     
                      
                    </div>
                  </div>

                 </div>
        



    </>

  )
}
