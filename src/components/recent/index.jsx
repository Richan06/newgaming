import './index.css'
import {Box} from '@mui/material'
function Recent(){
    return (
        <div className='recent-fullcontainer'>
            <div className='recent-fullwidth'>
                <Box sx={{display:'flex',justifyContent:'space-between',flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'}}}>
                    <Box>
                         <div style={{fontSize:'17px',color:'white',fontFamily:'oxanium',fontWeight:'500'}}>
                        OUR GAMEPLAY 
                        </div>
                         <Box sx={{color:'white' ,fontSize:{lg:'45px',md:'40px',sm:'35px',xs:'20px'},fontFamily:'oxanium',fontWeight:'700'}}>
                            <div >
                           <p style={{display:'inline'}}>OUR RECENT   </p> <p style={{display:'inline',color:'blueviolet'}}> GAMEPLAY </p> 
                            </div>
                          </Box>
                          <p style={{color:'white',fontFamily:'oxanium',fontSize:'17px' ,lineHeight:'1.3'}}>Our success in creating business solutions is due in large part <br />
                              to our talented and highly committed team.</p>

                    </Box>
                    <Box>
                        <div>
                            <button className="view-all-btn">View All Matches</button>
                        </div>

                    </Box>
                   
                   
                </Box>

            </div>
           
        </div>
    );

}
export default Recent