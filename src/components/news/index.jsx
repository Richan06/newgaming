import { Box } from "@mui/material";
import { useEffect } from "react";
import './index.css'
function News(){
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll(".news-div");
        hiddenElements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);

    return(
        <>
         <div className=' news-div'>
                <h4 style={{fontSize:'15px',color:'white',fontFamily:'oxanium'}}>WHAT'S ON OUR MIND</h4>
                
                    <Box className="news-heading"sx={{fontSize:{lg:'45px',md:'45px',sm:'24px',xs:'20px'}}} >
                         NEWS AND <p>HEADLINES</p> 
                         </Box>
                     <p className='news-paragraph'>Our Success in creating business solution is due in large part </p>
                    <p className='news-paragraphs'> to our talented and highly committed team.</p>
            </div>
        </>
    );
}
export default News;