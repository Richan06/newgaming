import { Box } from "@mui/material";
import pupg from "../../assets/images/gamecharacters.png";
import "./index.css";

function Gameimage() {
  return (
    <div>
      <Box
        className="pupgimage"
        sx={{
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "30px",
          
        }}
      >
        <img style={{ width: "60%" }} src={pupg} alt="" />
      </Box>


      <Box
        sx={{
          display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
          marginTop:'80px'
        }}
      >

        <div className="shape-container">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>


        <img
          src={pupg}
          alt="pupg"
          className="pupg-overlay"
        />

        <div className="shapes-container">
          <div className="shapes shapes-1"></div>
          <div className="shapes shapes-2"></div>
          <div className="shapes shapes-3"></div>
          <div className="shapes shapes-4"></div>
        </div>
      </Box>

      <hr className="img-line" />
    </div>
  );
}
export default Gameimage;
