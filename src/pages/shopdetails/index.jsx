import Productinfo from "../../components/productinfo";
import Producttabs from '../../components/producttabs';
import Footer from '../../components/footer'
function Shopdetails(){
    return (
        <div className="background-img">
            <Productinfo/>
            <Producttabs/>
            <Footer/>
        </div>
    );
}
export default Shopdetails;