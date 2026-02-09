import  {Box} from '@mui/material'
import  './index.css'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import chasing from '../../assets/images/images-chasing.jpg'
import winter from '../../assets/images/winterland.jpg'
import ice from '../../assets/images/ice.jpg'
function Blogbox(){
    return(
          <div className='blogbox-container'>
            <div className='blogbox-fullwidth'>
                <Box sx={{display:'flex',justifyContent:'space-around',gap:'10px',flexDirection:{
                    lg:'row',md:'row',sm:'column',xs:'column'
                }}}>
                    <Box>
                        <div className='first-box-in'>
                            <div style={{height:'300px',backgroundColor:'white',width:'100%',overflow:'hidden'}}>
                                 <img className='images-in' src={chasing} alt="" />
                            </div>
                          <Box sx={{ padding: "20px" ,color:'white',fontFamily:'oxanium'}}>
                                <div className="blogbox-small-icon">
                                <span style={{ color: "blueviolet" }}>
                                    <CalendarMonthIcon />
                                </span>
                                <p> JAN 01 2022 </p>
                                <span style={{ color: "blueviolet" }}>
                                    <PersonOutlineOutlinedIcon />
                                </span>
                                <p> ELLIOT ALDERSON</p>
                                </div>
                                <p className="blogbox-heading">
                                Financial Expert Support Help You to Find Out
                                </p>
                                <p className="blogbox-desc">
                                Financial experts support or help you to to find out which way
                                you can raise your funds more...
                                </p>
                                <hr className="blog-mini-line" /> READMORE
                        </Box>
                            
                            
                        </div>
                         <div className='first-box-in'>
                            <div style={{height:'300px',backgroundColor:'white',width:'100%',overflow:'hidden'}}>
                                 <img className='images-in' src={ice} alt="" />
                            </div>
                          <Box sx={{ padding: "20px" ,color:'white',fontFamily:'oxanium'}}>
                                <div className="blogbox-small-icon">
                                <span style={{ color: "blueviolet" }}>
                                    <CalendarMonthIcon />
                                </span>
                                <p> JAN 01 2022 </p>
                                <span style={{ color: "blueviolet" }}>
                                    <PersonOutlineOutlinedIcon />
                                </span>
                                <p> ELLIOT ALDERSON</p>
                                </div>
                                <p className="blogbox-heading">
                                Financial Expert Support Help You to Find Out
                                </p>
                                <p className="blogbox-desc">
                                Financial experts support or help you to to find out which way
                                you can raise your funds more...
                                </p>
                                <hr className="blog-mini-line" /> READMORE
                        </Box>
                            
                            
                        </div>
                         <div className='first-box-in'>
                            <div style={{height:'300px',backgroundColor:'white',width:'100%',overflow:'hidden'}}>
                                 <img className='images-in' src={winter} alt="" />
                            </div>
                          <Box sx={{ padding: "20px" ,color:'white',fontFamily:'oxanium'}}>
                                <div className="blogbox-small-icon">
                                <span style={{ color: "blueviolet" }}>
                                    <CalendarMonthIcon />
                                </span>
                                <p> JAN 01 2022 </p>
                                <span style={{ color: "blueviolet" }}>
                                    <PersonOutlineOutlinedIcon />
                                </span>
                                <p> ELLIOT ALDERSON</p>
                                </div>
                                <p className="blogbox-heading">
                                Financial Expert Support Help You to Find Out
                                </p>
                                <p className="blogbox-desc">
                                Financial experts support or help you to to find out which way
                                you can raise your funds more...
                                </p>
                                <hr className="blog-mini-line" /> READMORE
                        </Box>
                            
                        </div>
                          <div style={{display:'flex',marginTop:'30px'}}>
                            <p className='blogbox-pages'>←</p>
                            <p className='blogbox-pages1' >1</p>
                            <p className='blogbox-pages1' >2</p>
                            <p className='blogbox-pages1'>3</p>
                            <p className='blogbox-pages1'>→</p>
                            
                        </div>

                    </Box>
                    <Box >
                        <Box>
                            <div style={{backgroundColor:'rgba(201, 201, 208, 0.1)' ,padding:'22px',marginTop:'28px'}}>
                                <div style={{backgroundColor:'rgb(8, 7, 72)',paddingLeft:'10px',paddingRight:'10px'}}>
                                     <input className='search-inputbox' type="text" placeholder='search ' /> 🔍︎
                                </div>                       
                            </div>

                          <div style={{backgroundColor:'rgba(201, 201, 208, 0.1)' ,padding:'15px',marginTop:'28px'
                            ,fontFamily:'oxanium',color:'white'
                          }}>
                            <h4 style={{fontSize:'25px'}}>
                                Categories
                            </h4>
                            <div className='categorie-flex'>
                            <p className='categorie-list'> Business Strategy</p> 
                             <p className='categorie-num'> 23</p>
                             </div>
                              <div className='categorie-flex'>
                            <p className='categorie-list'> Project Management</p> 
                             <p className='categorie-num'> 05</p>
                             </div>
                              <div className='categorie-flex'>
                            <p className='categorie-list'> Digital Marketing</p> 
                             <p className='categorie-num'> 18</p>
                             </div>
                              <div className='categorie-flex'>
                            <p className='categorie-list'>Customer Experience</p> 
                             <p className='categorie-num'> 04</p>
                             </div>
                              <div className='categorie-flex'>
                            <p className='categorie-list'>Partnership System</p> 
                             <p className='categorie-num'> 15</p>
                             </div>
                          </div>
                          
                          <div style={{fontFamily:'oxanium',color:'white',padding:'10px',backgroundColor:'rgba(201, 201, 208, 0.1)' ,marginTop:'20px'}}>
                           <h3>Recent Activity</h3>
                           <div style={{display:'flex',gap:"5px"}}>
                            <img src={winter} style={{width:'90px',}} alt="" />
                            <div>
                                <p > 
                                How to go about initiating an start up <br /> in few days <br />
                                <p style={{fontSize:'13px',marginTop:'0px'}} >Jan 01 2022</p>
                              </p>
                            </div> 
                           </div>
                           <div style={{display:'flex',marginTop:'10px',gap:"5px"
                           }}>
                            <img src={chasing} style={{width:'90px',}} alt="" />
                            <div>
                                <p > 
                                How to go about initiating an start up <br /> in few days <br />
                                <p style={{fontSize:'13px',marginTop:'0px'}} >Jan 01 2022</p>
                              </p>
                            </div> 
                           </div>
                           <div style={{display:'flex',marginTop:'10px',gap:"5px"}}>
                            <img src={ice} style={{width:'90px',}} alt="" />
                            <div>
                                <p > 
                                How to go about initiating an start up <br /> in few days <br />
                                <p style={{fontSize:'13px',marginTop:'0px'}} >Jan 01 2022</p>
                              </p>
                            </div> 
                           </div>

                          </div>


                          <div style={{
                            backgroundColor:'rgba(201, 201, 208, 0.1)',padding:'10px',marginTop:'20px'}}>
                           <h3 style={{fontFamily:'oxanium',color:'white'}}>
                            Tags
                           </h3>
                           <button className='blogbox-btn'> business</button>
                           <button className='blogbox-btn' > Marketing</button>
                           <button className='blogbox-btn'> Startup </button>
                           <button className='blogbox-btn'> Design</button> 
                           <br />
                            <button className='blogbox-btn'> consulting</button>
                           <button className='blogbox-btn' > Strategy</button>
                           <button className='blogbox-btn'>Development </button>
                           <br />
                           <button className='blogbox-btn'> Tips</button>
                           <button className='blogbox-btn' > Seo</button>
                        

                          </div>
                        </Box>
                       
                    </Box>
                </Box>

            </div>

          </div>
    );
}
export default Blogbox;