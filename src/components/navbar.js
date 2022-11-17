import { Link } from 'react-router-dom'

function Navbar(){
    return(<div>
        <div class="navbar" style={{width: "100%", background: "rgb(3, 17, 45)"}}>
            <div class="navbar-left">
                <img src={require("../resources/images/pesxplore.png")} alt="logo"></img>
            </div>
            <div class="navbar-right">
                <div class="faculty"><Link to="/faculty">+FACULTY</Link></div>
                <div class="navigate"><Link to="/navigate">+NAVIGATE</Link></div>
                <div class="resources">+RESOURCES</div>
                <div class="forums"><Link to="/faq">+FORUMS</Link></div>
                <div class="home"><img src={require("../resources/images/home-icon.png")}></img></div>
            </div>
        </div>
    </div>)
};

export default Navbar