import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer(){
    return(
        <div class="footer" style={{color: "white"}}>
            <div class="footer-content">
                <div class="footer-logo" style={{marginRight: "110%"}}>
                    <img src={require("../resources/images/pesxplore.png")}></img>
                </div>
                <div class="footer-services">
                    <div style={{fontWeight: "700", fontSize: "20px"}}>Services</div>
                    <div>Resources</div>
                    <div>Faculty</div>
                    <div>Navigate</div>
                    <div>Forums</div>
                </div>
                <div class="footer-team" >
                    <div style={{fontWeight: "700", fontSize: "20px" }}>Dev&nbsp;Team</div>
                    <div>Prajwal</div>
                    <div>Prannay</div>
                    <div>Pranav</div>
                </div>
                <div class="footer-contacts">
                    <div style={{fontWeight: "700", fontSize: "20px"}}>Contact</div>
                    <div class="footer-mail">helpmeplease@pesxplore.com</div>
                    <div class="footer-contact">+91-9421123456</div>
                    <div class="footer-socials">
                        <div class="footer-socials-insta">
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
