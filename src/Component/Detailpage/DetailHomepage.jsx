import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Detail from './Detail'
import Trailer from './Trailer'
import { useParams } from 'react-router-dom'
import './DetailHomepage.css'
import Header from '../Header/Header'
import Header1 from './Header1'
export default function DetailHomepage() {


  return (
  <>
  <div className='detailsfulll'><Detail/></div>
  <div>

  <Trailer/>  

  </div>

  </>
  )
}
