import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer(){
    return(
        <div class="footer" style={{backgroundColor: "rgb(3, 17, 45)", color: "white", width: "100%", paddingBottom:"4%", paddingTop:"7%"}}>
            <div class="footer-content" style={{width:"80%", paddingLeft:"8%"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", paddingLeft:"4%", paddingDown:"7%"}}class="footer-logo">
                    <div><img style={{height:"150px", width:"150px"}} src={require("../resources/images/pesxplore.png")} /></div>
                    <div style={{fontSize: "12px", color: "darkgray", width: "145%", fontWeight: "700"}}>© 2022 PESxplore, All Rights Reserved</div>
                </div>
                <div class="footer-services">
                    <div style={{fontWeight: "700", fontSize: "25px", color:"#61dafb", margin:"0 0 20% 0"}}>Services</div>
                    <div style={{margin:"0% 0 10% 0"}}>Resources</div>
                    <div style={{margin:"0% 0 10% 0"}}>Faculty</div>
                    <div style={{margin:"0% 0 10% 0"}}>Navigate</div>
                    <div style={{margin:"0% 0 10% 0"}}>Forums</div>
                </div>
                <div class="footer-team" >
                    <div style={{fontWeight: "700", fontSize: "25px", color:"#61dafb", margin:"0 0 20% 0" }}>Dev&nbsp;Team</div>
                    <div style={{margin:"0% 0 10% 0"}}>Prajwal</div>
                    <div style={{margin:"0% 0 10% 0"}}>Prannay</div>
                    <div style={{margin:"0% 0 10% 0"}}>Pranav</div>
                </div>
                <div class="footer-contacts">
                    <div style={{fontWeight: "700", fontSize: "25px", color:"#61dafb", margin:"0 0 10% 0"}}>Contact</div>
                    <div style={{margin:"0% 0 10% 0"}} class="footer-mail">helpmeplease@pesxplore.com</div>
                    <div style={{margin:"0% 0 10% 0"}}class="footer-contact">+91-9421123456</div>
                    <div style={{margin:"0% 0 10% 0"}} class="footer-socials">
                        <div class="footer-socials-insta"style={{marginRight:"4%"}}>
                            <AiOutlineInstagram />
                        </div>
                        <div class="footer-socials-linkedin">
                            <AiOutlineLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
