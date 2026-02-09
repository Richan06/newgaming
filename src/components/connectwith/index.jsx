import './index.css'
import {Box} from '@mui/material'
function Connectwith(){
    return (
        <div className='connect-fullcontainer'>
            <div className='connect-fullwidth'>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                    <Box>
                        <p className='connect-paragraph'>CONNECT WITH OUR GAMING TEAM!</p>

                    </Box>
                    <Box sx={{color:'white',fontFamily:'oxanium',
                        textShadow:'0 0 5px #9841ff, 0 0 10px #9841ff, 0 0 15px #9841ff;',
                        fontSize:{lg:'45px',md:'40px',sm:'34px',xs:'30px'} ,fontWeight:'600'}}>
                        Join With Us For Upcoming <br />
                        Gaming Tornaments!
                        
                        

                    </Box>
                    <Box>
                        <button className="connect-btn">Join Our Team</button>

                    </Box>

                </Box>

            </div>

        </div>
    );
}
export default Connectwith;