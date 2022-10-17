function Navbar(){
    return(<div>
        <div class="navbar">
            <div class="navbar-left">
                <img src={require("../resources/images/pesxplore.png")} alt="logo"></img>
            </div>
            <div class="navbar-right">
                <div class="faculty">+FACULTY</div>
                <div class="navigate">+NAVIGATE</div>
                <div class="resources">+RESOURCES</div>
                <div class="forums">+FORUMS</div>
                <div class="home"><img src={require("../resources/images/home-icon.png")}></img></div>
            </div>
        </div>
    </div>)
};

export default Navbar