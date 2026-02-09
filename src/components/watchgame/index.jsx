import React from 'react'
import { Box } from '@mui/material';
import { useEffect } from 'react';
import './index.css'

function Watchgame(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll(".watch-div");
        hiddenElements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);
    
  return (
    <>
    <div className=' watch-div'>
            <h4 style={{fontSize:'15px',color:'white',fontFamily:'oxanium'}}>WATCH THE GAMEPLAY</h4>
            
                <Box className="watch-heading"sx={{fontSize:{lg:'45px',md:'45px',sm:'24px',xs:'20px'}}} >
                      WATCH LIVE <p> STEAMING</p> 
                     </Box>
                 <p className='watch-paragraph'>Our Success in creating business solution is due in large part </p>
                <p className='watch-paragraphs'> to our talented and highly committed team.</p>
           
    </div>
    </>
  )
}

export default Watchgame;