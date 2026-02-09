import React from 'react';
import { Box, Typography } from '@mui/material';
import './index.css';

function Joinus() {
  
  return (
    <div className="joinus-container">
      <Box
       className="joinus-box"
       sx={{
         textAlign: 'center',
        paddingTop: { xs: '90px', sm: '70px', md: '120px', lg: '90px' },
      marginTop: { xs: '40px', sm: '60px', md: '90px', lg: '0px' },
      }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '10px', '414px': '12px', sm: '13px', md: '15px', lg: '16px' },
            fontFamily: 'oxanium',
            fontWeight: 500,
            letterSpacing: { xs: '1px', '414px': '2px', sm: '5px', md: '8px', lg: '10px' },
            marginBottom: { xs: '6px', '414px': '8px', sm: '10px' },
            color: 'white',
            textTransform: 'uppercase',
          }}
        >
          Enjoy The Games
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '26px', '414px': '30px', sm: '38px', md: '55px', lg: '65px' },
            fontWeight: 600,
            color: 'white',
            fontFamily: 'oxanium',
            margin: 0,
            lineHeight: { xs: 1.15, '414px': 1.2, sm: 1.2, md: 1.2 },
            paddingTop: { xs: 1, '414px': 1.5, sm: 2 },
          }}
        >
          Epic Games Made For <br /> True Gamers!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: '6px', '414px': '10px', sm: '15px', md: '25px', lg: '30px' },
            marginTop: { xs: '10px', '414px': '15px', sm: '20px', md: '25px' },
            flexWrap: 'wrap',
          }}
        >
          <button className="join-btn">Join Our Team</button>

          <div className="play-btn-wrapper">
            <button className="play-btn">▹</button>
            <span className="pulse"></span>
            <span className="pulse"></span>
            <span className="pulse"></span>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Joinus;






