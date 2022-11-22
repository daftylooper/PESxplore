import Footer from "../components/footer";
import FacSlide from "../slides/FacSlide";

function FacPage(){
    return(<div style={{backgroundColor: "rgb(3, 17, 45)", display: "flex", flexDirection: "column"}}>

        <div class="fac-title" style={{marginLeft: "38%", marginTop: "10%"}}>THE <span class="bgbox">FACULTY</span></div>
        <div class = "fac-des" style={{marginLeft: "22.5%", marginTop: "4%"}}>This page contains all the information that bridges you to the teachers of PES.</div>
        
        <div class="fac-row1" style={{margin: "15% 0% 0% 0%",  display: "flex", flexDirection: "column", width: "270px"}}>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div class="abc" style={{height : "305px",display:"flex", flexDirection:"column", marginLeft: "110%", width: "270px"}}>
                <div style={{textAlign:"center",padding:"4% 0%", background: "rgb(182, 216, 255)", width: "270px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>SCIENCE AND HUMANITIES</div>
                    <hr style={{margin:"0%", border: "1px solid grey", width: "99.3%"}}></hr>
                    <FacSlide link="https://staff.pes.edu/nm1525" subject="Chemistry" teacher="Prof. Harish"/>
                    <FacSlide link="https://staff.pes.edu/nm1397" subject="Physics" teacher="Prof. Mohammed Faizal"/>
                    <FacSlide link="https://staff.pes.edu/nm1358" subject="Civil" teacher="Prof. Haridos"/>
                    <FacSlide link="https://staff.pes.edu/nm1412" subject="Mathematics" teacher="Prof. Jagatheshwari"/>
                    <div style={{background: "rgb(182, 216, 255)", width: "270px", height: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px"}}></div>
                </div>
                <div class="abc" style={{ display:"flex", flexDirection:"column", marginLeft: "50%", width: "270px"}}>
                <div style={{textAlign:"center",padding:"4% 0%", background: "rgb(182, 216, 255)", width: "270px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>COMPUTER SCIENCE</div>
                    <hr style={{border: "1px solid grey", width: "99.3%"}}></hr>
                    <FacSlide link="https://staff.pes.edu/nm1601" subject="Web Technologies" teacher="Prof. Komal Baheti"/>
                    <FacSlide link="https://staff.pes.edu/nm1411" subject="Statistics for Datascience" teacher="Prof. Girish"/>
                    <FacSlide link="https://staff.pes.edu/nm1372" subject="Data Structures" teacher="Prof. Vandana "/>
                    <FacSlide link="https://staff.pes.edu/nm1376" subject="Automata Formal Languages and Logic" teacher="Mrs. Swathi "/>
                    <div style={{background: "rgb(182, 216, 255)", width: "270px", height: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px"}}></div>
                </div>
            </div>                
                <div class="abc" style={{display:"flex", flexDirection:"column",margin:"30% 0 20% 185%", width:"270px"}}>
                    <div style={{textAlign:"center",padding:"4% 0%", background: "rgb(182, 216, 255)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>ELECTRICAL AND ELECTRONICS</div>
                    <hr style={{border: "1px solid grey", width: "99.3%"}}></hr>
                    <FacSlide link="https://staff.pes.edu/nm1429" subject="Network Analysis and Systems" teacher="Prof. Prahalad D"/>
                    <FacSlide link="https://staff.pes.edu/nm1418" subject="Analog Circuit Design" teacher="Prof. Shashidhar"/>
                    <FacSlide link="https://in.linkedin.com/in/lakshmisha-gowda-b-98b522176" subject="Signals and Systems" teacher="Prof. S.S.Laksmisha"/>
                    <FacSlide link="https://staff.pes.edu/nm1424"  subject="Computer Aided Digital Design" teacher="Prof. Bajrangbali"/>
                    <div style={{background: "rgb(182, 216, 255)", width: "270px", height: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px"}}></div>
                    </div>  
                </div>  
                {/* <img class="maam" src={pic} alt="Logo" /> */}
                
                
        
        <div><Footer/></div>       
    </div>)
    }


export default FacPage;