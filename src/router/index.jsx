import React from 'react'
import Homepage from '../pages/homepage';
import Tornament from '../pages/tornamentpage';
import Tschedule from '../pages/tschedule';
import Aboutus from '../pages/aboustus'
import Progamers from '../pages/progamers'
import Shopgrid from '../pages/shopgrid';
import Shopdetails from '../pages/shopdetails';
import Bloggrid from '../pages/bloggrid';
import Blogdetails from '../pages/blogdetails'
import Contactpage from '../pages/contactpage';
import { Route, Routes } from 'react-router-dom';
import CommonLayout from '../layouts/commonLayout'
function Router() {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/tornament/upcomingmatches" element={<Tornament/>}/>
        <Route path="/tornament/schedule" element={<Tschedule/>}/>
        <Route path="/pages/aboutus" element={<Aboutus/>}/>
        <Route path="/pages/ourgamers" element={<Progamers/>}/>
        <Route path="/shop/shopgrid" element={<Shopgrid/>}/>
        <Route path="/shop/shopdetails" element={<Shopdetails/>}/>
        <Route path="/blog/gridlayout" element={<Bloggrid/>}/>
        <Route path="/blog/gridlayout" element={<Bloggrid/>}/>
        <Route path="/blog/Blogdetails" element={<Blogdetails/>}/>
        <Route path="/contact" element={<Contactpage/>}/>
      </Route>
    </Routes>

  )
}

export default Router;
