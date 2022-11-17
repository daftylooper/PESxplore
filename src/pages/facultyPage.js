import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FacSlide from "../slides/FacSlide";
import pic from '../resources/images/pngegg.png';

function FacPage(){
    return(<div style={{backgroundColor: "rgb(3, 17, 45)", display: "flex", flexDirection: "column"}}>
        <div><Navbar/></div>  
        <div class="fac-title" style={{marginLeft: "38%", marginTop: "10%"}}>THE <span class="bgbox">FACULTY</span></div>
        <div class = "fac-des" style={{marginLeft: "22.5%", marginTop: "4%"}}>This page contains all the information that bridges you to the teachers of PES.</div>
        
        <div class="fac-row1" style={{margin: "15% 0% 0% 0%",  display: "flex", flexDirection: "column", width: "270px"}}>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div class="abc" style={{height : "320px",display:"flex", flexDirection:"column", marginLeft: "110%", width: "270px"}}>
                <div style={{textAlign:"center",padding:"4% 0%", background: "rgb(182, 216, 255)", width: "270px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>SCIENCE AND HUMANITIES</div>
                    <hr style={{margin:"0%", border: "1px solid grey", width: "99.3%"}}></hr>
                    <FacSlide subject="Chemistry" teacher="Prof. Harish"/>
                    <FacSlide subject="Physics" teacher="Prof. Mohammed Faizal"/>
                    <FacSlide subject="Civil" teacher="Prof. Haridos"/>
                    <FacSlide subject="Mathematics" teacher="Prof. Jagatheshwari"/>
                    <div style={{background: "rgb(182, 216, 255)", width: "270px", height: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px"}}></div>
                </div>
                <div class="abc" style={{ display:"flex", flexDirection:"column", marginLeft: "50%", width: "270px"}}>
                <div style={{textAlign:"center",padding:"4% 0%", background: "rgb(182, 216, 255)", width: "270px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>COMPUTER SCIENCE</div>
                    <hr style={{border: "1px solid grey", width: "99.3%"}}></hr>
                    <FacSlide subject="Web Technologies" teacher="Prof. Komal Baheti"/>
                    <FacSlide subject="Statistics for Datascience" teacher="Prof. Girish"/>
                    <FacSlide subject="Data Structures" teacher="Prof. Vandana "/>
                    <FacSlide subject="Automata Formal Languages and Logic" teacher="Mrs. Swathi "/>
                    <div style={{background: "rgb(182, 216, 255)", width: "270px", height: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px"}}></div>
                </div>
            </div>                
                <div class="abc" style={{display:"flex", flexDirection:"column",margin:"30% 0 20% 185%", width:"270px"}}>
                    <div style={{textAlign:"center",padding:"4% 0%", background: "rgb(182, 216, 255)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>ELECTRICAL AND ELECTRONICS</div>
                    <hr style={{border: "1px solid grey", width: "99.3%"}}></hr>
                    <FacSlide subject="Network Analysis and Systems" teacher="Prof. Nas Prahalad"/>
                    <FacSlide subject="Analog Circuit Design" teacher="Prof. Shashidhar"/>
                    <FacSlide subject="Signals and Systems" teacher="Prof. S.S.Laksmeesha"/>
                    <FacSlide subject="Computer Aided Digital Design" teacher="Prof. Bajrangbali"/>
                    <div style={{background: "rgb(182, 216, 255)", width: "270px", height: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px"}}></div>
                    </div>  
                </div>  
                {/* <img class="maam" src={pic} alt="Logo" /> */}
                
                
        
        <div><Footer/></div>       
    </div>)
    }


export default FacPage;