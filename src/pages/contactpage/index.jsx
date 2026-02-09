import Mapaddress from "../../components/mapaddress";
import Sendtoaddress  from "../../components/sendtoaddress";
import Footer from '../../components/footer'

import './index.css'
import {Box} from '@mui/material'
function Contactpage(){
    return(
        <div className='background-img'>
      <Box
  sx={{
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, 
    justifyContent: 'space-between',
  }}
>
  <div className="clip-box-first"></div>
  <div className="clip-box-second"></div>

  </Box>
  <Mapaddress/>
  <Sendtoaddress/>

  <Footer/>
  </div>
    );
}
export default Contactpage;
