import React from 'react'
import  {Box} from '@mui/material'
import { useEffect } from 'react';
import './index.css'
function Aboutsquad(){

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll(".about-div");
        hiddenElements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);
    
    return (
         <div className='about-div'>
        <h4 style={{fontSize:'15px',color:'white',fontFamily:'oxanium',color:'blueviolet'}}>Aboutus</h4>
        
            <Box className="about-heading"sx={{fontSize:{lg:'45px',md:'45px',sm:'24px',xs:'20px'}}} >
                 About Galactic Sqaud 
                 </Box>
             <p className='about-paragraph'>Our Success in creating business solution is due in large part </p>
            <p className='about-paragraphs'> to our talented and highly committed team.</p>
    </div>
    );

}
export default Aboutsquad;