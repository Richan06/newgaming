import Product1 from '../../assets/images/product-1.png'
import Product2 from '../../assets/images/product-2.png'
import Product3 from '../../assets/images/product-3.png'
import Product4 from '../../assets/images/product-4.png'
import Product5 from '../../assets/images/product-5.png'
import Product6 from '../../assets/images/product-6.png'
import Slider from '@mui/material/Slider';
import RepeatIcon from '@mui/icons-material/Repeat';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as React from 'react';
import './index.css'
import StarIcon from '@mui/icons-material/Star';
import {Box } from '@mui/material'
import {TextField,MenuItem} from '@mui/material'
import { useState } from 'react'


function Newgears(){
     
     const [sort,setsort]=useState("Sort by Price : high to Low")
     const sorts=["Sort by Price : high to Low",
        "Sort by Popularity",
        "Sort by Average Rating",
        "Sort by Prices ",
        "Sort by Price : low to high"
    ];

    return (
       <div className='newgear-container'>
        <div className='newgear-width'> 
            <Box sx={{display:'flex', flexDirection:{lg:'row',md:'column',sm:'column',xs:'column'},justifyContent:'space-between',flex:'wrap',gap:{lg:'0px',md:'100px'}}}>
                <Box>
                    <div style={{display:'flex', justifyContent:'space-between',alignContent:'center'}}>
                        <div>
                             <p>Showing 1-6 of 22 results</p>
                        </div>
                       <Box >
                             <TextField sx={{padding:'0',borderColor:'white',color:'white',backgroundColor:'rgba(160, 32, 240,0.3)'}}  value={sort} select onChange={(e)=>setsort(e.target.value)} >
                            {sorts.map((option)=>(
                                <MenuItem   key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))  }
                          </TextField>
                       </Box>
                       
                    </div>


                    <Box className='wraping' sx={{display:'flex',justifyContent:{lg:'space-between',md:'center',sm:'center'},marginTop:'30px',gap:{lg:'10px',md:'30px'},flexDirection:{lg:'row',md:'row',sm:'row',xs:'column'}
                    }}>
                      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
                          <Box className='product-boxes' sx={{width:{lg:'270px',md:'280px',sm:'280px',xs:'280px'},height:{lg:'270px',height:'280px',sm:'280px',xs:'280px'}}}>
                            <img className='gear-product-images' src={Product1} alt="" />
                            <p style={{backgroundColor:'red',position:'absolute',marginLeft:'8px',padding:'2px'}}>HOT</p>
                            <div className=' hover-content' >  
                                   <p className='icon-1'><FavoriteBorderIcon /></p>
                                   <p className='icon-2' ><RepeatIcon /></p>
                                   <p className='icon-3'><OpenInFullIcon /></p>
                                   <button className='btn-1' >Add to Cart</button>
                            </div>
                            
                          </Box>

                            <div style={{display:'flex',justifyContent:'',alignItems:'center',position:'relative',marginTop:'0px',gap:'20%'}}>
                                <div>
                                     <h5 style={{margin:'0px'}}>Steering</h5>
                                    </div>   
                                    <div style={{position:'relative'}}>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon  fontSize='small'color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        </div>
                           
                            </div>
                             <h2 style={{margin:'0'}}>Steering Wheel</h2>
                             <h3 style={{color:"blueviolet",margin:'0'}}>$ 69.00</h3>
                         

                      </Box>
                        
                          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
                         <Box className='product-boxes2' sx={{width:{lg:'270px',md:'280px',sm:'280px',xs:'280px'},height:{lg:'270px',md:'280px',sm:'280px',xs:'280px'}}}>
                            <img className='gear-product-images' src={Product2} alt="" />
                            <p style={{backgroundColor:'green',position:'absolute',marginLeft:'8px',padding:'2px'}}>In Stock</p>
                             <div className=' hover-content2' >  
                                   <p className='icon-1'><FavoriteBorderIcon /></p>
                                   <p className='icon-2' ><RepeatIcon /></p>
                                   <p className='icon-3'><OpenInFullIcon /></p>
                                   <button className='btn-1' >Add to Cart</button>
                            </div>
                          </Box>

                            <div style={{display:'flex',justifyContent:'',alignItems:'center',position:'relative',marginTop:'0px',gap:'20%'}}>
                                <div>
                                     <h5 style={{margin:'0px'}}>Mouse</h5>
                                    </div>   
                                    <div style={{position:'relative'}}>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon  fontSize='small'color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        </div>
                           
                            </div>
                             <h2 style={{margin:'0'}}>Fantech Mouse</h2>
                             <h3 style={{color:"blueviolet",margin:'0'}}>$ 49.00</h3>
                         

                      </Box>
                        
                        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
                         <Box className='product-boxes3' sx={{width:{lg:'270px',md:'280px',sm:'280px',xs:'280px'},height:{lg:'270px',md:'280px',sm:'280px',xs:'280px'}}}>
                            <img className='gear-product-images' src={Product3} alt="" />
                            <p style={{backgroundColor:'red',position:'absolute',marginLeft:'8px',padding:'2px'}}>-70%</p>
                             <div className=' hover-content3' >  
                                   <p className='icon-1'><FavoriteBorderIcon /></p>
                                   <p className='icon-2' ><RepeatIcon /></p>
                                   <p className='icon-3'><OpenInFullIcon /></p>
                                   <button className='btn-1' >Add to Cart</button>
                            </div>
                          </Box>

                            <div style={{display:'flex',justifyContent:'',alignItems:'center',position:'relative',marginTop:'0px',gap:'20%'}}>
                                <div>
                                     <h5 style={{margin:'0px'}}>Console</h5>
                                    </div>   
                                    <div style={{position:'relative'}}>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon  fontSize='small'color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        </div>
                           
                            </div>
                             <h2 style={{margin:'0'}}>Targus Console</h2>
                             <h3 style={{color:"blueviolet",margin:'0'}}>$ 39.00</h3>
                         

                      </Box>
                    </Box>
                     <Box sx={{display:'flex',marginTop:'50px',justifyContent:{lg:'space-between',md:'center',sm:'center'},gap:{lg:'10px',md:'30px'},flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'}
                    }}>
                      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
                          <Box className='product-boxes4' sx={{width:{lg:'270px',md:'280px',sm:'280px',xs:'280px'},height:{lg:'270px',height:'280px',sm:'280px',xs:'280px'}}}>
                            <img className='gear-product-images' src={Product4} alt="" />
                            <p style={{backgroundColor:'green',position:'absolute',marginLeft:'8px',padding:'2px'}}>In Stock</p>
                             <div className=' hover-content4' >  
                                   <p className='icon-1'><FavoriteBorderIcon /></p>
                                   <p className='icon-2' ><RepeatIcon /></p>
                                   <p className='icon-3'><OpenInFullIcon /></p>
                                   <button className='btn-1' >Add to Cart</button>
                            </div>
                          </Box>

                            <div style={{display:'flex',justifyContent:'',alignItems:'center',position:'relative',marginTop:'0px',gap:'20%'}}>
                                <div>
                                     <h5 style={{margin:'0px'}}>Controller</h5>
                                    </div>   
                                    <div style={{position:'relative'}}>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon  fontSize='small'color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        </div>
                           
                            </div>
                             <h2 style={{margin:'0'}}>XBOX CONTROLLER</h2>
                             <h3 style={{color:"blueviolet",margin:'0'}}>$ 19.00</h3>
                         

                      </Box>
                        
                          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
                         <Box className='product-boxes5' sx={{width:{lg:'270px',md:'280px',sm:'280px',xs:'280px'},height:{lg:'270px',md:'280px',sm:'280px',xs:'280px'}}}>
                            <img className='gear-product-images' src={Product5} alt="" />
                            <p style={{backgroundColor:'red',position:'absolute',marginLeft:'8px',padding:'2px'}}>HOT</p>
                             <div className=' hover-content5' >  
                                   <p className='icon-1'><FavoriteBorderIcon /></p>
                                   <p className='icon-2' ><RepeatIcon /></p>
                                   <p className='icon-3'><OpenInFullIcon /></p>
                                   <button className='btn-1' >Add to Cart</button>
                            </div>
                          </Box>

                            <div style={{display:'flex',justifyContent:'',alignItems:'center',position:'relative',marginTop:'0px',gap:'20%'}}>
                                <div>
                                     <h5 style={{margin:'0px'}}>Chair</h5>
                                    </div>   
                                    <div style={{position:'relative'}}>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon  fontSize='small'color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        </div>
                            </div>
                             <h2 style={{margin:'0'}}>ERGONOMIC CHAIR</h2>
                             <h3 style={{color:"blueviolet",margin:'0'}}>$ 39.00</h3>
                      </Box>
                        
                        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
                         <Box className='product-boxes6' sx={{width:{lg:'270px',md:'280px',sm:'280px',xs:'280px'},height:{lg:'270px',md:'280px',sm:'280px',xs:'280px'}}}>
                            <img className='gear-product-images' src={Product6} alt="" />
                            <p style={{backgroundColor:'orange',position:'absolute',marginLeft:'8px',padding:'2px'}}>Out of Stock</p>
                             <div className=' hover-content6' >  
                                   <p className='icon-1'><FavoriteBorderIcon /></p>
                                   <p className='icon-2' ><RepeatIcon /></p>
                                   <p className='icon-3'><OpenInFullIcon /></p>
                                   <button className='btn-1' >Add to Cart</button>
                            </div>
                          </Box>

                            <div style={{display:'flex',justifyContent:'',alignItems:'center',position:'relative',marginTop:'0px',gap:'20%'}}>
                                <div>
                                     <h5 style={{margin:'0px'}}>Headphones</h5>
                                    </div>   
                                    <div style={{position:'relative'}}>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon  fontSize='small'color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        <StarIcon fontSize='small' color='warning'/>
                                        </div>
                           
                            </div>
                             <h2 style={{margin:'0'}}>INTREX HEADPHONES</h2>
                             <h2 style={{color:"blueviolet",margin:'0'}}>$ 19.00</h2>
                         

                      </Box>
                    </Box>
                       <Box sx={{marginTop:'40px'}}>
                         <p className='all-pageno'>←</p>
                          <p className='all-pageno'>1</p>
                           <p className='all-pageno'>2</p>
                            <p className='all-pageno'>3</p>
                          <p className='all-pageno'>→</p>
                       </Box>

                </Box>
                <Box>
                    <Box className="category-box" sx={{width:{lg:'250px',md:'100%'}}}>
  <h3>|| Categories</h3>

  <div className="category-list">
    <div className="category-item">
      <p>Jackets & Coats</p>
      <span>23</span>
    </div>
    <div className="category-item">
      <p>Loungewear</p>
      <span>05</span>
    </div>
    <div className="category-item">
      <p>Polo shirts</p>
      <span>18</span>
    </div>
    <div className="category-item">
      <p>Swimwear</p>
      <span>04</span>
    </div>
    <div className="category-item">
      <p>T-shirts</p>
      <span>15</span>
    </div>
    <div className="category-item">
      <p>Trousers</p>
      <span>48</span>
    </div>
    <div className="category-item">
      <p>Accessories</p>
      <span>75</span>
    </div>
    <div className="category-item">
      <p>Lingerie</p>
      <span>13</span>
    </div>
    <div className="category-item">
      <p>Flip Flops</p>
      <span>82</span>
    </div>
    <div className="category-item">
      <p>Rainproof</p>
      <span>61</span>
    </div>
  </div>
</Box>
 <hr  className='small-line' />
 <Box>
   <h3>
     || Filter by price
   </h3>
   <Box sx={{width:'90%'}}> 
     <Slider defaultValue={50}  aria-label="Default" valueLabelDisplay="auto" />
   </Box>
   <p style={{marginLeft:'80%'}} >Filter</p>
 </Box>
 <hr className='small-line' />
  <h4>
    || Colors
  </h4>
<div>
  <input type="checkbox" className="check-boxes black" /> <p style={{display:'inline'}}>Black</p>
</div>
<div>
  <input type="checkbox" className="check-boxes green" /> <p style={{display:'inline'}}>Green</p>
</div>
<div>
  <input type="checkbox" className="check-boxes blue" /> <p style={{display:'inline'}}>Blue</p>
</div>
<div>
  <input type="checkbox" className="check-boxes red" /> <p style={{display:'inline'}}>Red</p>
</div>
<div>
  <input type="checkbox" className="check-boxes yellow" /> <p style={{display:'inline'}}>Yellow</p>
</div>
 <hr className='small-line' />

 <h4>|| Size</h4>
 <div>
   <p className='mini-sizes' > L</p>
    <p className='mini-sizes'  >M</p>
     <p className='mini-sizes' >S</p>
      <p className='mini-sizes' >XL</p>
       <p className='mini-sizes' >XS</p>
 </div>
 <hr className='small-line' />

 <h4>|| Filter by tags</h4>
 <p className='solo-tags'>Bags</p> <p className='solo-tags'>Loungewear</p> <p className='solo-tags'>Dress</p> <br />
 <br />
 <p className='solo-tags'>Pants</p> <p className='solo-tags'>Earrings</p> <p className='solo-tags'>Shirt</p>
           </Box>
            </Box>

        </div>
       </div>
    );
}
export default Newgears;