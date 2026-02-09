import './index.css'
import {Box} from '@mui/material'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import stadium from '../../assets/images/stadium.jpg'
import gungale from '../../assets/images/gungale.jpg'
import squad from '../../assets/images/squad.jpg'
function Football(){
    return (
        <div className=" football-container">
            <div className='football-fullwidth'>
                <Box className="football-flexbox"
                sx={{display:{lg:'flex',md:'flex',sm:'none',xs:'none'},flexDirection:'column' }} >
                    <Box className='football-content-start'>
                        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div><img className=' football-img' src={stadium} alt="" /> </div>
                            <div>
                                <button className="football-btn">E-FOOTBALL</button>
                                 <h3 className='fifa-title'>FIFA eWorld Cup 2022</h3>
                                 <p className='fifa-timing'>DEC.06.2029-02:30 PM</p>
                            </div>
                            <div style={{display:'flex',fontFamily:'oxanium',fontWeight:'700',padding:'40px',color:'white',}} >
                                <FontAwesomeIcon icon={faTwitch } size="2x" style={{ color: 'white' ,fontSize:'27px',fontWeight:'700'}} /> watch stream 
                            </div>
                        </Box>
                         <hr className="content-lines" />
                    </Box>
                     <Box className='football-content-start'>
                        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div>
                                <img className=' football-img' src={gungale} alt="" />
                            </div>
                            <div>
                                <button className="football-btn">E-FOOTBALL</button>
                                 <h3 className='fifa-title'>FIFA eWorld Cup 2022</h3>
                                 <p className='fifa-timing'>DEC.06.2029-02:30 PM</p>
                            </div>
                            <div style={{display:'flex',fontFamily:'oxanium',fontWeight:'700', padding:'40px',color:'white',}} >
                                    <FontAwesomeIcon icon={faTwitch } size="2x" style={{ color: 'white' ,fontSize:'27px',fontWeight:'700'}} /> watch stream 
                            </div>
                        </Box>   
                         <hr className="content-lines" />
                    </Box>
                     <Box className='football-content-start'>
                        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div>
                                <img className=' football-img' src={squad} alt="" />
                            </div>
                            <div>
                                <button className="football-btn">E-FOOTBALL</button>
                                 <h3 className='fifa-title'>FIFA eWorld Cup 2022</h3>
                                 <p className='fifa-timing'>DEC.06.2029-02:30 PM</p>
                            </div>
                            <div style={{display:'flex',fontFamily:'oxanium',fontWeight:'700',padding:'40px',color:'white',}} >
                                    <FontAwesomeIcon icon={faTwitch } size="2x" style={{ color: 'white' ,fontSize:'27px',fontWeight:'700'}} /> watch stream 
                            </div>
                        </Box>
                        <hr className="content-lines" />
                         </Box>
                </Box>
                 <Box sx={{display:{lg:'none',md:'none',sm:'flex',xs:'none'},flexDirection:'column'}}>
                    <Box className="football-content-medium">
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <div >
                            <img src={stadium} className='sm-img' alt="" />
                        </div>
                        <div>
                             <button className="football-sm-btn">E-FOOTBALL</button>
                                 <h3 className='fifa-sm-title'>FIFA eWorld Cup 2022</h3>
                                 <p className='fifa-sm-timing'>DEC.06.2029-02:30 PM</p>
                        </div>
                        <div style={{fontFamily:'oxanium',color:'white',padding:'10px',display:'flex'}}>
                            <FontAwesomeIcon icon={faTwitch } size="1x" style={{ color: 'white' ,fontSize:'22px',fontWeight:'700'}} /> watch stream 
                        </div>
                    </Box>
                    <hr className="content-lines" />
                    </Box>
                    <Box className="football-content-medium">
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <div >
                            <img src={gungale} className='sm-img' alt="" />
                        </div>
                        <div>
                             <button className="football-sm-btn">E-FOOTBALL</button>
                                 <h3 className='fifa-sm-title'>FIFA eWorld Cup 2022</h3>
                                 <p className='fifa-sm-timing'>DEC.06.2029-02:30 PM</p>
                        </div>
                        <div style={{fontFamily:'oxanium',color:'white',padding:'10px',display:'flex'}}>
                            <FontAwesomeIcon icon={faTwitch } size="1x" style={{ color: 'white' ,fontSize:'22px',fontWeight:'700'}} /> watch stream 
                        </div>
                    </Box>
                    <hr className="content-lines" />
                    </Box>
                    <Box className="football-content-medium">
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <div >
                            <img src={squad} className='sm-img' alt="" />
                        </div>
                        <div>
                             <button className="football-sm-btn">E-FOOTBALL</button>
                                 <h3 className='fifa-sm-title'>FIFA eWorld Cup 2022</h3>
                                 <p className='fifa-sm-timing'>DEC.06.2029-02:30 PM</p>
                        </div>
                        <div style={{fontFamily:'oxanium',color:'white',padding:'10px',display:'flex'}}>
                            <FontAwesomeIcon icon={faTwitch } size="1x" style={{ color: 'white' ,fontSize:'22px',fontWeight:'700'}} /> watch stream 
                        </div>
                    </Box>
                    <hr className="content-lines" />
                    </Box>
                 </Box>
                 <Box sx={{display:{lg:'none',md:'none',sm:'none',xs:'flex'},flexDirection:'column'}} >
                    <Box className="football-content-small">
                        <Box>
                            <div>
                                <img src={stadium} className='xs-img' alt="" />
                            </div>
                            <div style={{padding:'20px'}}>
                             <button className="football-xs-btn">E-FOOTBALL</button>
                                 <h3 className='fifa-xs-title'>FIFA eWorld Cup 2022</h3>
                                 <p className='fifa-xs-timing'>DEC.06.2029-02:30 PM</p>
                        </div>
                        <div style={{fontFamily:'oxanium',color:'white',paddingLeft:'20px',padding:'10px',display:'flex',marginTop:'-15px'}}>
                            <FontAwesomeIcon icon={faTwitch } size="1x" style={{ color: 'white' ,fontSize:'22px',fontWeight:'700'}} /> watch stream 
                        </div>
                          <hr className="content-lines" />
                        </Box>
                    </Box>
                     <Box className="football-content-small">
                        <Box>
                            <div>
                                <img src={gungale} className='xs-img' alt="" />
                            </div>
                            <div style={{padding:'20px'}}>
                             <button className="football-xs-btn">E-FOOTBALL</button>
                                 <h3 className='fifa-xs-title'>FIFA eWorld Cup 2022</h3>
                                 <p className='fifa-xs-timing'>DEC.06.2029-02:30 PM</p>
                        </div>
                        <div style={{fontFamily:'oxanium',color:'white',paddingLeft:'20px',padding:'10px',display:'flex',marginTop:'-19px',}}>
                            <FontAwesomeIcon icon={faTwitch } size="1x" style={{ color: 'white' ,fontSize:'22px',fontWeight:'700'}} /> watch stream 
                        </div>
                          <hr className="content-lines" />
                        </Box>
                    </Box>
                     <Box className="football-content-small">
                        <Box>
                            <div>
                                <img src={squad} className='xs-img' alt="" />
                            </div>
                            <div style={{padding:'20px'}}>
                             <button className="football-xs-btn">E-FOOTBALL</button>
                                 <h3 className='fifa-xs-title'>FIFA eWorld Cup 2022</h3>
                                 <p className='fifa-xs-timing'>DEC.06.2029-02:30 PM</p>
                        </div>
                        <div style={{fontFamily:'oxanium',color:'white',paddingLeft:'20px',padding:'10px',display:'flex',marginTop:'-15px'}}>
                            <FontAwesomeIcon icon={faTwitch } size="1x" style={{ color: 'white' ,fontSize:'22px',fontWeight:'700'}} /> watch stream 
                        </div>
                          <hr className="content-lines" />
                        </Box>
                    </Box>
                 </Box>
            </div>
        </div>
    );
}
export default Football;
