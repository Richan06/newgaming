import {Box } from '@mui/material'
import LocationPinIcon from '@mui/icons-material/LocationPin';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import './index.css'
function Sendtoaddress(){
    return (
      <div className='address-container'>
        <div className='address-fullwidth'>
           <Box sx={{display:'flex',color:'white',fontFamily:'oxanium',flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'},gap:'10px'}}>
            <Box>
                <h1 style={{display:'inline'}} >Do You Have Any  </h1> <h1  style={{display:'inline',color:'blueviolet'}}>Questions ?</h1>
                <p>Get in touch to discuss your employee wellbeing needs today. Please give us a call,
                     drop us an email or fill out the contact form.</p>


                     <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                        <div className='mini-mui-icons' >
                            <LocationPinIcon sx={{fontSize:'large'}}/>
                        </div>
                        <p>962 Fifth Avenue,<br/>New York ,NY10022</p>
                       
                     </div>

                      <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                        <div  className='mini-mui-icons' >
                            <EmailIcon sx={{fontSize:'large'}}/>
                        </div>
                        <p>hello@themaster.net<br/>Yourmail@gmail.com</p>
                       
                     </div>

                      <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                        <div  className='mini-mui-icons' >
                            <PhoneEnabledIcon sx={{fontSize:'large'}}/>
                        </div>
                       <p>(+123) 456 789 101<br/>+1-302-123-4567</p>
                       
                     </div>

            </Box>
            <Box>
                 <h1 style={{display:'inline'}} >Drop Us A  </h1> <h1  style={{display:'inline',color:'blueviolet'}}>Line</h1>
                 <p>Our success in creating business solutions
                     is due in large part to our talented and highly committed team.</p>
                     <input className='input-box-one' type="text" placeholder='Name' /> <input type="text"  className='input-box-two' placeholder='Email'/>
                     <textarea type="text"  className='input-box-three' placeholder='message' />
                     <br />
                     <button  className='send-message-btn'>Send Message</button>

            </Box>    
           </Box>
        </div>
          
      </div>
    );
}
export  default Sendtoaddress