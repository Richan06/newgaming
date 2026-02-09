 import './index.css'
 import { useEffect } from 'react';
 import {Box } from '@mui/material'
function Topblog(){

      useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("show");
                }
              });
            });
        
            const hiddenElements = document.querySelectorAll(".blog-div");
            hiddenElements.forEach((el) => observer.observe(el));
        
            return () => observer.disconnect();
          }, []);

    return(
       <div className=' blog-div'>
        <h4 style={{fontSize:'15px',color:'blueviolet',fontFamily:'oxanium'}}>BLOG CLASSIC </h4>
        
            <Box className="blog-heading"sx={{fontSize:{lg:'45px',md:'45px',sm:'24px',xs:'20px'}}} >
                 Gaming News & Insights
                 </Box>
             <p className='blog-paragraph'>Our Success in creating business solution is due in large part </p>
            <p className='blog-paragraphs'> to our talented and highly committed team.</p>
    </div>
    );
}
export default Topblog;