import React, { useState,useEffect,useRef } from 'react'
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import './index.css'
import galactic from '../../assets/images/galactic.png'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleOpenSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };


useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) { 
      setShowMenu(false);
      setOpenDropdown(null);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


 const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    btn.style.setProperty("--x", `50%`);
    btn.style.setProperty("--y", `50%`);
  };


  return (
    <>
      <div className='navbar-box'>
        <Container className='nav-container'>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between', paddingTop: 1, paddingBottom: 1 }}>

            <img className='galactic-img' src={galactic} alt="" />

            <Box className='navigation-key'
              sx={{ display: { xs: "none", sm: "none", md: "flex" }, gap: 3 }}>
              <a className='nav-link' href="/">HOME</a>

              <div className='dropdown'>
                <a className='nav-link' href="">TOURNAMENT</a>
                <div className='dropdown-content'>
                  <a href="/tornament/upcomingmatches">Upcoming Matches</a><hr />
                  <a href="/tornament/schedule">Stream Schedule</a>
                </div>
              </div>

              <div className='dropdown'>
                <a className='nav-link' href="">PAGES</a>
                <div className='dropdown-content'>
                  <a href="/pages/aboutus">About Us</a><hr />
                  <a href="/pages/ourgamers">Gamers</a>
                </div>
              </div>

              <div className='dropdown'>
                <a className='nav-link' href="">SHOP</a>
                <div className='dropdown-content'>
                  <a href="/shop/shopgrid">Shop Grid</a><hr />
                  <a href="/shop/shopdetails">Shop Details</a>
                </div>
              </div>

              <div className='dropdown'>
                <a className='nav-link' href="">BLOG</a>
                <div className='dropdown-content'>
                  <a href="/blog/gridlayout">Grid Layout</a><hr />
                  <a href="/blog/Blogdetails">Blog Details</a>
                </div>
              </div>

              <a className='nav-link' href="/contact">CONTACT</a>
            </Box>

            <Box sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" }, alignItems: "center", gap: 2 }}>
              <SearchSharpIcon className="search-icon" onClick={handleOpenSearch} />
              <button  ref={btnRef}
      className="search-icon-btn"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>Join Our Team</button>
            </Box>

  
            <Box sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "none" }, alignItems: "center", gap: 2 }}>
              <SearchSharpIcon className="search-icon" onClick={handleOpenSearch} />
              <button className="search-icon-btn">Join Our Team</button>
              {showMenu ? (
                <CloseIcon
                  sx={{ fontSize: 30, color: 'white', cursor: 'pointer' }}
                  onClick={() => setShowMenu(false)}
                />
              ) : (
                <MenuOpenRoundedIcon
                  sx={{ fontSize: 30, color: 'white', cursor: 'pointer' }}
                  onClick={() => setShowMenu(true)}
                />
              )}
            </Box>
            <Box sx={{ display: { lg: "none", md: "none", sm: "none", xs: "flex" }, alignItems: "center", gap: 2 }}>
            
              {showMenu ? (
                <CloseIcon
                  sx={{ fontSize: 30, color: 'white', cursor: 'pointer' }}
                  onClick={() => setShowMenu(false)}
                />
              ) : (
                <MenuOpenRoundedIcon
                  sx={{ fontSize: 30, color: 'white', cursor: 'pointer' }}
                  onClick={() => setShowMenu(true)}
                />
              )}
            </Box>
          </Box>

          
        </Container>

  
        {showMenu && (
          <div className="mobile-menu-container">
            <div className="mobile-menu-links">
              <a href="/" className="mobile-menu-item">HOME</a>

              <div className="mobile-menu-dropdown">
                <div className="mobile-menu-item" onClick={() => toggleDropdown("tournament")}>
                  TOURNAMENT {openDropdown === "tournament" ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                </div>
                {openDropdown === "tournament" && (
                  <div className="mobile-submenu">
                    <a href="/tornament/upcomingmatches">Upcoming Matches</a>
                    <a href="/tornament/schedule">Stream Schedule</a>
                  </div>
                )}
              </div>

              <div className="mobile-menu-dropdown">
                <div className="mobile-menu-item" onClick={() => toggleDropdown("pages")}>
                  PAGES {openDropdown === "pages" ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                </div>
                {openDropdown === "pages" && (
                  <div className="mobile-submenu">
                    <a href="/pages/aboutus">About Us</a>
                    <a href="/pages/ourgamers">Gamers</a>
                  </div>
                )}
              </div>

              <div className="mobile-menu-dropdown">
                <div className="mobile-menu-item" onClick={() => toggleDropdown("shop")}>
                  SHOP {openDropdown === "shop" ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                </div>
                {openDropdown === "shop" && (
                  <div className="mobile-submenu">
                    <a href="/shop/shopgrid">Shop Grid</a>
                    <a href="/shop/shopdetails">Shop Details</a>
                  </div>
                )}
              </div>

              <div className="mobile-menu-dropdown">
                <div className="mobile-menu-item" onClick={() => toggleDropdown("blog")}>
                  BLOG {openDropdown === "blog" ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                </div>
                {openDropdown === "blog" && (
                  <div className="mobile-submenu">
                    <a href="/blog/gridlayout">Grid Layout</a>
                    <a href="/blog/Blogdetails">Blog Details</a>
                  </div>
                )}
              </div>

              <a href="/contact" className="mobile-menu-item">CONTACT</a>
            </div>
          </div>
        )}
      </div>

      {showSearch && (
        <div className="search-overlay" onClick={handleCloseSearch}>
          <div className="search-box" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Type keywords Here" className="search-input" autoFocus />
            <SearchSharpIcon className="close-btn" onClick={handleCloseSearch} />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;


