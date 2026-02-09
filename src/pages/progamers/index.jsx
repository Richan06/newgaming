import Meetgamers from "../../components/meetgamers";
import Prydesign from "../../components/prydesign";
import Slick from "../../components/slick";
import Sendmail from "../../components/sendmail";
import Imageslide from "../../components/imageslide";
import Connectwith from "../../components/connectwith";
import Footer from "../../components/footer";
function Progamers(){
    return(
        < div className="background-img">
            <div style={{marginTop:'30px'}}>
                 <Meetgamers/>
                 <Prydesign/>
                 <Slick/>
                 <Sendmail/>
                 <Imageslide/>
                 <Connectwith/>
                 <Footer/>

            </div>
       
        </div>
    );
}
export default Progamers;