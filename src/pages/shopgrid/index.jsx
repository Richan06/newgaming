import Shop from "../../components/shop";
import Prydesign from "../../components/prydesign";
import Newgears from "../../components/newgears";
import Footer from "../../components/footer";
function Shopgrid(){
    return(
        <div className="background-img">
            <div style={{marginTop:'40px'}}>
                 <Shop/>
                  <Prydesign/>
                  <Newgears/>
                  <Footer/>
            </div>
        </div>
    );
}
export default Shopgrid;