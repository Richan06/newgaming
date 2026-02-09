import Topblog from "../../components/topblog";
import Prydesign from "../../components/prydesign";
import Blogbox from "../../components/blogbox";
import Footer from "../../components/footer";
function Blogdetails(){
    return(
        <div className="background-img">
            <Topblog/>
            <Prydesign/>
            <Blogbox/>  
            <Footer/>
        </div>
    );
}
export default Blogdetails;