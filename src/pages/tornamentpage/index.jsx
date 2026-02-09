import React from 'react'
import './index.css'
import Upcoming from '../../components/upcoming'
import Gametime from '../../components/gametime'
import Prydesign from '../../components/prydesign'
import Loadmore from '../../components/loadmore'
import Footer from '../../components/footer'

function Tornament () {
  return (

    <div className='background-img'>

 
    <Upcoming/>
    <Prydesign/>
    <Gametime/>
    <Loadmore/>
    <Footer/>
       </div>
  
  )
}

export default Tornament
