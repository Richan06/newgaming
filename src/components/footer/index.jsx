import {Box} from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import  galactic from '../../assets/images/galactic.png'
import './index.css'
function Footer(){
    return(
      <div className='footer-full-container'>
        <Box  className='footer-width-container'>
          {/* f */}
          <Box sx={{display:'flex', justifyContent:'space-around',
            alignItems:{lg:'none',md:'none',sm:'center',xs:'center'},
             gap:{lg:'40px',md:'40px',sm:'20px',xs:'20px'},
             flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}  }} > 
            {/* 1 */}
            <Box sx={{display:'flex',
            justifyContent:{xs:'center',sm:'center',md:'center',lg:'space-around'},
            gap:'60px',flexDirection:{xs:'column',sm:'row',md:'row',lg:'row'},
            TextAlign:{lg:'none',md:'none',sm:'center',xs:'center'}}}>

               <div className='first-navbox' style={{maxWidth:'280px'}}>

                <img src={galactic} alt="" />
                <p className='footer-paragraph'>Our Success in creating business solution is due in large part </p>
                    <p className='footer-paragraphs'> to our talented and highly committed team.</p>
                     <FacebookOutlinedIcon  className="icons"/> 
                    <TwitterIcon className="icons"/> 
                    <InstagramIcon className="icons"/> 
                    <YouTubeIcon className="icons"/>

               </div>
               <div className='first-navbox' style={{maxWidth:'280px'}}>
                <h3 className='footer-title'> Usefull Links</h3>
                <a className='link-tag' href="">Tornaments</a> <br />
                <a className='link-tag' href=""> Help Center</a> <br />
                <a className='link-tag' href="">Privacy and Policy</a> <br />
                <a className='link-tag' href="">Terms of Use</a> <br />
                <a className='link-tag' href="">Contact Us</a>

               </div>


            </Box>
            {/* 2 */}
            <Box sx={{display:'flex',justifyContent:'space-around',
            justifyContent:{lg:'space-around',md:'space-around',sm:'center',xs:'center'},
              gap:'60px',flexDirection:{xs:'column',sm:'row',md:'row',lg:'row'}}}>
              <div className='first-navbox' style={{maxWidth:'280px'}}>
                <h3 className='footer-title'>Contact Us</h3>
                 <p className='purple-clr'>LOCATION :</p>
                 <p > 153 Williamson Plaza ,Maggieberg , MT 09514</p>
                 <p className='purple-clr'>JOIN US </p>
                 <p>info@yourGmail24.com</p>
                 <p className='purple-clr'>PHONE</p>
                 <p> +1 (062) 109-9222</p>

              </div>
              <div className='first-navbox' style={{maxWidth:'280px'}}>
                <h3 className='footer-title'>Newsletter Signup</h3>
                <input className='input-newsletter-email' type="text"placeholder='Your Email' /><br />
                <button  className='subscribe-btn'>Subscribe Now</button>

              </div>

            </Box>

          </Box>
        </Box>
        <div className='copy-right'>
           © 2025 ThemeEaster All Rights Reserved.
           </div>
      </div>
    );

}
export default Footer;