import React from 'react'
import  {Box} from '@mui/material'
import { useEffect } from 'react';
import './index.css'

function Upcoming(){
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".upcoming-div");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className=' upcoming-div'>
        <h4 style={{fontSize:'15px',color:'blueviolet',fontFamily:'oxanium',}}>MATCHES LIST</h4>
        
            <Box className="upcoming-heading"sx={{fontSize:{lg:'45px',md:'45px',sm:'24px',xs:'20px'}}} >
                 Upcoming Matches  
                 </Box>
             <p className='upcoming-paragraph'>Our Success in creating business solution is due in large part </p>
            <p className='upcoming-paragraphs'> to our talented and highly committed team.</p>
    </div>
  )
}
export default Upcoming