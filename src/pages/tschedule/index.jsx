import Livestream from "../../components/livestream";
import Prydesign from '../../components/prydesign'
import Football from "../../components/footballgame";
import Footer from '../../components/footer'
function Tschedule(){
    return(
        <div className="background-img">
         <Livestream />
         <Prydesign/>
         <Football/>
         <Footer/>
        </div>
    );
}
export default Tschedule