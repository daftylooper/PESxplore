import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FacSlide from "../slides/FacSlide";
import pic from '../resources/images/pngegg.png';

function NAVpage(){
    return(<div style={{backgroundColor: "rgb(3, 17, 45)", display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", alignItems: "center", flexDirection:"column", marginTop: "10%", marginBottom: "5%"}}>
            <div style={{display: "flex", flexDirection: "row", fontSize: "64px", marginBottom: "5%"}}><div style={{color: "rgb(182, 216, 255)"}}>THE</div><div style={{marginLeft: "10%", background: "#61dafb", color: "rgb(3, 17, 45)"}}>NAVIGATOR</div></div>
            <div style={{display: "flex", flexDirection: "column", alignItems:"center", fontSize: "22px", color: "rgba(182, 215, 255, 0.52)", marginBottom: "5%"}}><div>This is the NAVIGATION Page!</div><div>Lost in the campus? Need to find the food truck? Worry no more!</div></div>
        </div> 
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1FluKr7pl3h9NT59rewrOtgd5WBgYWRo&ehbc=2E312F" width="100%" height="500"></iframe>
    </div>)
    }

    export default NAVpage