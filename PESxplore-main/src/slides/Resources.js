function Resources(){
    return(<div>
          <div class="res-parent">
            <div class="res-left">
                <div class = "L1"><h1>GET <span class="bgbox">RESOURCES</span></h1></div>
                <div class = "L2"><p>Study materials and more, just a click away! Get access to everything here</p></div>
                <button class="res">RESOURCES </button>
            </div>
            <div class="res-right">
                <img class="res-img" src={require("../resources/images/resourcesimg.png")} alt="IMAGE"/>
            </div>
        </div>
    </div>)
};

export default Resources