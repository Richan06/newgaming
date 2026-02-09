import Bloghead from "../../components/bloghead";
import Prydesign from "../../components/prydesign";
import Blogsection from '../../components/blogsection'
import Footer from '../../components/footer'
function Bloggrid(){
    return(
        <div className="background-img">
         <Bloghead/>
         <Prydesign/>
         <Blogsection/>
         <Footer/>
        </div>
    );
}
export default Bloggrid;