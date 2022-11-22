import Navbar from "../components/navbar";
import Slide from "../slides/Slide";
import Footer from "../components/footer";
import NavImg from "../resources/images/navimg.png"
import ResourcesImg from "../resources/images/resourcesImage.png"
import Faculty from "../resources/images/faculty.png"

import CountUp from 'react-countup';

function HomePage(){

    return(<div style={{display: "flex", flexDirection: "column", background: "rgb(3, 17, 45)"}}>
        <div class="landing-slide" style={{marginTop: '10%'}}>
            <div class="big-text-1">All things of <span class="bgbox">PES</span>, A click <span class="bgbox">away</span></div>

            {/* <div class="input-group mb-3" id="search" style={{marginTop: '10%'}} >
                <input  type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" id="search-bar"></input>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src={require("../resources/images/glass-search-icon.png")}></img></button>
            </div> */}
            <div style={{marginBottom: "12%"}}></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{background: "-webkit-linear-gradient(bottom, rgba(152, 198, 251, 0.5), rgba(3, 17, 45, 1)"}}><path fill="#61dafb" fill-opacity="1" d="M0,224L24,208C48,192,96,160,144,160C192,160,240,192,288,202.7C336,213,384,203,432,181.3C480,160,528,128,576,138.7C624,149,672,203,720,224C768,245,816,235,864,229.3C912,224,960,224,1008,229.3C1056,235,1104,245,1152,250.7C1200,256,1248,256,1296,229.3C1344,203,1392,149,1416,122.7L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
            <div class="wave-bottom" style={{display: "flex", flexDirection:"row", justifyContent:"space-around", background: "#61dafb", height:"200px", width:"100%", marginTop:"-3.2px", zIndex: "5"}}>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column", color: "white", background: "rgb(3, 17, 45)", borderRadius:"10px", padding: "0px 10px 0px 10px", height: "55%"}}>
                    <CountUp style={{fontSize: "64px", fontWeight: "700"}} start={0} end={100} duration={3} useEasing={true}/>
                    <div style={{fontSize: "24px", fontWeight: "700", color: "lightblue"}}>Clubs on our platform</div>
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column", color: "white", background: "rgb(3, 17, 45)", borderRadius:"10px", padding: "0px 10px 0px 10px", height: "55%"}}>
                    <CountUp style={{fontSize: "64px", fontWeight: "700"}} start={0} end={50} duration={3} useEasing={true}/>
                    <div style={{fontSize: "22px", fontWeight: "700", color: "lightblue"}}>Locations on PESxPLORE</div>
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column", color: "white", background: "rgb(3, 17, 45)", borderRadius:"10px", padding: "0px 10px 0px 10px", height: "55%"}}>
                    <CountUp style={{fontSize: "64px", fontWeight: "700"}} start={0} end={10} duration={3} useEasing={true}/>
                    <div style={{fontSize: "24px", fontWeight: "700", color: "lightblue"}}>Scholarships awarded</div>
                </div>
            </div>
        
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '10%'}}>
            {/* <hr class="line1"></hr> */}
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