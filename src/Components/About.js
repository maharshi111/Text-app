import React from 'react'

export default function About(props) {
    // let myStyle={
    //     color: 'white',
    //     backgroundColor:"black"
    // }
    // const[myStyle,setMyStyle]=useState({
    //         color: 'black',
    //         backgroundColor:"white",
           
    //     })
        let myStyle={
            color : props.mode ==='dark'?'white':'black',
            backgroundColor:props.mode === 'dark'?'#373245':'white'
        }

   // const[btnText,setBtnText]=useState("Enable dark mode");

    // const toggleStyle = ()=> {
    //         if(myStyle.color  === 'black'){
    //             setMyStyle(
    //                 {
    //                     color: 'white',
    //                     backgroundColor:"black",
                       
    //                 }
    //             )
    //             setBtnText("Enable light mode")
    //         }
    //         else{
    //             setMyStyle(
    //                 {
    //                     color: 'black',
    //                     backgroundColor:"white"
    //                 }
    //             )
    //             setBtnText("Enable dark mode")
    //         }
    // }
  return (
    <div className='container' style={myStyle}>
                    <h2 className='my-3'>About Us</h2>
                    <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong> Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 <strong>Free to use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            {/* <div className='container my-3'>
            <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div>
             */}
    </div>
  )
}
