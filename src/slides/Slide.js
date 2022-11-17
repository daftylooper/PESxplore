function Slide(props){
    return(<div>
          <div class="fac-parent" style={{width: "100%"}}>
            <div class="fac-left">
            <img class="fac-img" src={props.imag}></img>
            </div>
                <div class="fac-right" style={{marginTop: "20%", marginLeft: "25%", marginRight: "0%"}}>
                    <div class = "f-l1"><h1>{props.title} <span class="bgbox">{props.text}</span></h1></div>
                    <div class = "f-l2"><p>{props.desc}</p></div>
                    <button class="meet">{props.type}</button>
                </div>
            </div>
    </div>)
};

export default Slide
