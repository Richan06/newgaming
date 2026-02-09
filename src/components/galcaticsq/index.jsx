import './index.css'
import {Box} from '@mui/material'
import wizards from '../../assets/images/wizards.png'
function Galacticsq(){
    return(
        <div className='galactic-fulldiv'>
            <div className='galactic-fullwidth'>
             <Box sx={{display:'flex',gap:'0px',flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'}}}>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',width:'90%',alignItems: {lg:'start',md:'start',sm:'center' ,xs:'center'}}}>
                    <div style={{fontSize:'16px',color:'white',fontFamily:'oxanium'}}>
                        ABOUT GALACTIC SQUAD
                    </div>
                    <Box sx={{color:'white' ,fontSize:{lg:'45px',md:'40px',sm:'35px',xs:'20px'},fontFamily:'oxanium',fontWeight:'700'}}>
                        <div >
                           <p style={{display:'inline'}}>THE NEXT  </p> <p style={{display:'inline',color:'blueviolet'}}> GENERATION </p> <br />OF GAMING IS HERE

                        </div>
                    </Box>
                    <div style={{width:'70%'}}>
                        <p style={{color:'white',fontFamily:'oxanium',fontSize:'17px',lineHeight:'1.7'}}>
                            Online gaming is simply the playing of a video game over the internet, 
                            usually with friends. Online games can be played on any number
                             of devices from dedicated video games consoles.
                        </p>
                        <p style={{color:'white',fontFamily:'oxanium',fontSize:'17px',lineHeight:'1.7'}}>
                            For these reasons, it's important that trusted adults educate themselves around what online gaming is and how they can ensure children play safely.
                        </p>
                        <button className="galactic-icon-btn">Join Our Team</button>
                    </div>
                </Box>
            <Box sx={{display:'flex',justifyContent:'center'}}>

                <img style={{width:'110%'}} src={wizards} alt="" />
                    


             </Box>


            </Box>
            </div>

        </div>
    );
}
export default Galacticsq