import React from 'react'
import { useEffect } from 'react';
import gameover from '../../assets/images/gameover.png'
import reaper from "../../assets/images/reaper.png";
import martial from '../../assets/images/martial.png'
import phoenix from '../../assets/images/phoenix.png'
import grimsniper from '../../assets/images/grimsniper.png'
import killers from '../../assets/images/killers.png'
 import { Box, Typography } from "@mui/material";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import YouTubeIcon from "@mui/icons-material/YouTube";

import { faTwitch } from '@fortawesome/free-brands-svg-icons';

import './index.css'
function Gametime(){

  return (
    <>

    {/* 1 */}
    <div className='main-div'>
    <div className='main-div-width'>

      <Box className='first-container' sx={{display:'flex',justifyContent:'center',flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'} ,justifyContent:'center',alignItems:'center'}} >


        <Box  className="first-flex-box" sx={{display:{lg:'block',md:'block',sm:'block',xs:'block' },paddingLeft:{md:'30px',sm:'0px'},justifyContent:'center'}} >
               <Box>
                  <img className='image1' src={gameover} alt="" />
                   <Box className='first-box' sx={{height:{lg:'70px' ,md:'70px',},paddingTop:{lg:'18px',md:'3px'}}}>
                     <p className='title1'>PURPLE DEATH CADETS</p> 
                   </Box>
               </Box>
               <div  style={{display:{lg:'none',md:'none',sm:'flex',xs:'flex'}}}>
               </div>
              <div className='first-groupfour-box'>
                  GROUP 4 | MATCH 06TH
                </div>          
            </Box>


             <Box>
              <Box sx={{justifyContent:'center',alignItems:'center',textAlign:'center',fontFamily:'oxanium',color:'white'}}>
                 <Box sx={{fontSize:{lg:'58px',md:'50px',sm:'36px',xs:'32px'}}}  >10:00</Box>
                  <p style={{marginTop:'-6px'}}>25 MAY 2024</p>
                   <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <YouTubeIcon sx={{ color: "white", fontSize: "2rem", stroke: "white", fill: "none"}} />
                 <FontAwesomeIcon icon={faTwitch } size="2x" style={{ color: 'white' ,fontSize:'27px'}} />
                  </div>
              </Box>
            </Box>


              <Box className='second-flex-box' sx={{display:{lg:'block',md:'block',sm:'block',xs:'block' },paddingRight:{md:'30px',sm:'0px'},justifyContent:'space-between'}}  >
                <div style={{display:{lg:'none',md:'none',sm:'flex',xs:'flex'}}}>
                </div>
                <Box>
                     <img className='image2' src={reaper} alt="" />
                     <Box className='second-box' sx={{height:{lg:'70px' ,md:'70px'},paddingTop:{lg:'18px',md:'3px'}}} >
                        <p className='title2'>  TRIGGER BRAIN SQUAD!</p>
                    </Box>
                </Box>
                <div className='second-groupfour-box'>
                     GROUP 4 | MATCH 06TH
                </div>
              </Box>        
      </Box>
    </div>
    </div>

      {/* 2 */}


    <div className='main-div'>
    <div className='main-div-width'>

      <Box className='first-container' sx={{display:'flex',justifyContent:'center',flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'},alignItems:'center'}} >


        <Box  className="first-flex-box" sx={{display:{lg:'block',md:'block',sm:'block',xs:'block' },paddingLeft:{md:'30px',sm:'0px'},justifyContent:'center'}} >
               <Box>
                  <img className='image1' src={martial} alt="" />
                   <Box className='first-box' sx={{height:{lg:'70px' ,md:'70px',},paddingTop:{lg:'18px',md:'3px'}}}>
                     <p className='title1'>BLACK HAT HACKERS</p> 
                   </Box>
               </Box>
               <div  style={{display:{lg:'none',md:'none',sm:'flex',xs:'flex'}}}>
               </div>
              <div className='first-groupfour-box'>
                  GROUP 5 | MATCH 02ND
                </div>          
            </Box>


             <Box>
              <Box sx={{justifyContent:'center',alignItems:'center',textAlign:'center',fontFamily:'oxanium',color:'white'}}>
                 <Box sx={{fontSize:{lg:'58px',md:'50px',sm:'36px',xs:'32px'}}}  >12:30</Box>
                  <p style={{marginTop:'-6px'}}>10TH JAN 2024</p>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <YouTubeIcon sx={{ color: "white", fontSize: "2rem", stroke: "white", fill: "none"}} />
                 <FontAwesomeIcon icon={faTwitch } size="2x" style={{ color: 'white' ,fontSize:'27px'}} />
                  </div>
              </Box>
            </Box>


              <Box className='second-flex-box' sx={{display:{lg:'block',md:'block',sm:'block',xs:'block' },paddingRight:{md:'30px',sm:'0px'},justifyContent:'space-between'}}  >
                <div style={{display:{lg:'none',md:'none',sm:'flex',xs:'flex'}}}>
                </div>
                <Box>
                     <img className='image2' src={phoenix} alt="" />
                     <Box className='second-box' sx={{height:{lg:'70px' ,md:'70px'},paddingTop:{lg:'18px',md:'3px'}}} >
                        <p className='title2'>YOUR WORST NIGHTMARE</p>
                    </Box>
                </Box>
                <div className='second-groupfour-box'>
                     GROUP 5 | MATCH 02ND
                </div>
              </Box>        
      </Box>
       
      
    </div>
    </div>
    
    {/* 3 */}
    <div className='main-div'>
    <div className='main-div-width'>

      <Box className='first-container' sx={{display:'flex',justifyContent:'center',flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'} ,justifyContent:'center',alignItems:'center'}} >


        <Box  className="first-flex-box" sx={{display:{lg:'block',md:'block',sm:'block',xs:'block' },paddingLeft:{md:'30px',sm:'0px'},justifyContent:'center'}} >
               <Box>
                  <img className='image1' src={grimsniper} alt="" />
                   <Box className='first-box' sx={{height:{lg:'70px' ,md:'70px',},paddingTop:{lg:'18px',md:'3px'}}}>
                     <p className='title1'>WITCHES AND QUIZARDS</p> 
                   </Box>
               </Box>
               <div  style={{display:{lg:'none',md:'none',sm:'flex',xs:'flex'}}}>
               </div>
              <div className='first-groupfour-box'>
                  GROUP 2 | MATCH 03RD
                </div>          
            </Box>


             <Box>
              <Box sx={{justifyContent:'center',alignItems:'center',textAlign:'center',fontFamily:'oxanium',color:'white'}}>
                 <Box sx={{fontSize:{lg:'58px',md:'50px',sm:'36px',xs:'32px'}}}  >04:20</Box>
                  <p style={{marginTop:'-6px'}}>15TH DEC 2024</p>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <YouTubeIcon sx={{ color: "white", fontSize: "2rem", stroke: "white", fill: "none"}} />
                    <FontAwesomeIcon icon={faTwitch } size="2x" style={{ color: 'white' ,fontSize:'27px'}} />
                  </div>
              </Box>
            </Box>


              <Box className='second-flex-box' sx={{display:{lg:'block',md:'block',sm:'block',xs:'block' },paddingRight:{md:'30px',sm:'0px'},justifyContent:'space-between'}}  >
                <div style={{display:{lg:'none',md:'none',sm:'flex',xs:'flex'}}}>
                </div>
                <Box>
                     <img className='image2' src={killers} alt="" />
                     <Box className='second-box' sx={{height:{lg:'70px' ,md:'70px'},paddingTop:{lg:'18px',md:'3px'}}} >
                        <p className='title2'>  RESTING BITCH FACES</p>
                    </Box>
                </Box>
                <div className='second-groupfour-box'>
                     GROUP 2 | MATCH 03RD
                </div>
              </Box>        
      </Box>
    </div>
    </div>







    </>

    

   
  )
}

export default Gametime;
