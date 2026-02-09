import Aboutsquad from '../../components/aboutsquad'
import Prydesign from '../../components/prydesign'
import Galacticsq from '../../components/galcaticsq';
import Recent from '../../components/recent'
import Football from '../../components/footballgame'
import Imageslide from '../../components/imageslide'
import Meetgamers from '../../components/meetgamers';
import Slick from   '../../components/slick';
import Connectwith from '../../components/connectwith'
import Footer from '../../components/footer'
function Aboutus(){
    return(

        <div className='background-img'>
         <Aboutsquad/>
         <Prydesign/>
         <Galacticsq/>
         <Recent/>
         <Football/>
         <Imageslide/>
         <Meetgamers/>
         <Slick/>
         <Connectwith/>
         <Footer/>

         </div>

    );
   

}
export default Aboutus