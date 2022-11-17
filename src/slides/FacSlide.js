import { BsPerson } from "react-icons/bs";

function FacSlide(props){
    return(<div style={{backgroundColor: "rgb(182, 216, 255)", width: "270px"}}>
        <div>
            <div style={{paddingTop:"4%"}}>
                <div class="facslide" style={{padding:"3% 3% 3% 3%", display:"flex",flexDirection:"row", alignItems: "center"}}>
                    <BsPerson style={{fontSize: "24px", marginRight: "4%"}}/>
                    <div style={{display: "flex", flexDirection: "column", width: "150px"}}>
                        <div style={{fontWeight: "800"}}>{props.subject}</div>
                        <div style={{fontSize: "14px"}}>{props.teacher}</div>
                    </div>
                    <div><button class="more-but" style={{width: "50px", height: "30px", background:"white", borderRadius: "10px", border: "none"}}>More!</button></div>
                </div>
            </div>
        </div>
        {/*<div style={{display: "flex", flexDirection: "column", width:"300px"}}>
            <div><h2 style={{margin:"0 0 10% 0%"}}>{props.subject}</h2></div>
            <hr style={{width:"100%",height:"2px", borderWidth:"0", color:"gray", backgroundColor:"gray"}}></hr>
            <div style={{ display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <BsPerson/>
                <div><p style={{margin:"10% 45% 10% 10%"}}>{props.teacher}</p></div>
                <div><button style={{margin:"10% 60% 20% 0%"}}>contact</button></div>
            </div>
          </div> */}
    </div>)
};

export default FacSlide