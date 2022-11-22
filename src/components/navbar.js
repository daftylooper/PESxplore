import { Link } from 'react-router-dom'

function Navbar(){
    return(<div>
        <div class="navbar" style={{width: "100%", background: "rgb(3, 17, 45)"}}>
            <div class="navbar-left">
                <img src={require("../resources/images/pesxplore.png")} alt="logo"></img>
            </div>
            <div class="navbar-right">
                <div><Link to="/faculty" class="facultyLink">+FACULTY</Link></div>
                <div><Link to="/navigate" class="navigateLink">+NAVIGATE</Link></div>
                <div><Link to="/resources" class="navigateLink">+RESOURCES</Link></div>
                <div><Link to="/faq" class="forumsLink">+FORUMS</Link></div>
                <div><Link to="/" class="home"><img src={require("../resources/images/home-icon.png")}></img></Link></div>
            </div>
        </div>
    </div>)
};

export default Navbar