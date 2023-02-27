import React from 'react'
import { Link } from 'react-router-dom'
import Ucard from './Ucard'
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow=(props)=>{
  const {onClick}=props
  return <div className='control-btn' onClick={onClick}>
  <button className='next'>
    <i><ArrowForwardIosIcon/></i>
  </button>
  </div>
  
}
const SamplePrevArrow=(props)=>{
  const {onClick}=props
  return <div className='control-btn' onClick={onClick}>
  <button className='prev'>
    <i><ArrowBackIosNewIcon/></i>
  </button>
  </div>
  
}
export default function Upcomming({items,title}) {
  const Name =localStorage.getItem('tvshow')
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>,
        responsive:[
            {
                breakpoint:800,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1
                },
            },
        ],
      }
  return (
   <>
   <section className='upcome'>
          <div className="container">
            <div className="heading flexSB">

                <h1>{title}</h1>
               
            </div>
            <div className="content">
            <Slider {...settings}>
                {
                    items.map((item)=>
                    <Ucard key={item.id} item={item}/>
                    )
                }
                     </Slider>
            </div>
          </div>
   </section>
   
   
   
   
   
   
   </>
  )
}
