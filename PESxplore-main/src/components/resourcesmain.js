function ResourcesMain(){
    return(
        <div class="full-page" style={{display: "flex", flexDirection: "column"}}>

            <div>
                <div class="parent">
                    <div class="left">
                        <div class = "l1"><h1><span class="bgbox">DATA SCIENCE</span></h1></div>
                        <div class = "l2"><p>Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured and unstructured data, and apply knowledge from data across a broad range of application domains.</p></div>
                        <button class="explore"><a href="">PESU</a></button>
                        <button class="explore"><a href="">TEXT-BOOK</a></button>
                    </div>
                    <div class="right">
                        <img class="stats-img" src={require("../resources/images/navimg2.png")} alt="INSERT IMAGE"/>
                    </div>
                </div>
            </div>



            <div class="Automata" style={{display: "flex", flexDirection: "column"}}></div>
            <div class="DataStructures" style={{display: "flex", flexDirection: "column"}}></div>
            <div class="DDCO" style={{display: "flex", flexDirection: "column"}}> </div>
        
        
        
        
        
        </div>

    );
}

export default ResourcesMain

