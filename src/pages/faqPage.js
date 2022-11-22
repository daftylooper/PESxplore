import axios from "axios";
import { useEffect, useState } from 'react';


function Faq(){

        const [question, setQuestion] = useState("");
        const [answer, setAnswer] = useState("");
        const [faqData, setFaqData] = useState([]);

        useEffect(()=>{
            axios.get("http://localhost:4000/api/fetchdata")
                .then(response=>setFaqData(response.data))
        }, [])

        const handleSubmit = async(event) => {
            event.preventDefault();
            const formData = {"question": question, "answer": answer}
            await axios.post("http://localhost:4000/api/addfaq", formData);
        }

    return(<div style={{background: "rgb(3, 17, 45)", display: "flex", flexDirection: "column", alignItems: "center"}}>

        <div style={{display: "flex", alignItems: "center", flexDirection:"column", marginTop: "10%", marginBottom: "10%"}}>
            <div style={{display: "flex", flexDirection: "row", fontSize: "64px", marginBottom: "5%"}}><div style={{color: "rgb(182, 216, 255)"}}>THE</div><div style={{marginLeft: "10%", background: "#61dafb", color: "rgb(3, 17, 45)"}}>FAQ</div></div>
            <div style={{display: "flex", flexDirection: "column", alignItems:"center", fontSize: "22px", color: "rgba(182, 215, 255, 0.52)", marginBottom: "5%"}}><div>This is the FAQ Page!</div><div>Scroll through to find answers to your questions!</div></div>
        </div>

        {
            faqData.map(item => {
                return(<div>
                    <div style={{width: "800px", background: "#61dafb", padding: "25px", borderRadius: "10px", marginTop: "10px"}}>
                        <div style={{fontSize: "20px", color: "rgb(3, 17, 45)"}}>{item.question}</div>
                        <div style={{width: "770px", background: "rgb(3, 17, 45)", color: "white", padding: "15px", borderRadius: "10px", marginTop: "10px"}}>{item.answer}</div>
                    </div>
                </div>)
            })
        }

        <div style={{background: "white", height: "5px", width: "100%", marginTop: "5%"}}></div>

        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "5%The"}}>
            
            <div style={{display: "flex", flexDirection: "column", marginRight: "3%"}}>
                <div style={{fontSize: "42px", color: "white", display: "flex", flexDirection: "column",}}>Couldn't Find Your <div style={{color: "#61dafb"}}>Question?</div></div>
                <div style={{fontSize: "42px", color: "white"}}>Post one right now!</div>
            </div>

            <div style={{marginTop: "5%", display: "flex", flexDirection: "column"}}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div style={{color: "white", paddingBottom: "1%"}}>Question: </div>
                        <input
                            style={{width: "500px", height: "25px", color: "white", marginBottom: "3%", borderRadius: "5px", background: "rgb(3, 17, 45)", border: "2px solid white"}}
                            type="text" 
                            value={question} 
                            onChange={(e) => setQuestion(e.target.value)} 
                            />
                    </div>

                    <div>
                        <div style={{color: "white", paddingBottom: "1%"}}>Answer: </div>
                        <input
                            style={{width: "500px", height: "100px", color: "white", borderRadius: "5px", background: "rgb(3, 17, 45)", border: "2px solid white"}}
                            type="text"
                            class="inputStyle"
                            value={answer} 
                            onChange={(e) => setAnswer(e.target.value)} 
                            />
                    </div>
                    <button type="submit" class="meet" style={{width: "510px"}}>Submit FAQ!</button>
                </form>
            </div>
        </div>

        <div style={{background: "white", height: "5px", width: "100%", marginTop: "5%"}}></div>

    </div>)
}

export default Faq;