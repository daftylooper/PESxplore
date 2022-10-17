function Navigate(){
    return(<div>
          <div class="parent">
            <div class="left">
                <div class = "l1"><h1>NAVIGATE <span class="bgbox">CAMPUS</span></h1></div>
                <div class = "l2"><p>Find all buildings and locations on campus. Locate the cantene, get to your hostel or find the office. All of it is here, just for you.</p></div>
                <button class="explore">EXPLORE</button>
            </div>
            <div class="right">
                <img class="navigate-img" src={require("../resources/images/navimg2.png")} alt="INSERT IMAGE"/>
            </div>
        </div>
    </div>)
};

export default Navigate