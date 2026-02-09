import './index.css'
import Box from '@mui/material/Box';
function Prydesign(){
    return (
        <div className="prydesign-container">
            <Box sx={{display:'flex',gap:'2px',justifyContent:'space-between'}}>
                <Box  className='first-prybox' sx={{width:{lg:'200px',md:'80px',sm:'60px',xs:'40px'},
                                                    height:{lg:'60px',md:'80px',sm:'60px',xs:'40px'}}}> 
                </Box>
                <Box className="second-prybox" sx={{position:'relative',display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
                            <Box className='behind-box' sx={{width:{lg:'360px',md:'280px',sm:'230px',xs:'180px'}}} >
                              

                            </Box>
                            <Box className='above-box' sx={{width:{lg:'140px',md:'110px',sm:'80px',xs:'60px'}}}>
                               
                            </Box>
                
                </Box>
                <Box className="third-prybox" sx={{width:{lg:'200px',md:'80px',sm:'60px',xs:'40px'},
                                                    height:{lg:'60px',md:'80px',sm:'60px',xs:'40px'}}}>

                </Box>

            </Box>
            <hr  className='down-line'/>
             
        </div>
    );

}
export default Prydesign