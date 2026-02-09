import React from 'react'
import  {Box} from '@mui/material'
import { useEffect } from 'react';
import './index.css'
function Meetgamers() {
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".meet-div");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className=' meet-div'>
        <h4 style={{fontSize:'15px',color:'white',fontFamily:'oxanium'}}>OUR GAMERS</h4>
            <Box className="meet-heading"sx={{fontSize:{lg:'45px',md:'45px',sm:'24px',xs:'20px'}}} >
                 MEET OUR  <p>GAMERS</p> 
                 </Box>
             <p className='meet-paragraph'>Our Success in creating business solution is due in large part </p>
            <p className='meet-paragraphs'> to our talented and highly committed team.</p>
    </div>
  )
}

export default Meetgamers;