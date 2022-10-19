import Navbar from "../components/navbar";
import Navigate from "../slides/Navigate";
import Resources from "../slides/Resources";
import Faculty from "../slides/faculty";
import Footer from "../components/footer";

function HomePage(){
    return(<div style={{display: "flex", flexDirection: "column"}}>
        <Navbar />
        <div class="big-text-1">All things of <span class="bgbox">PES</span>, a click <span class="bgbox">away</span></div>

        <div class="input-group mb-3" id="search">
            <input  type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" id="search-bar"></input>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src={require("../resources/images/glass-search-icon.png")}></img></button>
        </div>
        
        <Navigate/>
        <hr class="line1"/>
        <Faculty/>
        <hr class="line2"/>
        <Resources/>
        <hr class="line3"/>

        <Footer />
        
    </div>)
}

export default HomePage;