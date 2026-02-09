import React from 'react'
import  {Box} from '@mui/material'
import { useEffect } from 'react';
import './index.css'
function Matchesbar() {
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".matches-div");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className=' matches-div'>
        <h4 style={{fontSize:'15px',color:'white',fontFamily:'oxanium'}}>UPCOMING MATCHES</h4>
        
            <Box className="matches-heading"sx={{fontSize:{lg:'45px',md:'45px',sm:'24px',xs:'20px'}}} >
                 BATTLES EXTREME <br />MASTER  <p>TORNAMENT</p> 
                 </Box>
             <p className='matches-paragraph'>Our Success in creating business solution is due in large part </p>
            <p className='matches-paragraphs'> to our talented and highly committed team.</p>
    </div>
  )
}

export default Matchesbar;
