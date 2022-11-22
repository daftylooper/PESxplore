import Link from 'react'

function Slide(props){
    return(<div>
          <div class="fac-parent" style={{width: "100%"}}>
            <div class="fac-left">
            <img class="fac-img" style={{marginLeft: "25%"}} src={props.imag}></img>
            </div>
                <div class="fac-right" style={{marginTop: "20%", marginLeft: "10%"}}>
                    <div class="f-l1" style={{fontSize: "48px", fontWeight: "900", display: "flex", flexDirection:"row"}}>
                        <div style={{marginRight: "5%"}}>
                            {props.title}
                        </div>
                        <div class="bgbox">
                            {props.text}
                        </div>
                    </div>
                    <div class = "f-l2" style={{marginTop: "5%", fontWeight: "100", fontSize: "18px", color: "grey"}}>{props.desc}</div>
                    <button class="meet">{props.text}</button>
                </div>
            </div>
    </div>)
};

export default Slide
