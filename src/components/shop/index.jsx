import { Box } from "@mui/material";
import { useEffect } from "react";
import './index.css'
function Shop (){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll(".shop-div");
        hiddenElements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);
    return (
         <div className=' shop-div'>
        <h4 style={{fontSize:'15px',color:'white',fontFamily:'oxanium'}}>ONLINE GAMING SHOP</h4>
        
            <Box className="shop-heading"sx={{fontSize:{lg:'45px',md:'45px',sm:'24px',xs:'20px'}}} >
                 EXPL0RE OUR   <p>GEARS</p> 
                 </Box>
             <p className='shop-paragraph'>Our Success in creating business solution is due in large part </p>
            <p className='shop-paragraphs'> to our talented and highly committed team.</p>
    </div>
    );
}
export default Shop;