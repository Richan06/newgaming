import React from 'react'
import Navbar from '../../components/navbar'
import Matchbar from '../../components/matchesbar'
import Gametime from '../../components/gametime'
import "./index.css"
import Joinus from '../../components/joinus'
import Gameimage from '../../components/gameimage'
import Watchgame from '../../components/watchgame'
import Carosal from '../../components/carosal'
import Meetgamers from '../../components/meetgamers/index.jsx'
import Slick from '../../components/slick/index.jsx'
import Sendmail from '../../components/sendmail/index.jsx'
import Imageslide from '../../components/imageslide/index.jsx'
import Shop from '../../components/shop/index.jsx'
import Productslider from '../../components/productslider/index.jsx'
import News from '../../components/news/index.jsx'
import Headlines from '../../components/headlines/index.jsx'
import Footer from '../../components/footer/index.jsx'
import { Box } from '@mui/material'

function Homepage() {
  return (
    <div className='background-img'>
      <Box
  sx={{
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, 
    justifyContent: 'space-between',
  }}
>
  <div className="clip-box-first"></div>
  <div className="clip-box-second"></div>
    </Box>
    <Joinus/>
    <Gameimage/>
     <Matchbar/>
     <Gametime/>
      <Watchgame/>
      <Carosal/>
     <Meetgamers/>
     <Slick/>
     <Sendmail/>
     <Imageslide/>
     <Shop/>
     <Productslider/>
     <News/>
     <Headlines/>
     <Footer/>

     </div>
  )
}

export default Homepage