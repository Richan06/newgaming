
import React from 'react'
import  {Box} from '@mui/material'
import { useEffect } from 'react';
import './index.css'
function Livestream(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll(".live-div");
        hiddenElements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);
    return(
        <div className=' live-div'>
        <h4 style={{fontSize:'15px',color:'blueviolet',fontFamily:'oxanium',}}>UPCOMING STREAMS</h4>
        
            <Box className="live-heading"sx={{fontSize:{lg:'45px',md:'45px',sm:'24px',xs:'20px'}}} >
                 Live Stream Schedule
                 </Box>
             <p className='live-paragraph'>Our Success in creating business solution is due in large part </p>
            <p className='live-paragraphs'> to our talented and highly committed team.</p>
    </div>
    );
}
export default Livestream