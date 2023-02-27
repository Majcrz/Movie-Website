import React from 'react'
import HomeCard from './HomeCard'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
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
export default function Home({items}) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>
  }
  return (
    <>
    
    <div className="homeContainer">   
    <Slider {...settings}>
        {
           items.map((item)=>
           <HomeCard key={item.id} item={item}/>
           
           )

        }
         </Slider>
    </div>
    
    
    
    </>
  )
} 
