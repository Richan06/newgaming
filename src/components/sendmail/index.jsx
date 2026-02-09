import {Box} from "@mui/material"
import './index.css'
function Sendmail(){
    return(
        <Box  className="send-mail-box">
            <Box className="send-mail-container">
                <Box className="send-mail-flexbox" sx={{display:'flex',flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'},gap:'0px', marginLeft:{sm:'20%',lg:'0%',md:'0%'}}}>
                    <Box>
                         <div className=' mail-div'>
                                <h4 style={{fontSize:'15px',color:'white',fontFamily:'oxanium',textAlign:'left'}}>SEND US A MAIL</h4>
                                
                                    <Box className="mail-heading"sx={{fontSize:{lg:'45px',md:'45px',sm:'24px',xs:'20px'}}} >
                                         JOIN US AS A SUPER FANS <br />AND GET ALL   <p>THE BENEIFITS</p> 
                                         </Box>
                                     <p className='mail-paragraph'>Our Success in creating business solution is due in large part </p>
                                    <p className='mail-paragraphs'> to our talented and highly committed team.</p>
                                    <button className="join-our-btn">Join Our Team</button>
                            </div>
                          
                    </Box>
                    <Box xs={{marginTop:'50px'}}>
                        <Box  className="name-email " sx={{display:'flex',flexDirection:{xs:'column',sm:'column',lg:'row',md:'row'}}}>
                            <input type="text" className="input-box"   placeholder="YOUR NAME"/>
                            <input type="text" className="input-box"   placeholder="EMAIL" />
                        </Box>
                        <div style={{marginTop:'10px'}}>
                            <textarea className="msg-input-box" placeholder="MESSAGE"></textarea>
                        </div>
                        <button className="join-our-btn">Send Message</button>
                    </Box>
                </Box>
           </Box>
       </Box>   
    );
}
export  default Sendmail;