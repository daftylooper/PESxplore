function Faculty(){
    return(<div>
          <div class="fac-parent">
            <div class="fac-left">
            <img class="fac-img" src={require("../resources/images/faculty.png")} alt="IMAGE"/>
            </div>
            <div class="fac-right">
            <div class = "f-l1"><h1>MEET THE <span class="bgbox"> FACULTY</span></h1></div>
            <div class = "f-l2"><p>Team work makes the dream work. 
                Get to know and find all the teachers of PES here.</p></div>
            <button class="meet">MEET</button>
            </div>
        </div>
    </div>)
};

export default Faculty
