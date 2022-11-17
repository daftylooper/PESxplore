import Navbar from "../components/navbar";
import Slide from "../slides/Slide";
import Footer from "../components/footer";
import NavImg from "../resources/images/navimg.png"
import ResourcesImg from "../resources/images/resourcesimg.png"
import Faculty from "../resources/images/faculty.png"
function HomePage(){
    return(<div style={{display: "flex", flexDirection: "column", background: "rgb(3, 17, 45)"}}>
        <div class="landing-slide" style={{marginTop: '10%'}}>
            <div class="big-text-1">All things of <span class="bgbox">PES</span>, A click <span class="bgbox">away</span></div>

            <div class="input-group mb-3" id="search" style={{marginTop: '10%'}} >
                <input  type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" id="search-bar"></input>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src={require("../resources/images/glass-search-icon.png")}></img></button>
            </div>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '30%'}}>
            <hr class="line1"></hr>
            <Slide type="LOCATE" title="Navigate" imag={NavImg} text="Campus" desc="Libraries, Cricket ground, Cantenes and more. Locate everything here!"/>
            <hr class="line1" style={{marginTop: "5%"}}></hr>
            <Slide type="MEET" title="Meet" text="Faculty" imag={Faculty} desc="Team work makes the dream work, get to know all the teachers of the universoty here."/>
            <hr class="line1" style={{marginTop: "5%"}}></hr>
            <Slide type="RESOURCES" title="Find" imag={ResourcesImg} text="Resources" desc="Get access to all the materials here!"/>
        </div>

        <div style={{padding:"2%", display: "flex", flexDirection: "row", marginTop: "10%", alignItems: "center", background: "#54c3e1", height: "220px"}}>
            <div style={{display: "flex", flexDirection: "column", marginLeft: "10%"}}>
                <div style={{fontSize: "64px", fontWeight: "900", color: "white"}}>Still have</div>
                <div style={{fontSize: "64px", fontWeight: "900", color: "black"}}>Questions?</div>
            </div>
            <div style={{width: "400px", marginLeft: "25%"}}>
                <div style={{fontWeight: "700", color: "black"}}>"These features are cool and all, but I have another question about campus and the credit system" Feels like you? Click below!</div>
                <div style={{marginTop:"10%"}}><button class="checkFAQ" style={{padding: "2% 7% 2% 7%", fontSize: "16px", fontWeight: "800", borderRadius: "10px"}}>Checkout the FAQ</button></div>
            </div>
        </div>

        <div>
            <Footer/>   
        </div>
        </div>)
}

export default HomePage;