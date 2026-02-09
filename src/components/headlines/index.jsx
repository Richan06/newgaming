import './index.css'
import chasing from '../../assets/images/chasing.jpg'
import winterland from '../../assets/images/winterland.jpg'
import ice from '../../assets/images/ice.jpg'
import { Box} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
function Headlines(){
    return(
        <div className='fullwidth-container'>
          

          <div className='fixedwidth-container'>

          

        
        <div class="container-head">
            <Box class="box1" >
                <img className= "inside-img" src={chasing} alt="" />
                <Box sx={{padding:'5px',fontFamily:'oxanium'}} >
                   <div className='small-icon'>
                    <span style={{color:'blueviolet'}}>< CalendarMonthIcon/></span><p> JAN 01 2022 </p>
                     <span style={{color:'blueviolet'}}><PersonOutlineOutlinedIcon/></span> <p> ELLIOT ALDERSON</p>
                    </div>
                    <div className='hover-group'>
                       <p className='down-lin' style={{fontSize:'24px',fontFamily:'oxanium',fontWeight:600}}>How To Start Initiating </p>
                     <p className='down-lin1' style={{fontSize:'24px',marginTop:'-16px',fontFamily:'oxanium',fontWeight:600}}> An Startup in Few Days</p>
                    </div>
                    <p style={{fontSize:'16px',fontFamily:'oxanium',fontWeight:400}} >Financial experts support or help you to to find out which way you
                         can raise your funds more...</p>
                    <div style={{display:'flex',gap:'3px',alignItems:'center'}}>
                             <div><hr  className='mini-line' /> </div>
                             <div>
                                 READMORE
                             </div>
                    </div>
                    
                </Box>
                
           </Box>
            <Box class="box2">
                <img  className= "inside-img" src={ice} alt="" />
                 <Box sx={{padding:'5px',fontFamily:'oxanium'}} >
                   <div className='small-icon'>
                    <span style={{color:'blueviolet'}}>< CalendarMonthIcon/></span><p> JAN 01 2022 </p>
                     <span style={{color:'blueviolet'}}><PersonOutlineOutlinedIcon/></span> <p> ELLIOT ALDERSON</p>
                    </div>
                    <div className='hover-group'>
                       <p className='down-lin' style={{fontSize:'24px',fontFamily:'oxanium',fontWeight:600}}>Financial Expert Support </p>
                     <p className='down-lin1' style={{fontSize:'24px',marginTop:'-16px',fontFamily:'oxanium',fontWeight:600}}> HelpYou to Find Out</p>
                    </div>
                    <p style={{fontSize:'16px',fontFamily:'oxanium',fontWeight:400}} >Financial experts support or help you to to find out which way you can raise your funds more...</p>
                    <div style={{display:'flex',gap:'3px',alignItems:'center'}}>
                             <div><hr  className='mini-line' /> </div>
                             <div>
                                 READMORE
                             </div>
                    </div>
                    
                </Box>
            </Box>
            <Box class="box3">
                <img className= "inside-img" src={winterland} alt="" />
                 <Box  sx={{padding:'5px',fontFamily:'oxanium'}} >
                   <div className='small-icon'>
                    <span style={{color:'blueviolet'}}>< CalendarMonthIcon/></span><p> JAN 01 2022 </p>
                     <span style={{color:'blueviolet'}}><PersonOutlineOutlinedIcon/></span> <p> ELLIOT ALDERSON</p>
                    </div>
                    <div className='hover-group'>
                       <p className='down-lin' style={{fontSize:'24px',fontFamily:'oxanium',fontWeight:600}}>Innovative Business All</p>
                     <p className='down-lin1' style={{fontSize:'24px',marginTop:'-16px',fontFamily:'oxanium',fontWeight:600}}>  Over The World</p>
                    </div>
                    
                    <p  style={{fontSize:'16px',fontFamily:'oxanium',fontWeight:400}} >Financial experts support or help you to to find out which way you can raise your funds more...</p>
                    <div style={{display:'flex',gap:'3px',alignItems:'center'}}>
                             <div><hr  className='mini-line' /> </div>
                             <div>
                                 READMORE
                             </div>
                    </div>
                    
                    
                </Box>
            </Box>
       </div>
       </div>
       </div>
       

    );
}
export default Headlines