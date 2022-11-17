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

    return(<div>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            placeholder="Question"
            />

          <input 
            type="text" 
            value={answer} 
            onChange={(e) => setAnswer(e.target.value)} 
            placeholder="Answer"
            />
          <button type="submit">Login</button>
        </form>

        {
            faqData.map(item => {
                return(<div>
                    <div style={{width: "800px", background: "darkblue", color: "white", padding: "25px", borderRadius: "10px", marginTop: "10px"}}>
                        <div>{item.answer}</div>
                        <div style={{width: "770px", background: "black", padding: "15px", borderRadius: "10px", marginTop: "10px"}}>{item.question}</div>
                    </div>
                </div>)
            })
        }

    </div>)
}

export default Faq;